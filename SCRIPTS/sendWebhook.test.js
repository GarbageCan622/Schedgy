// sendWebhook.test.js
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const sendWebhook = require('./sendWebhook');

test('sendWebhook sends a request to the correct URL', () => {
  const openSpy = jest.spyOn(XMLHttpRequest.prototype, 'open');
  sendWebhook();
  expect(openSpy).toHaveBeenCalledWith('POST', 'https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN');
  openSpy.mockRestore();
});

test('sendWebhook sets the correct request header', () => {
  const setRequestHeaderSpy = jest.spyOn(XMLHttpRequest.prototype, 'setRequestHeader');
  sendWebhook();
  expect(setRequestHeaderSpy).toHaveBeenCalledWith('Content-type', 'application/json');
  setRequestHeaderSpy.mockRestore();
});

test('sendWebhook sends the correct payload', () => {
  const sendSpy = jest.spyOn(XMLHttpRequest.prototype, 'send');
  sendWebhook();
  expect(sendSpy).toHaveBeenCalledWith('{"username":"Schedgy","avatar_url":"","content":"A new calendar event has been created on the Schedgy website @everyone"}');
  sendSpy.mockRestore();
});

test('sendWebhook logs an error message when the request fails', () => {
  const errorSpy = jest.spyOn(console, 'log');
  const mockRequest = {
    open: jest.fn(),
    setRequestHeader: jest.fn(),
    send: jest.fn(),
    addEventListener: (event, callback) => {
      if (event === 'error') {
        callback();
      }
    }
  };
  global.XMLHttpRequest = jest.fn(() => mockRequest);
  sendWebhook();
  expect(errorSpy).toHaveBeenCalledWith('Error sending webhook');
  errorSpy.mockRestore();
});
