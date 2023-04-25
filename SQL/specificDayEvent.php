<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Specific Day Event</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1 id="eventName">Event Name</h1>
        <?php
        session_start();
        $dbConnection = mysqli_connect("212.192.29.151", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
        //$dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
        if (!$dbConnection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $getname = 'select * from users where uid = ' . $_SESSION['sessionID'];
            $name_result = mysqli_query($dbConnection, $getname);
            if(mysqli_num_rows($name_result) > 0){
                while($row = mysqli_fetch_assoc($name_result)){
                    $uname = $row['uname'];
                    echo "Logged in as: $uname<br>";
                }
            }
        ?>
        <table>
                <tr>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="login.php">Login</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="eventCreator.php">Create New Event</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../SQL/eventHomePage.php">Event Homepage</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../SQL/specificDayEvent.php">View Events</a></p>
                    </td>
                </tr>
            </table>
        <div>
           <br><br>
            <form action="" method="post">
                <label style="font-family:discord; color:white;" for="eventid">Enter The EventID# You Wish To View: </label>
                <input type="text" id="eventid" name="eventid">
                <input type="submit" name="submit" value="View Event">
            </form>
        </div>
        <br> <br> <br> <br> 

        
        <div class="availableCharts flexbox">
            <div class="grids flex">
                <div id="chartToFill">
                    <table id="personalTimeTable" class="avalibityChart timeSelect"></table>           
                </div>
            </div>
            <div class="grids flex">
                <div id="liveFeed">
                    <table id="groupTimeTable" class="avalibityChart timeSelect"></table>
                </div>
            </div>
        </div>
        
      <div id="submitDiv">
            <input type="button" name="submittime" value="Submit time" id="submitButton" class="genericButton" style="font-size:12px;">
        </div> 

        <?php
        if(isset($_POST['submit'])){
            $eventid = $_POST['eventid'];

        $query = 'select * from event where event.event_id ='.$eventid;
        $result = mysqli_query($dbConnection, $query);
            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                    $eventid = $row['event_id'];
                    $ownerid = $row['owner_id'];
                    $eventname = $row['event_name'];
                    $description = $row['description'];
                    $date = $row['date'];
                    $start = $row['start_time'];
                    $end = $row['end_time'];

                   /* echo "Event ID: $eventid<br>" .
                        "Owner ID: $ownerid<br>".
                        "Event Name: $eventname<br>" .
                        "Description: $description<br>" .
                        "Starting at: $start<br>" .
                        "Ending at: $end<br>" .
                        "<br>---------------------------------------------------------<br>";*/
                } 
            }   
                    $query2 = 'select availability_string from member_of where member_of.event_id ='.$eventid;
                    $result2 = mysqli_query($dbConnection, $query2);
                        if (mysqli_num_rows($result2) > 0) {
                            $availability = array();
                            while($row = mysqli_fetch_array($result2)) {
                                //$availability = $row['availability_string'];
                                array_push($availability, $row['availability_string']);                                   
                
                                   /* echo "Event ID: $eventid<br>" .
                                        "Owner ID: $ownerid<br>".
                                        "Event Name: $eventname<br>" .
                                        "Description: $description<br>" .
                                        "Starting at: $start<br>" .
                                        "Ending at: $end<br>" .
                                        "<br>---------------------------------------------------------<br>";*/
                            
                           }
                            }else{
                                    echo "<br>You are not the author of this event!<br>";
                                }
                 } 
        ?>

         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> 
        <script>
            //const AvailabilityChart = require("./availabilityChart");
//const SpecificDateEvent = require("./createEvent");
//import { exportSpecific} from "./createEvent.js";

function createSpecificDateFillOutChart(start, end){
    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours());
    var appendTable = '<tr><th></th>';
    var timeLoop = new Date(start); //this is for the for loop
    var tempTimeLoop = new Date(timeLoop); 
    var uIdSetter = 0;
    for(i=0; i<=days; i++){
        appendTable += '<th>' + timeLoop.getMonth() + '/' + timeLoop.getDate() + '/' + timeLoop.getYear() + '</th>'
        timeLoop.setDate(timeLoop.getDate() + 1);
    }
    appendTable += '</tr>'

    timeLoop = new Date(start);
    for(i=0; i<=time; i++){
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop.getHours() + ':' + String(timeLoop.getMinutes()).padStart(2, "0"); + '</th>'
        tempTimeLoop = timeLoop; 
    for(j=0; j<=days;j++){       
        tempTimeLoop.setDate(tempTimeLoop.getDate() + j)
        appendTable += '<td>' + 
                       '<input type="checkbox" id="checkboxDate' + uIdSetter + '" name="checkboxDate' + uIdSetter + '">' +
                        '<label for="checkboxDate' + uIdSetter + '">&nbsp;</label>' +
                        '</td>'
        uIdSetter+=1;    
    }
    appendTable += '</tr>'
    timeLoop.setHours(timeLoop.getHours() + 1);
}
    $('#personalTimeTable').append(appendTable);
}


function createSpecificDateGroupChart(start, end, groupArr){

    var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
    var time = (end.getHours() - start.getHours());
    var appendTable = '<tr><th></th>';
    var timeLoop = new Date(start); //this is for the for loop
    var tempTimeLoop = new Date(timeLoop); 
    let groupAvaliblity = [];
    var index = 0; //index position inside groupArr
    var tempAvalibilityString;
    for(i=0; i<=days; i++){
        appendTable += '<th>' + timeLoop.getMonth() + '/' + timeLoop.getDate() + '/' + timeLoop.getYear() + '</th>'
        timeLoop.setDate(timeLoop.getDate() + 1);       
    }

    appendTable += '</tr>'

    timeLoop = new Date(start);
    for(i=0; i<=time; i++){
        appendTable += '<tr>';
        appendTable += '<th>' + timeLoop.getHours() + ':' + String(timeLoop.getMinutes()).padStart(2, "0"); + '</th>'
        tempTimeLoop = timeLoop; 
        groupAvaliblity[i] = [];
    for(j=0; j<=days;j++){       
        tempTimeLoop.setDate(tempTimeLoop.getDate() + j)
       
        groupAvaliblity[i][j] = 0;
        for(k=0; k < groupArr.length; k++){           
            tempAvalibilityString = groupArr[k];
            if(tempAvalibilityString[index] == 1){
                groupAvaliblity[i][j] = groupAvaliblity[i][j] + 1;
            }
        }
        index++;
             
        appendTable += '<td>' + 
                       '<h3 class = "numAvail" id="groupAvailibility' + tempTimeLoop.toString() + '">' +
                       groupAvaliblity[i][j] + '</h3>'
                        '</td>'     
    }
    appendTable += '</tr>'
    timeLoop.setHours(timeLoop.getHours() + 1);
}
    $('#groupTimeTable').append(appendTable);
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
    //var start = new Date(sessionStorage.getItem("specificStartYear"), sessionStorage.getItem("specificStartMonth"), sessionStorage.getItem("specificStartDay"), sessionStorage.getItem("specificStartHour"), 0, 0, 0);
    //var end = new Date(sessionStorage.getItem("specificEndYear"), sessionStorage.getItem("specificEndMonth"), sessionStorage.getItem("specificEndDay"), sessionStorage.getItem("specificEndHour"), 0, 0, 0);

    var tempTesting = [
        "111111111111",
        "000000000000",
        "000000111111"
    ];
    //var startS = new Date(2023, 4, 1, 1, 0, 0, 0);
    //var endS = new Date(2023, 4, 3, 4, 0, 0, 0); 
 

    var eventId = "<?php echo $eventid; ?>";
    var ownerId = "<?php echo $ownerid; ?>";
    var eventname = "<?php echo $eventname; ?>";
    var description = "<?php echo $description; ?>";
    var date = "<?php echo $date; ?>";
    var start = "<?php echo $start; ?>";
    var end = "<?php echo $end; ?>";
    //var availabilityArr = [];
    var availabilityArr = <?php echo json_encode($availability); ?>;
    console.log(eventId);
    console.log(ownerId);
    console.log(eventname);
    console.log(description);
    console.log(date);
    console.log(start);
    console.log(end);
    console.log(availabilityArr);

    $('#eventName').html(eventname);
    startS = new Date(date.substring(6,10), date.substring(0,2), date.substring(3,5), start, 0, 0, 0);
    endS = new Date(date.substring(19,23), date.substring(13,15), date.substring(16,18), end, 0, 0, 0);


    createSpecificDateFillOutChart(startS, endS);
    createSpecificDateGroupChart(startS, endS, tempTesting);


    $("#submitButton").click(function(){
        submitTime(startS,endS)
    });
});
        </script>
        
    </body>
</html>