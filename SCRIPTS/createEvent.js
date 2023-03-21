$(document).ready(function(){
    console.log("boop");
    $('input[name="daterange"]').daterangepicker({
        "alwaysShowCalendars": true,
        "opens": 'left',
        startDate: moment(),
        endDate: moment().add(1, 'day')
      }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
    
      $("#DateTypes").change(function(){     
    if($("#DateTypes option:selected").val() == 'SpecificDates'){
        $('#SpecificDates').css('display', 'block');
        $('#DaysOfTheWeek').css('display', 'none');
    }
    else{
        $('#SpecificDates').css('display', 'none');
        $('#DaysOfTheWeek').css('display', 'block');
    }
    });
});