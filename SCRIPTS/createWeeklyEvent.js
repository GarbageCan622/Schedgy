//const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");

function createWeeklyEventFillOutChart(start, end, daysArr){
    
    var time = end - start;

    var appendTable = '<tr><th></th>';
    var timeLoop = start; //this is for the for loop
    var dayName;
    var numDays = 0;
    var tempH = 0;
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
        for(h=0; h<=3; h++){
            tempH = h *15;
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop + ':' + tempH.toString().padStart(2, "0"); + '</th>'
    for(j=0; j<numDays;j++){       
        appendTable += '<td>' + 
                       '<input type="checkbox" id="checkboxDate' + j + timeLoop + ':' + tempH + '" name="checkboxDate' + j + timeLoop + ':' + tempH + '">' +
                        '<label for="checkboxDate' + j + timeLoop + ':' + tempH + '">&nbsp;</label>' +
                        '</td>'     
    }
    appendTable += '</tr>'
}
timeLoop++;
}
    $('#personalTimeTable').append(appendTable);
}

$(document).ready(function(){
    const testArr = [false, true, false, true, false, false, true];
    createWeeklyEventFillOutChart(5, 20, testArr);


});