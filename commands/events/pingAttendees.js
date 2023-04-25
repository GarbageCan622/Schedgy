const { SlashCommandBuilder } = require('discord.js');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "212.192.29.151",
  user: "u88864_T3BYDVo5Nj",
  password: "+4i^Q6Pfwm@OzghvSw1V6rwt",
  database: "s88864_Events"
});


getMembers = function(event_id, callerID) {
  return new Promise(function(resolve, reject){
	// Check if user of command is the owner of the event
    con.query("SELECT author_id FROM owner_of WHERE event_id = " + String(event_id),
      function (err, rows) { 
        if (rows === undefined || rows.length == 0) {
          return reject(new Error("No event found with ID: " + String(event_id)));
        } else {
          if (rows[0].author_id != callerID) {
            return reject(new Error("You do not own the event associated with ID: " + String(event_id)));
          }
        }
    })
    let searchQuery = "SELECT uid FROM event, member_of, users WHERE event.event_id = member_of.event_id AND event.event_id = " + String(event_id) + " AND guest_id = uid";
    con.query(
      searchQuery, 
      function (err, rows) { 
        if(rows === undefined || rows.length == 0){
          return reject(new Error("Event has no members"));
        } else {
          resolve(rows);
        }
      }
  )}
)}

resultsToString = function(results){
  let out = ""
  for (var i in results) {
    //console.log(results[i].uname);
    out = out.concat("<@" + results[i].uid + "> ");
  }
  return out;
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingattendees')
		.setDescription('Ping all members of an event you own')
    .addStringOption(option =>
        option
          .setName('event_id')
          .setDescription('The number ID of your event.')
          .setRequired(true)
      ),
	async execute(interaction) {
    let temp = "Error"
    let callerID = interaction.user.id;
    await getMembers(interaction.options.getString('event_id'), callerID)
      .then(function(results){
        temp = resultsToString(results)
      })
      .catch(function(err){ // Catch block for errors / rejects
        temp = err;
      });
    interaction.reply(String(temp));
	},
};
