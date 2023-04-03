//const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");
//import { exportWeekly} from "./createEvent.js";


function createWeeklyEventFillOutChart(start, end, daysArr){
    
    var time = end - start;

    var appendTable = '<tr><th></th>';
    var timeLoop = start; //this is for the for loop
    var dayName;
    var numDays = 0;
    for(i=0; i<daysArr.length; i++){
        if(daysArr[i] == true){
            switch(i){
                case 0: 
                dayName = "Monday"
                break;
                case 1: 
                dayName = "Tuesday"
                break;
                case 2: 
                dayName = "Wednesday"
                break;
                case 3: 
                dayName = "Thursday"
                break;
                case 4: 
                dayName = "Friday"
                break;
                case 5: 
                dayName = "Saturday"
                break;
                case 6: 
                dayName = "Sunday"
                break;
            }
            appendTable += '<th>' + dayName + '</th>'
            numDays++;
        }
    }
    appendTable += '</tr>'

    for(i=0; i<=time; i++){
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop + ':00</th>'
    for(j=0; j<numDays;j++){       
        appendTable += '<td>' + 
                       '<input type="checkbox" id="checkboxDate' + j + timeLoop + '" name="checkboxDate' + j + timeLoop + '">' +
                        '<label for="checkboxDate' + j + timeLoop + '">&nbsp;</label>' +
                        '</td>'        
}
appendTable += '</tr>'
timeLoop++;
}
    $('#personalTimeTable').append(appendTable);
}

$(document).ready(function(){   
    $('#eventName').html(sessionStorage.getItem("name"));
    console.log(JSON.parse(sessionStorage.getItem("days")));
    createWeeklyEventFillOutChart(sessionStorage.getItem("weeklyStart"), sessionStorage.getItem("weeklyEnd"), JSON.parse(sessionStorage.getItem("days")));

});