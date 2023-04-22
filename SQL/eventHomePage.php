<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Schedgy Homepage</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1 id="eventName">Schedgy Homepage</h1>

        <section>
            <h2 style="text-align:center; font-family:discord; color:white;">Active Events</h2>
            <br>
            <?php
            $dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
            if (!$dbConnection) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $query = 'select * from event';
            $result = mysqli_query($dbConnection, $query);

            if (mysqli_num_rows($result) > 0) {

                while($row = mysqli_fetch_assoc($result)) {
                    $eventid = $row['event_id'];
                    $eventname = $row['event_name'];
                    $description = $row['description'];
                    $startday = $row['start_day'];
                    $endday = $row['end_day'];
                    $starttime = $row['start_time'];
                    $endtime = $row['end_time'];

                    echo "Event ID: $eventid<br>" .
                        "Event Name: $eventname<br>" .
                        "Description: $description<br>" .
                        "Starting Day: $startday<br>" .
                        "Ending Day: $endday<br>" .
                        "Starting Time: $starttime<br>" .
                        "Ending Time: $endtime <br>---------------------------------------------------------<br>";

                }
            } else {
                echo "<br>No active Events<br>";
            }
            ?>
        

    </body>
</html>