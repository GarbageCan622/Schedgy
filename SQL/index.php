<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Create Event Login</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1>Create Schedgy Account</h1>
        <br>
        <h2 style="font-family:discord; color:white;">Create a Schedgy account to access Events</h2>
        <h3 style="font-family:discord; color:white;">Enter a User ID# and Username for access across the site.<br>Select if you want to create an Event or participate in an Event</h3>

        <section class="section">
            <form action="" method="post">
                <label style="font-family:discord; color:white;"for="id">User ID#: </label>
                <input type="text" id="id" name="id">
                <br><br>
                <label style="font-family:discord; color:white;"for="uname">Username: </label>
                <input type="text" id="uname" name="uname">
                <br><br>
                <label style="font-family:discord; color:white;"for="type">Account Type: </label>
                <select name="type" id="type">
                    <option value="author">Event Author</option>
                    <option value="guest">Event Guest</option>
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
                $id = $_POST['id'];
                $uname = $_POST['uname'];
                $type = $_POST['type'];
            
                if (empty($id) || empty($uname) || empty($type)) {
                    echo "Data required in all fields except grade";
                } else {
                    $query = 'insert into users values (' . $id . ', "' . $uname . '")';
                    $result = mysqli_query($dbConnection, $query);
            
                    if (!$result) {
                        echo "<br>Could not insert into User table<br>";
                    } else {
                        echo "<br>Successfuly inserted into User table<br>";
            
                        switch ($type) {
                            case "author":
                                $query = 'insert into author values (' . $id .')';
                                $result = mysqli_query($dbConnection, $query);
                                if (!$result) {
                                    echo "<br>Could not create an Event Author<br>";
                                } else {
                                    echo "<br>Successfuly created new Event Author!<br>";
                                    header('Location: login.php');
                                }
                                break;
                            case "guest":
                                $query = 'insert into guests values (' . $id .')';
                                $result = mysqli_query($dbConnection, $query);
                                if (!$result) {
                                    echo "<br>Could not create an Event Guest<br>";
                                } else {
                                    echo "<br>Successfuly created new Event Guest!<br>";
                                    header('Location: login.php');
                                }
                                break;
                            default:
                                echo "<br>Unexpected error, invalid Acct Type<br>";
                        }
                    }
                }
            }

        ?>
    </body>
</html>