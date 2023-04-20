<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Create Event Login</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1>Create Schedgy Account</h1>
        <br>
        <h2 style="font-family:discord; color:white;">Create a Schedgy account to access your events</h2>

        <section class="section">
            <form action="" method="post">
                <label style="font-family:discord; color:white;"for="uid">Id: </label>
                <input type="text" id="id" name="id">
                <br><br>
                <label style="font-family:discord; color:white;"for="uname">Username: </label>
                <input type="text" id="uname" name="uname">
                <br><br>
                <label for="type">Account Type: </label>
                <select name="type" id="type">
                    <option value="admins">Admin</option>
                    <option value="students">Student</option>
                    <option value="parents">Parent</option>
                </select>
                <br><br>
                <input type="submit" name="register" value="Register">
            </form>
        </section>

        <?php
            // $dbConnection = mysqli_connect("b7a39c95", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
            $dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
            if (!$dbConnection) {
                die("Connection failed: " . mysqli_connect_error());
            }

            if(isset($_POST['register'])) {
                $uid = $_POST['id'];
                $username = $_POST['uname'];
            
                if (empty($id) || empty($username)) {
                    echo "Data required in all fields";
                } else {
                    $query = 'insert into users values (' . $id . ', "' . $username . ')';
                    $result = mysqli_query($dbConnection, $query);
                }
                    if (!$result) {
                        echo "<br>Could not create new event!<br>";
                    } else {
                        echo "<br>Event succsefully created!<br>";
                    }
                }

        ?>
    </body>
</html>