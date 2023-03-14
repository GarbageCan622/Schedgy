const { SlashCommandBuilder } = require('discord.js');

//'Link to site: [Schedgy\'s Site](https://garbagecan622.github.io/Schedgy/)'

const linkMessage = {
	site: 'https://garbagecan622.github.io/Schedgy/',
	message: 'Link to site: [Schedgy\'s Site]'
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sendlink')
		.setDescription('Sends a link to the github page'),
	async execute(interaction) {
		await interaction.reply('${linkMessage.message}(${linkMessage.site})');
	},
};

module.exports = linkMessage;