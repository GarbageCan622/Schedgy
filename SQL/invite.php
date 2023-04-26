<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Event Invitation</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1>Invite People to Your Event!</h1>
        <div style="font-family:discord; color:white; background-color: #2f3136; border-style: solid; border-color:black; border-radius: 5px; padding: 2%; margin: 2%; width:10%;">
        <?php
            session_start();
            $dbConnection = mysqli_connect("212.192.29.151", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
            //$dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
            if (!$dbConnection) {
                die("Connection failed: " . mysqli_connect_error());
            }

             $getname = 'select uname from users where uid =' . $_SESSION['sessionID'];
             $name_result = mysqli_query($dbConnection, $getname);
             if(mysqli_num_rows($name_result) > 0){
                 while($row = mysqli_fetch_assoc($name_result)){
                     $username = $row['uname'];
                     echo "Logged in as: $username<br>";
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
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../SQL/eventHomePage.php">Event Homepage</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../SQL/specificDayEvent.php">View Events</a></p>
                    </td>
                    <td>
                        <p style="font-family:discord; color:white;"><a href="../SQL/invite.php">Send Invite</a></p>
                    </td>
                </tr>
            </table>
        <h3 style="font-family:discord; color:white;">Enter a User ID# and Your EventID# to add them to your event!</h3>


        <section class="section">
            <form action="" method="post">
                <label style="font-family:discord; color:white;"for="id">User ID#: </label>
                <input type="text" id="id" name="id">
                <br><br>
                <label style="font-family:discord; color:white;"for="eventid">EventID#: </label>
                <input type="text" id="eventid" name="eventid">
                <br><br>
                <input type="submit" name="invite" value="Invite">
            </form>
        </section>

        <?php
            if(isset($_POST['invite'])){
                $eventid = $_POST['eventid'];
                $id = $_POST['id'];

                if (empty($id) || empty($eventid)) {
                    echo "Data required in all fields";
                } else {
                    $query = 'insert into member_of (event_id, guest_id) values (' . $eventid . ',' . $id .')';
                    $result = mysqli_query($dbConnection, $query);

                    if(!$result){
                        echo "<br>Could Not Invite User<br>";
                    }
                                
                    }
                }
            

        ?>
    </body>
</html>