//const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");

function createSpecificDateFillOutChart(start, end){
    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours())*4 + (end.getMinutes() - start.getMinutes())/15;

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
    timeLoop.setMinutes(timeLoop.getMinutes() + 15);
}
    $('#personalTimeTable').append(appendTable);
}

$(document).ready(function(){
    start = new Date(2018, 11, 24, 12, 0, 0, 0);
    end = new Date(2018, 11, 30, 17, 45, 0, 0);
    createSpecificDateFillOutChart(start, end)


});