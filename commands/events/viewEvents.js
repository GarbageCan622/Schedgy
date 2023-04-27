const { SlashCommandBuilder } = require('discord.js');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "212.192.29.151",
  user: "u88864_T3BYDVo5Nj",
  password: "+4i^Q6Pfwm@OzghvSw1V6rwt",
  database: "s88864_Events"
});


getEvents = function(callerID) {
  return new Promise(function(resolve, reject){
	// Check if user of command is the owner of the event
    let eventsSearchQuery = "SELECT event_id, event_name FROM event WHERE owner_id = " + String(callerID);
    con.query(
      eventsSearchQuery, 
      function (err, rows) { 
        if(rows === undefined || rows.length == 0){
          return reject(new Error("You have no events"));
        } else {
          resolve(rows);
        }
      }
  )}
)}

eventsToString = function(results){
  let out = ""
  for (var i in results) {
    //console.log(results[i].uname);
    out = out.concat("Name: " + results[i].event_name + "\t ID: "+ results[i].event_id + " \t| ");
  }
  return out;
}


module.exports = {
	data: new SlashCommandBuilder()
	    .setName('viewevents')
		.setDescription('List of event name and id pairs'),
	async execute(interaction) {
        let temp = "Error"
        let callerID = interaction.user.id;
        //callerID = 1;
        await getEvents(callerID)
        .then(function(results){
            temp = eventsToString(results);
            interaction.reply(String(temp));
        })
        .catch(function(err){ // Catch block for errors / rejects
            temp = err;
            interaction.reply({content: String(temp), ephemeral: true});
        });
	},
};
