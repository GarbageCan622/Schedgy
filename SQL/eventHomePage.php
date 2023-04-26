<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Schedgy Homepage</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1 id="eventName">Schedgy Homepage</h1>
        <div style="font-family:discord; color:white; background-color: #2f3136; border-style: solid; border-color:black; border-radius: 5px; padding: 2%; margin: 2%; width:10%;">
        <?php
            session_start();
            $dbConnection = mysqli_connect("212.192.29.151", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
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

         
            ?></div>
            <table>
                <tr>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="login.php">Login</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="eventCreator.php">Create New Event</a></p>
                    </td>
                    <!-- <td>
                        <p style="font-family:discord; color:white;"><a href="../HTML/weeklyEvent.html">Weekly Event</a></p>
                    </td> -->
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../SQL/specificDayEvent.php">View Events</a></p>
                    </td>
                </tr>
            </table>

            <div class="column">
                <div style="background-color: #2f3136;border-style: solid;border-color:black;border-radius: 5px;padding: 2%;margin: 2%;">
                    <h2 style="text-align:center; font-family:discord; color:white;">My Events</h2>
                    <br>
                    <div style="color:white; font-family:discord;">
                    <?php
                    $query = 'select * from event where event.owner_id = '.$_SESSION['sessionID'];
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

                                echo "Event ID: $eventid<br>" .
                                    "Owner ID: $ownerid<br>".
                                    "Event Name: $eventname<br>" .
                                    "Description: $description<br>" .
                                    "Date Range: $start<br>" .
                                    "Starting Time: $end<br>" .
                                    "Ending Time: $end<br>".
                                    "<br>---------------------------------------------------------<br>";
                            }
                        } else {
                            echo "<br>No active Events<br>";
                        }
                        ?></div>
                </div>
            </div>
            <div class="column">
                <div style="background-color: #2f3136;border-style: solid;border-color:black;border-radius: 5px;padding: 2%;margin: 2%;">
                    <h2 style="text-align:center; font-family:discord; color:white;">Invited Events</h2>
                    <br>
                    <div style="color:white; font-family:discord;">
                    <?php
                    $query = 'select * from event,member_of where event.event_id = member_of.event_id & member_of.guest_id ='.$_SESSION['sessionID'];
                    $result = mysqli_query($dbConnection, $query);
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) {
                                $eventid = $row['event_id'];
                                $ownerid = $row['owner_id'];
                                $eventname = $row['event_name'];
                                $description = $row['description'];
                                $date = $row['date'];
                                $starttime = $row['start_time'];
                                $endtime = $row['end_time'];

                                echo "Event ID: $eventid<br>" .
                                    "Owner ID: $ownerid<br>".
                                    "Event Name: $eventname<br>" .
                                    "Description: $description<br>" .
                                    "Date Range: $date<br>".
                                    "Starting at: $starttime<br>" .
                                    "Ending at: $endtime<br>" .
                                    "<br>---------------------------------------------------------<br>";
                            }
                        } else {
                            echo "<br>No active Events<br>";
                        }
                        ?></div>
                </div>
            </div>
    </body>
</html>