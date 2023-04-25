//const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");
//import { exportSpecific} from "./createEvent.js";

function createSpecificDateFillOutChart(start, end){
    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours());
    var appendTable = '<tr><th></th>';
    var timeLoop = new Date(start); //this is for the for loop
    var tempTimeLoop = new Date(timeLoop); 
    var uIdSetter = 0;
    for(i=0; i<=days; i++){
        appendTable += '<th>' + timeLoop.getMonth() + '/' + timeLoop.getDate() + '/' + timeLoop.getYear() + '</th>'
        timeLoop.setDate(timeLoop.getDate() + 1);
    }
    appendTable += '</tr>'

    timeLoop = new Date(start);
    for(i=0; i<=time; i++){
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop.getHours() + ':' + String(timeLoop.getMinutes()).padStart(2, "0"); + '</th>'
        tempTimeLoop = timeLoop; 
    for(j=0; j<=days;j++){       
        tempTimeLoop.setDate(tempTimeLoop.getDate() + j)
        appendTable += '<td>' + 
                       '<input type="checkbox" id="checkboxDate' + uIdSetter + '" name="checkboxDate' + uIdSetter + '">' +
                        '<label for="checkboxDate' + uIdSetter + '">&nbsp;</label>' +
                        '</td>'
        uIdSetter+=1;    
    }
    appendTable += '</tr>'
    timeLoop.setHours(timeLoop.getHours() + 1);
}
    $('#personalTimeTable').append(appendTable);
}


function createSpecificDateGroupChart(start, end, groupArr){

    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours());
    var appendTable = '<tr><th></th>';
    var timeLoop = new Date(start); //this is for the for loop
    var tempTimeLoop = new Date(timeLoop); 
    let groupAvaliblity = [];
    var index = 0; //index position inside groupArr
    var tempAvalibilityString;
    for(i=0; i<=days; i++){
        appendTable += '<th>' + timeLoop.getMonth() + '/' + timeLoop.getDate() + '/' + timeLoop.getYear() + '</th>'
        timeLoop.setDate(timeLoop.getDate() + 1);       
    }
    appendTable += '</tr>'

    timeLoop = new Date(start);
    for(i=0; i<=time; i++){
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop.getHours() + ':' + String(timeLoop.getMinutes()).padStart(2, "0"); + '</th>'
        tempTimeLoop = timeLoop; 
        groupAvaliblity[i] = [];
    for(j=0; j<=days;j++){       
        tempTimeLoop.setDate(tempTimeLoop.getDate() + j)
       
        groupAvaliblity[i][j] = 0;
        for(k=0; k < groupArr.length; k++){           
            tempAvalibilityString = groupArr[k];
            if(tempAvalibilityString[index] == 1){
                groupAvaliblity[i][j] = groupAvaliblity[i][j] + 1;
            }
        }
        index++;
             
        appendTable += '<td>' + 
                       '<h3 class = "numAvail" id="groupAvailibility' + tempTimeLoop.toString() + '">' +
                       groupAvaliblity[i][j] + '</h3>'
                        '</td>'     
    }
    appendTable += '</tr>'
    timeLoop.setHours(timeLoop.getHours() + 1);
}
    $('#groupTimeTable').append(appendTable);
}


function submitTime(start, end){
    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours());
    var limit = (days+1) * (time + 1);
    var submitString = "";
    for(i=0; i<limit; i++){
       if ($('#checkboxDate' + i).is(':checked')){
        submitString+= '1';
       }
       else{
        submitString+='0';
       }
    }
    console.log(submitString);
}




$(document).ready(function(){
    $('#eventName').html(sessionStorage.getItem("name"));
    var start = new Date(sessionStorage.getItem("specificStartYear"), sessionStorage.getItem("specificStartMonth"), sessionStorage.getItem("specificStartDay"), sessionStorage.getItem("specificStartHour"), 0, 0, 0);
    var end = new Date(sessionStorage.getItem("specificEndYear"), sessionStorage.getItem("specificEndMonth"), sessionStorage.getItem("specificEndDay"), sessionStorage.getItem("specificEndHour"), 0, 0, 0);
    var tempTesting = [
        "111111111111",
        "000000000000",
        "000000111111"
    ];
    var startS = new Date(2023, 4, 1, 1, 0, 0, 0);
    var endS = new Date(2023, 4, 3, 4, 0, 0, 0); 
 

    var eventId = "<?php echo $eventid; ?>";
    var ownerId = "<?php echo $ownerId; ?>";
    var eventname = "<?php echo $eventname; ?>";
    var description = "<?php echo $description; ?>";
    var date = "<?php echo $date; ?>";
    var start = "<?php echo $start; ?>";
    var end = "<?php echo $end; ?>";
    var availabilityArr = "<?php echo $availability; ?>";
    console.log(eventId);
    console.log(ownerId);
    console.log(eventname);
    console.log(description);
    console.log(date);
    console.log(start);
    console.log(end);
    console.log(availabilityArr);


    createSpecificDateFillOutChart(startS, endS);
    createSpecificDateGroupChart(startS, endS, tempTesting);


    $("#submitButton").click(function(){
        submitTime(startS,endS)
    });
});