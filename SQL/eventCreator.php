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
        <form id="EventForm">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tbody>
                    
                    <div>
                        <tr>
                            <td align="center" colspan="2">
                                <form action="" method="post" id="NewEvent" style="width:100%; margin:20px 0px 20px 0px;">
                                    <label for="event_name" style="font-family:discord;color:white;font-size:30px;">Enter new Event Name: </label>
                                    <input type="text" id="event_name" name="event_name">
                                    <br><br>
                                    <label for="event_id" style="font-family:discord;color:white;font-size:20px;">Enter New Event ID#: </label>
                                    <input type="text" id="event_id" name="eventID">
                                    <br><br>
                                    <label id="desc" for="description" style="font-family:discord;color:white;font-size:20px;">Description: </label>
                                    <input type="text" id="description" name="description">
                                </form>
                            </td>
                        </tr>
                    </div>

                    <tr>
                    <td align=center valign=top rowspan=2 width="50%">
                            <div id="WhatDates" style=" color:white; font-size:18px; text-align: center; width: 50%; min-width:305px;">
                                What dates might work?
                            </div>    
                            
                            <div style="color:white; font-size:15px;line-height:1.5; margin: 10px 0px 10px 0px;">
                                Select Specific Dates or Days of the Week.<br>
                                Click a start and end date for your event.<br>
                                Or select the days of the week for your event.<br>
                                    Survey using: 
                                <select id="DateTypes" name="DateTypes">
                                    <option value="SpecificDates">Specific Dates</option>
                                    <option value="DaysOfTheWeek">Days of the Week</option>
                                </select>
                            </div>
                     <div id='SpecificDates'>
                        <input type="text" id="datePick" name="daterange" readonly value="03/17/2023 - 03/23/2023"/>
                                </div>
                                
                                <div id='DaysOfTheWeek' style='display:none;'>
                                    <div id='Row6' class="daySelect">
                                        <ul>
                                            <li id="Monday">
                                              <input type="checkbox" id="0Day" name="Monday" value="Monday">
                                              <label for="0Day">Mon</label>
                                            </li>
                                            <li id="Tuesday">
                                              <input type="checkbox" id="1Day" name="Tuesday" value="Tuesday">
                                              <label for="1Day">Tues</label>
                                            </li>
                                            <li id="Wednesday">
                                              <input type="checkbox" id="2Day" name="Wednesday" value="Wednesday">
                                              <label for="2Day">Wed</label>
                                            </li>
                                            <li id="Thursday">
                                              <input type="checkbox" id="3Day" name="Thursday" value="Thursday">
                                              <label for="3Day">Thur</label>
                                            </li>
                                            <li id="Friday">
                                                <input type="checkbox" id="4Day" name="Friday" value="Friday">
                                                <label for="4Day">Fri</label>
                                              </li>
                                              <li id="Saturday">
                                                <input type="checkbox" id="5Day" name="Saturday" value="Saturday">
                                                <label for="5Day">Sat</label>
                                              </li>
                                              <li id="Sunday">
                                                <input type="checkbox" id="6Day" name="Sunday" value="Sunday">
                                                <label for="6Day">Sun</label>
                                              </li>
                                          </ul>
                                    </div>
                                    <br clear=all>
                                </div>                  
                            

                            <div style="display:none">
                                <input id=PossibleDates name=PossibleDates>
                                <input id=TopLeftDate value="2023-03-12">
                            </div>
                        </td>

                        <td align=center valign=top width="50%">
                            <div id="WhatTimes" style="color:white;font-size:20px;text-align: center; width: 50%; min-width:305px;">
                                What times might work?
                            </div>
                            <div style="font-size:12px;line-height:1.5; margin: 10px 0px 10px 0px;">
                                <!-- <input type=checkbox name="AllDayEvent"> All-day event -->&nbsp;
                            </div>

                            <div style="color:white;font-size:15px;line-height:1.5; margin: 10px 0px 10px 0px;">
                                No earlier than: 
                                <select name="start_time" id="NoEarlierThan">
                                    <option value=0>12:00  AM</option>  
                                    <option value=1>1:00  AM</option>  
                                    <option value=2>2:00  AM</option>  
                                    <option value=3>3:00  AM</option>  
                                    <option value=4>4:00  AM</option>  
                                    <option value=5>5:00  AM</option>  
                                    <option value=6>6:00  AM</option>  
                                    <option value=7>7:00  AM</option>  
                                    <option value=8>8:00  AM</option>  
                                    <option selected value=9>9:00  AM</option>  
                                    <option value=10>10:00  AM</option>  
                                    <option value=11>11:00  AM</option>  
                                    <option value=12>12:00  PM</option>  
                                    <option value=13>1:00  PM</option>  
                                    <option value=14>2:00  PM</option>  
                                    <option value=15>3:00  PM</option>  
                                    <option value=16>4:00  PM</option>  
                                    <option value=17>5:00  PM</option>  
                                    <option value=18>6:00  PM</option>  
                                    <option value=19>7:00  PM</option>  
                                    <option value=20>8:00  PM</option>  
                                    <option value=21>9:00  PM</option>  
                                    <option value=22>10:00  PM</option>  
                                    <option value=23>11:00  PM</option>  
                                    <option value=0>12:00  AM</option>
                                </select>
                            </div>
                        
                            <div style="color:white;font-size:15px;line-height:1.5; margin: 10px 0px 10px 0px;">
                                No later than: 
                                <select name="end_time" id="NoLaterThan">
                                    <option value=0>12:00  AM</option>  
                                    <option value=1>1:00  AM</option>  
                                    <option value=2>2:00  AM</option>  
                                    <option value=3>3:00  AM</option>  
                                    <option value=4>4:00  AM</option>  
                                    <option value=5>5:00  AM</option>  
                                    <option value=6>6:00  AM</option>  
                                    <option value=7>7:00  AM</option>  
                                    <option value=8>8:00  AM</option>  
                                    <option value=9>9:00  AM</option>  
                                    <option value=10>10:00  AM</option>  
                                    <option value=11>11:00  AM</option>  
                                    <option value=12>12:00  PM</option>  
                                    <option value=13>1:00  PM</option>  
                                    <option value=14>2:00  PM</option>  
                                    <option value=15>3:00  PM</option>  
                                    <option value=16>4:00  PM</option>  
                                    <option selected value=17>5:00  PM</option>  
                                    <option value=18>6:00  PM</option>  
                                    <option value=19>7:00  PM</option>  
                                    <option value=20>8:00  PM</option>  
                                    <option value=21>9:00  PM</option>  
                                    <option value=22>10:00  PM</option>  
                                    <option value=23>11:00  PM</option>  
                                    <option value=0>12:00  AM</option>
                                </select>
                            </div>
                        
                            <div style="font-size:12px;line-height:1.5; margin: 10px 0px 10px 0px">
                                &nbsp;
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td colspan=2 style="color:white;" align=center><input type=submit value="CreateEvent" id="CreateEvent" style="font-size:12px;"></td>
                    </tr>
                   
                </tbody>
            </table>
        </form>
        
        <?php
            // $dbConnection = mysqli_connect("b7a39c95", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
            $dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
            if (!$dbConnection) {
                die("Connection failed: " . mysqli_connect_error());
            }

            if(isset($_POST['CreateEvent'])) {
                $id = $_POST['event_id'];
                $eventname = $_POST['event_name'];
                $description = $_POST['description'];
                $startd = $_POST['start_date'];
                $endd = $_POST['end_date'];
                $startt = $_POST['start_time'];
                $endt = $_POST['end_time'];
            
                if (empty($id) || empty($eventname) || empty($description) || empty($startd) || empty($endd) || empty($startt) || empty($endt)) {
                    echo "Data required in all fields";
                } else {
                    $query = 'insert into event values (' . $id . ', "' . $eventname . '", "' . $description . '", "' . $startd . '", ' . $endd . ' ","' .$startt. '","' .$endt. ')';
                    $result = mysqli_query($dbConnection, $query);
                }
                    if (!$result) {
                        echo "<br>Could not create new event!<br>";
                    } else {
                        echo "<br>Event succsefully created!<br>";
                    }
                }

        ?>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
        <script type="text/javascript" src="../SCRIPTS/createEvent.js" ></script>
    </body>
</html>