const { SlashCommandBuilder } = require('discord.js');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "212.192.29.151",
  user: "u88864_T3BYDVo5Nj",
  password: "+4i^Q6Pfwm@OzghvSw1V6rwt",
  database: "s88864_Events"
});

getMembers = function(event_id) {
  return new Promise(function(resolve, reject){
    let searchQuery = "SELECT guest_id FROM event, member_of WHERE event.event_id = member_of.event_id AND event.event_id = " + String(event_id)
    con.query(
      searchQuery, 
      function (err, rows) { 
        if(rows === undefined){
          reject(new Error("Error rows is undefined"));
        } else {
          resolve(rows);
        }
      }
  )}
)}

/**
getMembers(2)
.then(function(results){
  render(results)
})
.catch(function(err){
  console.log("Promise rejection error: "+err)
})

render = function(results){ 
  for (var i in results) console.log(results[i]) 
}
*/

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingattendees')
		.setDescription('Ping all members of an event')
    .addIntegerOption(option =>
        option
          .setName('event_id')
          .setDescription('The number ID of your event.')
          .setRequired(true)
      ),
	async execute(interaction) {
    getMembers(interaction.options.getInteger('event_id'))
		await interaction.reply(results);
	},
};
