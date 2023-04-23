<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Schedgy Event Creator</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <div class="container">
            <h1>Welcome to Schedgy Event Creator</h1>
        </div>
        <?php
            session_start();
            // $dbConnection = mysqli_connect("b7a39c95", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
            $dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
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
        ?>
            <table width="100%" cellpadding="0" cellspacing="0">
                <tbody>   
                    <tr>
                        <td align="center" colspan="2">
                            <h2 style="font-family:discord; color:white;">Fill out the following form to create an Event</h2>
                            <h3 style="font-family:discord; color:white;">After all values are filled, click Create Event to be brought to your "Schedgy Events Homepage"</h3>
                            <p style="font-family:discord; color:white;"><a href="eventHomePage.php">View Active Events</a></p>
                            <br>
                            <form action="" method="post" style="width:100%; margin:20px 0px 20px 0px;">
                                <label for="event_name" style="font-family:discord;color:white;font-size:30px;">Enter new Event Name: </label>
                                <input type="text" id="event_name" name="event_name">
                                <br><br>
                                <label for="event_id" style="font-family:discord;color:white;font-size:20px;">Enter New Event ID#: </label>
                                <input type="text" id="event_id" name="event_id">
                                <br><br>
                                <label id="desc" for="description" style="font-family:discord;color:white;font-size:20px;">Description: </label>
                                <input type="text" id="description" name="description">
                                <br><br>
                        </td>
                    </tr> 

                    <tr> 
                        <td align=center valign=top rowspan=2 width="50%">
                            <div id="WhatDates" style="font-family:discord; color:white; font-size:18px; text-align: center; width: 50%; min-width:305px;">
                                What day of the week might work?
                            </div>    
                            <br>
                            <label for="start_day" style="font-family:discord;color:white;font-size:20px;">Select Starting Day:</label>
                                <select name="start_day">
                                    <option value=Sunday>Sunday</option>  
                                    <option value=Monday>Monday</option>  
                                    <option value=Tuesday>Tuesday</option>  
                                    <option value=Wednesday>Wednesday</option>  
                                    <option selected value=Thursday>Thursday</option>  
                                    <option value=Friday>Friday</option>  
                                    <option value=Saturday>Saturday</option>     
                                </select>
                                <br><br>
                                <label for="end_day" style="font-family:discord;color:white;font-size:20px;">Select Ending Day (can be the same day) :</label>
                                <select name="end_day">
                                    <option value=Sunday>Sunday</option>  
                                    <option value=Monday>Monday</option>  
                                    <option value=Tuesday>Tuesday</option>  
                                    <option value=Wednesday>Wednesday</option>  
                                    <option value=Thursday>Thursday</option>  
                                    <option selected value=Friday>Friday</option>  
                                    <option value=Saturday>Saturday</option>     
                                </select>
                        </td>

                        <td align=center valign=top rowspan=2 width="50%">
                            <div id="WhatTimes" style="font-family:discord; color:white;font-size:20px;text-align: center; width: 50%; min-width:305px;">
                                What times might work?
                            </div>
                            <br>
                            <label for="start_time" style="font-family:discord;color:white;font-size:20px;">No Earlier Than:</label>
                                <select name="start_time">
                                    <option value=00:00:00>12:00  AM</option>  
                                    <option value=01:00:00>1:00  AM</option>  
                                    <option value=02:00:00>2:00  AM</option>  
                                    <option value=03:00:00>3:00  AM</option>  
                                    <option value=04:00:00>4:00  AM</option>  
                                    <option value=05:00:00>5:00  AM</option>  
                                    <option value=06:00:00>6:00  AM</option>  
                                    <option value=07:00:00>7:00  AM</option>  
                                    <option value=08:00:00>8:00  AM</option>  
                                    <option selected value=09:00:00>9:00  AM</option>  
                                    <option value=10:00:00>10:00  AM</option>  
                                    <option value=11:00:00>11:00  AM</option>  
                                    <option value=12:00:00>12:00  PM</option>  
                                    <option value=13:00:00>1:00  PM</option>  
                                    <option value=14:00:00>2:00  PM</option>  
                                    <option value=15:00:00>3:00  PM</option>  
                                    <option value=16:00:00>4:00  PM</option>  
                                    <option value=17:00:00>5:00  PM</option>  
                                    <option value=18:00:00>6:00  PM</option>  
                                    <option value=19:00:00>7:00  PM</option>  
                                    <option value=20:00:00>8:00  PM</option>  
                                    <option value=21:00:00>9:00  PM</option>  
                                    <option value=22:00:00>10:00  PM</option>  
                                    <option value=23:00:00>11:00  PM</option>  
                                </select>
                                <br><br>
                                <label for="end_time" style="font-family:discord;color:white;font-size:20px;">No Later Than:</label>
                                <select name="end_time">
                                    <option value=00:00:00>12:00  AM</option>  
                                    <option value=01:00:00>1:00  AM</option>  
                                    <option value=02:00:00>2:00  AM</option>  
                                    <option value=03:00:00>3:00  AM</option>  
                                    <option value=04:00:00>4:00  AM</option>  
                                    <option value=05:00:00>5:00  AM</option>  
                                    <option value=06:00:00>6:00  AM</option>  
                                    <option value=07:00:00>7:00  AM</option>  
                                    <option value=08:00:00>8:00  AM</option>  
                                    <option value=09:00:00>9:00  AM</option>  
                                    <option value=10:00:00>10:00  AM</option>  
                                    <option value=11:00:00>11:00  AM</option>  
                                    <option value=12:00:00>12:00  PM</option>  
                                    <option value=13:00:00>1:00  PM</option>  
                                    <option value=14:00:00>2:00  PM</option>  
                                    <option selected value=15:00:00>3:00  PM</option>  
                                    <option value=16:00:00>4:00  PM</option>  
                                    <option value=17:00:00>5:00  PM</option>  
                                    <option value=18:00:00>6:00  PM</option>  
                                    <option value=19:00:00>7:00  PM</option>  
                                    <option value=20:00:00>8:00  PM</option>  
                                    <option value=21:00:00>9:00  PM</option>  
                                    <option value=22:00:00>10:00  PM</option>  
                                    <option value=23:00:00>11:00  PM</option>
                                <br><br>
                                <input type=submit name="CreateEvent" value="Create Event" id="CreateEvent" style="font-size:12px;">
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
                    
        <?php
            $result="";
            if(isset($_POST['CreateEvent'])) {
                $id = $_POST['event_id'];
                $eventname = $_POST['event_name'];
                $description = $_POST['description'];
                $startday = $_POST['start_day'];
                $endday = $_POST['end_day'];
                $starttime = $_POST['start_time'];
                $endtime = $_POST['end_time'];
            
                if (empty($id) || empty($_SESSION['sessionID']) || empty($eventname) || empty($description) || empty($startday) || empty($endday) || empty($starttime) || empty($endtime)) {
                    echo "Data required in all fields";
                } else {
                    $query = 'insert into event (event_id, owner_id, event_name, description, start_day, end_day, start_time, end_time) values (' . $id . ',' .$_SESSION['sessionID']. ',"' .$eventname. '","' .$description. '","' .$startday. '","' .$endday. '","' .$starttime. '","' .$endtime. '")';                    
                    $result = mysqli_query($dbConnection, $query);
                    $createauthor = 'insert into owner_of values (' .$id. ',"' .$_SESSION['sessionID'].'")';
                    $author_result = mysqli_query($dbConnection, $createauthor);
                }
                    if (!$result) {
                        echo "<br>Could not create new event!<br>";
                    } else {
                        echo "<br>Event succsefully created!<br>";
                    }
                }

        ?>
        
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
        <script type="text/javascript" src="../SCRIPTS/createEvent.js" ></script> -->
    </body>
</html>