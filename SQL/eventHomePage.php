<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Schedgy Homepage</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1 id="eventName">Schedgy Homepage</h1>
        <?php
            session_start();
            $dbConnection = mysqli_connect("212.192.29.151", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
            //$dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
            if (!$dbConnection) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $getname = 'select * from users where uid =' . $_SESSION['sessionID'];
            $name_result = mysqli_query($dbConnection, $getname);
            if(mysqli_num_rows($name_result) > 0){
                while($row = mysqli_fetch_assoc($name_result)){
                    $username = $row['uname'];
                    echo "Logged in as: $username<br>";
                }
            }

         
            ?>
            <table>
                <tr>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="eventCreator.php">Create New Event</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../HTML/weeklyEvent.html">Weekly Event</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../HTML/specificDayEvent.html">Specific Day Event</a></p>
                    </td>
                </tr>
            </table>

            <div class="column">
                <div style="background-color: #2f3136;border-style: solid;border-color:black;border-radius: 5px;padding: 2%;margin: 2%;">
                    <h2 style="text-align:center; font-family:discord; color:white;">My Events</h2>
                    <br>
                    <?php
                    $query = 'select * from event where event.owner_id = '.$_SESSION['sessionID'];
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
                        } else {
                            echo "<br>No active Events<br>";
                        }
                        ?>
                </div>
            </div>
            <div class="column">
                <div style="background-color: #2f3136;border-style: solid;border-color:black;border-radius: 5px;padding: 2%;margin: 2%;">
                    <h2 style="text-align:center; font-family:discord; color:white;">Invited Events</h2>
                </div>
            </div>
    </body>
</html>