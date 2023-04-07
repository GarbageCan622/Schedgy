const { SlashCommandBuilder } = require('discord.js');
const ping = require('./ping');

describe('Ping Command', () => {
    test('Reply with "Pong"', async () => {
        const mockInteraction = {
            reply: jest.fn(),
        }
        await ping.execute(mockInteraction);
        expect(mockInteraction.reply).toBe('Pong');
    })
})