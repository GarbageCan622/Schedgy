const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('everyone')
		.setDescription('Pings all users in server'),
	async execute(interaction) {
		await interaction.reply('Hello @everyone!');
	},
};