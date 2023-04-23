<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Discord Login</title>
        <link rel="stylesheet" href="../CSS/style.css">
        <!-- <link rel="stylesheet" type="text/css" href="CSS/output.css"> -->
    </header>

    <body style="background-color:#36393F;">
        <h1>Welcome to the Schedgy Discord Login Page!</h1>
            
            <!-- <div class="flex items-center justify-center bg-discord-gray text-white" >
                <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=1083099572856959027&redirect_uri=https%3A%2F%2Fgarbagecan622.github.io%2FSchedgy&response_type=token&scope=identify" class="bg-discord-blue  text-xl px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75">
                    <i class="fa-brands fa-discord text-2xl"></i>
                    <span>Click here for Instant Discord login</span>
                </a>
            </div> -->
            <p style="font-family:discord; color:white;"><a href="index.php">Register New Schedgy Account</a></p>

            <div>
                <br><br>
                <form action="" method="post">
                    <label style="font-family:discord; color:white;" for="uid">Schedgy ID#: </label>
                    <input type="text" id="uid" name="uid">
                    <br><br>
                    <input type="submit" name="submit" value="Login">
                </form>
            </div>
        <br>
        <img src="../LOGOS/discord logo.png" width = 100 class="center">

        <?php
        session_start();
        function redirect($url) {
            header('Location: '.$url);
        }
            
        $dbConnection = mysqli_connect("212.192.29.151", "u88864_T3BYDVo5Nj", "+4i^Q6Pfwm@OzghvSw1V6rwt", "s88864_Events");
        //$dbConnection = mysqli_connect("localhost", "root", "", "schedgy");
        if (!$dbConnection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        if(isset($_POST['submit'])) {
            $userid = $_POST['uid'];

            $query = 'select * from users where uid = "' . $userid . '"';
            $result = mysqli_query($dbConnection, $query);

            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)){
                    $dbID = $row["uid"];
                    if($userid==$dbID){
                        $username = $row["uname"];
                        $_SESSION['sessionID'] = $row['uid'];
                    }
                }
                echo "<br>Logged in as user " .$username. "";
                redirect("/Schedgy/SQL/eventHomePage.php");
            }else{
                echo "<br>USER NOT FOUND<br>";
                }
        }
        ?>
        
    </body>
</html>