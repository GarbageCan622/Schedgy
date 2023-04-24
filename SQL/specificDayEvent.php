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
        <div>
           <br><br>
            <form action="" method="post">
                <label style="font-family:discord; color:white;" for="eventid">Enter The EventID# You Wish To View: </label>
                <input type="text" id="eventid" name="eventid">
                <input type="submit" name="submit" value="View Event">
            </form>
        </div>
        <br> <br> <br> <br>

        <?php
        if(isset($_POST['submit'])){
            $eventid = $_POST['eventid'];

        $query = 'select * from event where event_id ='.$eventid;
        $result = mysqli_query($dbConnection, $query);
            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                    $eventid = $row['event_id'];
                    $ownerid = $row['owner_id'];
                    $eventname = $row['event_name'];
                    $description = $row['description'];
                    $start = $row['start'];
                    $end = $row['end'];

                    echo "Event ID: $eventid<br>" .
                        "Owner ID: $ownerid<br>".
                        "Event Name: $eventname<br>" .
                        "Description: $description<br>" .
                        "Starting at: $start<br>" .
                        "Ending at: $end<br>" .
                        "<br>---------------------------------------------------------<br>";
                }
            }
            } else {
                echo "<br>No active Events<br>";
            }
        ?>





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

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <!-- <script src="../SCRIPTS/createSpecificDate.js" ></script> -->
    </body>
</html>