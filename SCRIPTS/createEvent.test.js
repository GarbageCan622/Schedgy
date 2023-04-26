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