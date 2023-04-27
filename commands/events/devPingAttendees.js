const { SlashCommandBuilder } = require('discord.js');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "212.192.29.151",
  user: "u88864_T3BYDVo5Nj",
  password: "+4i^Q6Pfwm@OzghvSw1V6rwt",
  database: "s88864_Events"
});

getMembersDev = function(event_id) {
    return new Promise(function(resolve, reject){
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
		.setName('devpingattendees')
		.setDescription('Ping all members of any event')
    .addStringOption(option =>
        option
          .setName('event_id')
          .setDescription('The number ID of your event.')
          .setRequired(true)
      ),
	async execute(interaction) {
    let temp = "Error"
    await getMembersDev(interaction.options.getString('event_id'))
      .then(function(results){
        temp = resultsToString(results)
      })
      .catch(function(err){ // Catch block for errors / rejects
        temp = err;
      });
    interaction.reply(String(temp));
	},
};