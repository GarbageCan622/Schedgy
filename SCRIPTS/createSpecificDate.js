//const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");
//import { exportSpecific} from "./createEvent.js";

function createSpecificDateFillOutChart(start, end){
    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours());

    var appendTable = '<tr><th></th>';
    var timeLoop = start; //this is for the for loop
    var tempTimeLoop = timeLoop; 
    for(i=0; i<=days; i++){
        appendTable += '<th>' + timeLoop.getMonth() + '/' + timeLoop.getDate() + '/' + timeLoop.getYear() + '</th>'
        timeLoop.setDate(timeLoop.getDate() + 1);
    }
    appendTable += '</tr>'

    timeLoop = start;
    for(i=0; i<=time; i++){
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop.getHours() + ':' + String(timeLoop.getMinutes()).padStart(2, "0"); + '</th>'
        tempTimeLoop = timeLoop; 
    for(j=0; j<=days;j++){       
        tempTimeLoop.setDate(tempTimeLoop.getDate() + j)
        appendTable += '<td>' + 
                       '<input type="checkbox" id="checkboxDate' + tempTimeLoop.toString() + '" name="checkboxDate' + tempTimeLoop.toString() + '">' +
                        '<label for="checkboxDate' + tempTimeLoop.toString() + '">&nbsp;</label>' +
                        '</td>'     
    }
    appendTable += '</tr>'
    timeLoop.setHours(timeLoop.getHours() + 1);
}
    $('#personalTimeTable').append(appendTable);
}

$(document).ready(function(){
    $('#eventName').html(sessionStorage.getItem("name"));
    var start = new Date(sessionStorage.getItem("specificStartYear"), sessionStorage.getItem("specificStartMonth"), sessionStorage.getItem("specificStartDay"), sessionStorage.getItem("specificStartHour"), 0, 0, 0);
    var end = new Date(sessionStorage.getItem("specificEndYear"), sessionStorage.getItem("specificEndMonth"), sessionStorage.getItem("specificEndDay"), sessionStorage.getItem("specificEndHour"), 0, 0, 0);
    createSpecificDateFillOutChart(start, end)
});