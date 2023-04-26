const sendWebhook = require('./sendWebhook');

$(document).ready(function(){

    $('input[name="daterange"]').daterangepicker({
        "alwaysShowCalendars": true,
        "opens": 'left',
        startDate: "03/17/2023",
        endDate: "03/23/2023"
      }, function(start, end, label) {
        $("#datePick").val(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
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
      for(var i = 0; i <= 9; i++){
        $('[name="NoLaterThan"]>option[value="'+i+'"]').attr("disabled","disabled");
      }
    }

    function disableEarlierThan() { 
      for(var i = 17; i <= 23; i++){
        $('[name="NoEarlierThan"]>option[value="'+i+'"]').attr("disabled","disabled");
      }
  
    }

    disableLaterThan();
    disableEarlierThan();

	$('[name="NoEarlierThan"]').change(function() { 
    for(var i = 0; i <= this.value; i++){
      $('[name="NoLaterThan"]>option[value="'+i+'"]').attr("disabled","disabled");
    }
    for(var i = this.value; i <= 23; i++){
      $('[name="NoLaterThan"]>option[value="'+i+'"]').removeAttr("disabled");
    }
    $('[name="NoLaterThan"]>option[value="'+this.value+'"]').attr("disabled","disabled");
  });


	$('[name="NoLaterThan"]').change(function() { 
    for(var i = 0; i <= this.value; i++){
      $('[name="NoEarlierThan"]>option[value="'+i+'"]').removeAttr("disabled");
    }
    for(var i = this.value; i <= 23; i++){
      $('[name="NoEarlierThan"]>option[value="'+i+'"]').attr("disabled","disabled");
    }
    $('[name="NoEarlierThan"]>option[value="'+this.value+'"]').attr("disabled","disabled");

  });

});


class SpecificDateEvent{
  constructor(Start, End, Name){
    var name = Name;
    var start = Start;    
    var end = End;
  }
}

// class WeeklyEvent{
//   constructor(StartTime, EndTime, Days, Name){
// var startTime = StartTime;
// var endTime = EndTime;
// var days = Days;
// var name = Name;
//   }
// }


$("#EventForm").submit(function(event){
  event.preventDefault();
  sendWebhook();
  var NameSubmit = $("#NewEventName").val();
  var NoEarlierThanSubmit = $("#NoEarlierThan").val();
  var NoLaterThanSubmit = $("#NoLaterThan").val();
  if($("#event_id")!=null || $("#event_id")!=""){
  if($("#DateTypes option:selected").val() == 'SpecificDates'){
    var SpecificDateSubmit = $("#datePick").val();
      //year, month, day, hours, minutes, seconds, milliseconds
start = new Date(SpecificDateSubmit.substring(6,10), SpecificDateSubmit.substring(0,2), SpecificDateSubmit.substring(3,5), NoEarlierThanSubmit, 0, 0, 0);
end = new Date(SpecificDateSubmit.substring(19,23), SpecificDateSubmit.substring(13,15), SpecificDateSubmit.substring(16,18), NoLaterThanSubmit, 0, 0, 0);
start.toString();
      end.toString();

//module.exports = new SpecificDateEvent(start, end, NameSubmit);
//const exportSpecific = new SpecificDateEvent(start, end, NameSubmit);
sessionStorage.setItem("specificStartYear", SpecificDateSubmit.substring(6,10));
sessionStorage.setItem("specificStartMonth", SpecificDateSubmit.substring(0,2));
sessionStorage.setItem("specificStartDay", SpecificDateSubmit.substring(3,5));
sessionStorage.setItem("specificStartHour", NoEarlierThanSubmit);
sessionStorage.setItem("specificEndYear", SpecificDateSubmit.substring(19,23));
sessionStorage.setItem("specificEndMonth", SpecificDateSubmit.substring(13,15));
sessionStorage.setItem("specificEndDay", SpecificDateSubmit.substring(16,18));
sessionStorage.setItem("specificEndHour", NoLaterThanSubmit);
      sessionStorage.setItem("name", NameSubmit);
      const startDb = SpecificDateSubmit.substring(6, 10) + SpecificDateSubmit.substring(0, 2) + SpecificDateSubmit.substring(3, 5) + NoEarlierThanSubmit;
      const endDb = SpecificDateSubmit.substring(19, 23) + SpecificDateSubmit.substring(13, 15) + SpecificDateSubmit.substring(16, 18) + NoLaterThanSubmit;
      // var start = startDb.toString();
      // $.ajax({
      //   URL: "eventCreator.php",
      //   method: "POST",
      //   data: {"start" : start}
      // })
      // var end = endDb.toString();
      // $.ajax({
      //   URL: "eventCreator.php",
      //   method: "POST",
      //   data: {"end" : end}
      // })
      //document.cookie = "eventStart=" + startDb;
      //document.cookie = "eventEnd=" + endDb;
      
//event.preventDefault();
//window.location.href='eventPage.php';
}
else{
  var DaysArr = [];
    for(var i=0; i<7;i++){
      DaysArr.push($('#'+ i+'Day').is(":checked"));
    }
    var checker = true;
    for(var i=0; i < DaysArr.length; i++){
      if(DaysArr[i] == true){
        checker = false;
      }
    }
    console.log(checker);
    if(checker){
      event.preventDefault();
      alert("No days selected for weekly schedule");  
      return;  
    }
  //module.exports = new WeeklyEvent(NoEarlierThanSubmit, NoLaterThanSubmit, DaysArr, NameSubmit);
  //exportWeekly = new WeeklyEvent(NoEarlierThanSubmit, NoLaterThanSubmit, DaysArr, NameSubmit);
  // sessionStorage.setItem("weeklyStart", NoEarlierThanSubmit);
  // sessionStorage.setItem("weeklyEnd", NoLaterThanSubmit);
  // sessionStorage.setItem("days", JSON.stringify(DaysArr));
  // sessionStorage.setItem("name", NameSubmit);


  //  event.preventDefault();
  //   window.location.href='eventPage.php';
}
}else{
  alert("Please fill out all fields!");
}
});


//export {exportSpecific, exportWeekly};
