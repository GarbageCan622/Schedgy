const { SlashCommandBuilder } = require('discord.js');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "212.192.29.151",
  user: "u88864_T3BYDVo5Nj",
  password: "+4i^Q6Pfwm@OzghvSw1V6rwt",
  database: "s88864_Events"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT guest_id FROM event, member_of WHERE event.event_id = member_of.event_id", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


// Same as sendlink command currently, above sql code should work
module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingattendees')
		.setDescription('Ping all members of an event'),
	async execute(interaction) {
		await interaction.reply(`${linkMessage.message}(${linkMessage.site})`);
	},
};
