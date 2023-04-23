$(document).ready(function(){
    $("#weeklyButton").click(function(){
        location.assign('../HTML/weeklyEvent.html');
    });

    $("#speficicDateButton").click(function(){
        location.assign('../HTML/specificDayEvent.html');
    });

    $("#createEventButton").click(function(){
        location.assign('../HTML/signup.html');
    });
});