const { SlashCommandBuilder } = require('discord.js');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "212.192.29.151",
  user: "u88864_T3BYDVo5Nj",
  password: "+4i^Q6Pfwm@OzghvSw1V6rwt",
  database: "s88864_Events"
});


getAvailability = function(event_id, callerID) {
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
    let searchQuery = "SELECT uid, availability_string, date, start_time, end_time FROM event, member_of, users WHERE event.event_id = member_of.event_id AND event.event_id = " + String(event_id) + " AND guest_id = uid";
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

finalizeToString = function(results){
  let out = "fart"
  let eventDate = results[0].date;
  let eventDays = Number(Math.abs(eventDate.substring(3,5) - eventDate.substring(16,18)) + 1);
  let eventTime = Math.abs(results[0].end_time - results[0].start_time) + 1;
  let eventStart = results[0].start_time;
  let eventEnd = results[0].end_time;

  console.log(results[0].availability_string.length)
  console.log(eventDate, eventDays, eventStart, eventEnd, eventTime)
  
  let availabilityRaw = "0b" + results[0].availability_string;
  for (var i in results) {
    if(results[i].availability_string == '0') { //Check if string is empty
        out = "Some members of your event have not yet responded. You can ping them with /pingunresponded to let them know."
    } else { // Get all avaliability overlaps by bitwise and'ing
        let temp = String("0b" + results[i].availability_string);
        availabilityRaw = BigInt(availabilityRaw) & BigInt(temp);
    }
  }
  let availabilityClean = availabilityRaw.toString(2)
  let emptyCheck = 0;
  for (var i in availabilityClean){
    emptyCheck += Number(availabilityClean[i]);
  }
  if(emptyCheck == 1) { // No times match up (only 1 is the leading 1)
    out = "No members of your event have times that line up.";
    return out;
  } else {
    potentialTimes = []
    for (var i in availabilityClean) {
        if(availabilityClean[i] == 1 && i > 0) {
            potentialTimes.push(i);
            let hold = i+1;
            while(availabilityClean[hold] == 1) {
                if(availabilityClean[i] == 1) {
                    potentialTimes.push(i);
                }
                hold++;
            }
        }
    }
    eventLength = 0;
    lengths = []
    for (var i =0; i < potentialTimes.length; i++) {
        if (potentialTimes[i+1] - potentialTimes[i] == eventDays) {
            eventLength = 1;
            hold = i;
            while(potentialTimes[i+1] - potentialTimes[i] == eventDays) {
                eventLength++;
                i++;
            }
            //console.log(potentialTimes[hold], eventLength)
            lengths.push([hold, eventLength])
        }
    }
  }
  let max = lengths[0][1];
  let position = lengths[0][0];
  for (var i in lengths) {
    if (max < lengths[i][1]) {
        max = lengths[i][1];
        position = lengths[i][0];
    }
  }
  console.log(potentialTimes[position], max);
  return out;
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('finalizeevent')
		.setDescription('Creates a message with the details of your event.')
    .addStringOption(option =>
        option
          .setName('event_id')
          .setDescription('The number ID of your event. Use /viewevents to find this number.')
          .setRequired(true)
      ),
	async execute(interaction) {
    let temp = "Error"
    let callerID = interaction.user.id;
    callerID = 152885142552051713;
    await getAvailability(interaction.options.getString('event_id'), callerID)
      .then(function(results){
        temp = finalizeToString(results)
      })
      .catch(function(err){ // Catch block for errors / rejects
        temp = err;
      });
    if (temp == "Some members of your event have not yet responded. You can ping them with /pingunresponded to let them know.") {
        interaction.reply({ content: String(temp), ephemeral: true });
    } else {
        interaction.reply({ content: String(temp), ephemeral: true });
    }
	},
};
