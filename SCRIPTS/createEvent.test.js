const createEvent = require('./createEvent')

describe (createEvent, () => {
    test('XMLHttpRequest function is defined', () => {
        expect(newXMLHttpRequest).toBeDefined();
    });

    test('Webhook URL is correctly formatted', () => {
        expect(webhookURL).toMatch(/https:\/\/discord\.com\/api\/webhooks\/\w+\/\w+/);
    });

    test('Message params object is correctly formatted', () => {
        const expectedParams = {
          username: "Schedgy",
          avatar_url: "",
          content: "A new calendar event has been created on the Schedgy website @everyone"
        };
        expect(params).toEqual(expectedParams);
    });

    test('request.send is called with correct parameters', () => {
        const sendSpy = jest.spyOn(request, 'send');
        const expectedParams = JSON.stringify({
          username: "Schedgy",
          avatar_url: "",
          content: "A new calendar event has been created on the Schedgy website @everyone"
        });
        expect(sendSpy).toHaveBeenCalledTimes(1);
        expect(sendSpy).toHaveBeenCalledWith(expectedParams);
     });
})