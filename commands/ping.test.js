import { SlashCommandBuilder } from 'discord.js';
import { execute } from './ping';

describe('Ping Command', () => {
    test('Reply with "Pong"', async () => {
        const mockInteraction = {
            reply: jest.fn(),
        }
        await execute(mockInteraction);
        expect(mockInteraction.reply).toBe('Pong');
    })
})