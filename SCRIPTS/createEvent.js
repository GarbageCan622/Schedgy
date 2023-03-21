$(document).ready(function(){
    console.log("boop");
    $('input[name="daterange"]').daterangepicker({
        alwaysShowCalendars: true,
        opens: 'left'
      }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
    
    $( "#datePick" ).click(function() {
    });
});