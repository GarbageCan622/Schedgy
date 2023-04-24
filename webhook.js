const Discord = require('discord.js');

class Webhook {
    constructor(webhookId, webhookToken) {
        this.webhookClient = new Discord.WebhookClient(webhookId, webhookToken);
    }

    send(message) {
        this.webhookClient.send(message);
    }

}

module.exports = Webhook;