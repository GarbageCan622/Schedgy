// Import jQuery
import $ from 'jquery';

// Import testing libraries
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

// Import your code
import './createEvent.js';

describe('createEvent', () => {
  // Test case 1: Submit event should send webhook message
  test('submit event sends webhook message', () => {
    // Create a test element
    const testElement = document.createElement('form');
    testElement.id = 'EventForm';

    // Add the test element to the document
    document.body.appendChild(testElement);

    // Fire a submit event on the test element
    fireEvent.submit(testElement);

    // Check that the correct message is logged to the console
    expect(console.log).toHaveBeenCalledWith('Webhook message sent successfully');
  });

  // Test case 2: Should set request headers correctly
  test('request headers are set correctly', () => {
    // Set up a mock XMLHttpRequest object
    const mockRequest = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      addEventListener: jest.fn(),
      send: jest.fn()
    };
    window.XMLHttpRequest = jest.fn(() => mockRequest);

    // Fire a submit event on the form
    $('#EventForm').submit();

    // Check that the request headers were set correctly
    expect(mockRequest.setRequestHeader).toHaveBeenCalledWith('Content-type', 'application/json');
  });

  // Test case 3: Should send correct webhook message
  test('sends correct webhook message', () => {
    // Set up a mock XMLHttpRequest object
    const mockRequest = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      addEventListener: jest.fn(),
      send: jest.fn()
    };
    window.XMLHttpRequest = jest.fn(() => mockRequest);

    // Fire a submit event on the form
    $('#EventForm').submit();

    // Check that the correct webhook message was sent
    expect(mockRequest.send).toHaveBeenCalledWith(expect.stringMatching(/"username":"Schedgy"/));
    expect(mockRequest.send).toHaveBeenCalledWith(expect.stringMatching(/"content":"A new calendar event has been created on the Schedgy website @everyone"/));
  });

  // Test case 4: Should handle errors when sending webhook message
  test('handles errors when sending webhook message', () => {
    // Set up a mock XMLHttpRequest object that always errors
    const mockRequest = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      addEventListener: (eventName, callback) => {
        if (eventName === 'error') {
          callback();
        }
      },
      send: jest.fn()
    };
    window.XMLHttpRequest = jest.fn(() => mockRequest);

    // Fire a submit event on the form
    $('#EventForm').submit();

    // Check that the correct error message is logged to the console
    expect(console.log).toHaveBeenCalledWith('Error sending webhook message');
  });
});


/*
const createEvent = require('./createEvent')

describe('createEvent', () => {
    test('should send a POST request to the correct webhook URL', () => {
      // mock XMLHttpRequest
      const mockRequest = jest.fn();
      window.XMLHttpRequest = jest.fn(() => ({
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        send: mockRequest,
      }));
    
      // mock process.env
      process.env.WEBHOOK_ID = '12345';
      process.env.WEBHOOK_TOKEN = 'abcde';
    
      // call the function
      createEvent();
    
      // check that the request was sent to the correct URL
      expect(window.XMLHttpRequest.mock.calls[0][0]).toEqual('POST');
      expect(window.XMLHttpRequest.mock.calls[0][1]).toEqual('https://discord.com/api/webhooks/12345/abcde');
    });
    
    test('should set the correct request headers', () => {
      // mock XMLHttpRequest
      const mockSetRequestHeader = jest.fn();
      window.XMLHttpRequest = jest.fn(() => ({
        open: jest.fn(),
        setRequestHeader: mockSetRequestHeader,
        send: jest.fn(),
      }));
    
      // call the function
      createEvent();
    
      // check that the request headers are set correctly
      expect(mockSetRequestHeader.mock.calls[0][0]).toEqual('Content-type');
      expect(mockSetRequestHeader.mock.calls[0][1]).toEqual('application/json');
    });
    
    test('should send the correct message in the request body', () => {
      // mock XMLHttpRequest
      let sentParams;
      window.XMLHttpRequest = jest.fn(() => ({
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        send: (params) => { sentParams = params; },
      }));
    
      // call the function
      createEvent();
    
      // check that the message is sent correctly in the request body
      expect(sentParams).toEqual(JSON.stringify({
        username: 'Schedgy',
        avatar_url: '',
        content: 'A new calendar event has been created on the Schedgy website @everyone',
      }));
    });
    
    test('should log an error if the request fails', () => {
      // mock XMLHttpRequest
      window.XMLHttpRequest = jest.fn(() => ({
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        addEventListener: (eventName, callback) => {
          if (eventName === 'load') {
            callback();
          } else if (eventName === 'error') {
            callback();
          }
        },
        send: jest.fn(),
      }));
    
      // mock console.log
      const mockLog = jest.spyOn(console, 'log');
    
      // call the function
      createEvent();
    
      // check that an error is logged if the request fails
      expect(mockLog).toHaveBeenCalledWith('Error sending webhook message');
    });
  });
  */