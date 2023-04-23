//const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");
//import { exportWeekly} from "./createEvent.js";


function createWeeklyEventFillOutChart(start, end, daysArr){
    
    var time = end - start;

    var appendTable = '<tr><th></th>';
    var timeLoop = start; //this is for the for loop
    var dayName;
    var numDays = 0;
    var uIdSetter = 0;
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
                       '<input type="checkbox" id="checkboxDate' + uIdSetter + '" name="checkboxDate' + uIdSetter + '">' +
                        '<label for="checkboxDate' + uIdSetter + '">&nbsp;</label>' +
                        '</td>'      
                    uIdSetter++;  
}
appendTable += '</tr>'
timeLoop++;
}
    $('#personalTimeTable').append(appendTable);
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
    console.log(JSON.parse(sessionStorage.getItem("days")));
    createWeeklyEventFillOutChart(sessionStorage.getItem("weeklyStart"), sessionStorage.getItem("weeklyEnd"), JSON.parse(sessionStorage.getItem("days")));

});