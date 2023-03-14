const linkMessage = require("./sendlink");

describe("Send Link Command", () => {
	test('link is correct', () => {
		expect(linkMessage.site).toBe('https://garbagecan622.github.io/Schedgy/');
	});
});