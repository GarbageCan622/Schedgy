const fs = require('node:fs');
const path = require('node:path');
require("dotenv").config();
const Webhook = require('./webhook.js');

const webhookId = process.env.WEBHOOK_ID;
const webhookToken = process.env.WEBHOOK_TOKEN;

const webhookClient = new Webhook(webhookId, webhookToken);

const {Client, Collection, Events, GatewayIntentBits} = require("discord.js");
const client = new Client({
	intents:[
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages
	]
});

//command handling
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log('[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.');
		}
	}
}

client.once(Events.ClientReady, () => {
	console.log('Logged in and ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	
	const command = client.commands.get(interaction.commandName);
	
	if (!command) {
		console.error('No command matching ${interaction.commandName} was found.');
		return;
	}
	
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.replay({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

client.login(process.env.DISCORD_TOKEN);
