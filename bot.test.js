const { DiscordMock } = require('discord.js-mock-interactions');
const { bot } = require('bot.js')

describe('Ping command', () => {
    test('Bot should respond with "Pong"', async () => {
        const mock = new DiscordMock();
        const interaction = mock.createInteraction({name: 'ping', type: 1});

        await mock.simulate(interaction);

        const response = await bot(interaction);
        expect(interaction.reply).toEqual('Pong');
    })

});

/*
const { MockInteraction } = require('discord.js-mock-interactions');
const bot = require('bot.js');
const { commands } = bot;

describe('Ping command', () => {
    it('should reply with "Pong"', async () => {
        const interaction = new MockInteraction();
        await commands.get('ping').execute(interaction);

        expect(interaction.replied).toBe(true);
        expect(interaction.reply).toBe('Pong');
    });
});
*/
