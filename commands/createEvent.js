const { SlashCommandBuilder } = require('discord.js');

//'Link to site: [Schedgy\'s Site](https://garbagecan622.github.io/Schedgy/)'

const linkMessage = {
	site: 'https://garbagecan622.github.io/Schedgy/signup.html',
	message: 'Create New Event: [Schedgy Event Creator]'
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createevent')
		.setDescription('Links user to create a new event'),
	async execute(interaction) {
		await interaction.reply('${linkMessage.message}(${linkMessage.site})');
	},
};
