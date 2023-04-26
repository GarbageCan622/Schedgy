function sendWebhook() {
    /*
    require("dotenv").config();
    const webhookId = process.env.WEBHOOK_ID;
    const webhookToken = process.env.WEBHOOK_TOKEN;
    const webhookURL = 'https://discord.com/api/webhooks/${webhookId}/${webhookToken}';
    const messageContent = "A new calendar event has been created on the Schedgy website @everyone";
    const message = {content: messageContent};
  
    fetch(webhookURL, {
      method: "POST",
      headers: {"Content-Type": "application.json"},
      body: JSON.stringify(message)    
    })
    .then(response => {
      if (response.status == 204) {
        console.log("Message was sent");
      } else {
        console.log("Error: message NOT sent");
      }
    })
    .catch(error => {
      console.log("Error: " + error);
    })
    */
    const request = new XMLHttpRequest();
    require("dotenv").config();
    const webhookId = process.env.WEBHOOK_ID;
    const webhookToken = process.env.WEBHOOK_TOKEN;
    const webhookURL = `https://discord.com/api/webhooks/${webhookId}/${webhookToken}`;
    request.open("POST", webhookURL);
  
    request.setRequestHeader('Content-type', 'application/json');
  
    const params = {
      username: "Schedgy",
      avatar_url: "",
      content: "A new calendar event has been created on the Schedgy website @everyone"
    }
  
    request.addEventListener('load', function() {
      console.log('Webhook message sent successfully');
    });
  
    request.addEventListener('error', function() {
      console.log('Error sending webhook');
    });
  
    request.send(JSON.stringify(params));
  }
  module.exports = sendWebhook;