$(document).ready(function(){

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


    function disableLaterThan() { 
      for(i = 0; i <= 9; i++){
        $('[name="NoLaterThan"]>option[value="'+i+'"]').attr("disabled","disabled");
      }
    }

    function disableEarlierThan() { 
      for(i = 17; i <= 23; i++){
        $('[name="NoEarlierThan"]>option[value="'+i+'"]').attr("disabled","disabled");
      }
  
    }

    disableLaterThan();
    disableEarlierThan();

	$('[name="NoEarlierThan"]').change(function() { 
    for(i = 0; i <= this.value; i++){
      $('[name="NoLaterThan"]>option[value="'+i+'"]').attr("disabled","disabled");
    }
    for(i = this.value; i <= 23; i++){
      $('[name="NoLaterThan"]>option[value="'+i+'"]').removeAttr("disabled");
    }
    $('[name="NoLaterThan"]>option[value="'+this.value+'"]').attr("disabled","disabled");
  });


	$('[name="NoLaterThan"]').change(function() { 
    for(i = 0; i <= this.value; i++){
      $('[name="NoEarlierThan"]>option[value="'+i+'"]').removeAttr("disabled");
    }
    for(i = this.value; i <= 23; i++){
      $('[name="NoEarlierThan"]>option[value="'+i+'"]').attr("disabled","disabled");
    }
    $('[name="NoEarlierThan"]>option[value="'+this.value+'"]').attr("disabled","disabled");

  });

});