<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Discord Login</title>
        <link rel="stylesheet" href="../CSS/style.css">
        <link rel="stylesheet" type="text/css" href="CSS/output.css">
    </header>

    <body style="background-color:#36393F;">
        <h1>Welcome to the Schedgy Discord Login Page!</h1>
            
            <div class="flex items-center justify-center bg-discord-gray text-white" >
                <form action="" method="post">
                        <a id="login" name="submit" href="https://discord.com/api/oauth2/authorize?client_id=1083099572856959027&redirect_uri=https%3A%2F%2Fgarbagecan622.github.io%2FSchedgy&response_type=token&scope=identify" class="bg-discord-blue  text-xl px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75">
                        <i class="fa-brands fa-discord text-2xl"></i>
                        <span>Click here for Instant Discord login</span>
                        </a>
                </form>
            </div>
            <script>
            window.onload = () => {
                const fragment = new URLSearchParams(window.location.hash.slice(1));
                const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
          
                if (!accessToken) {
                    window.location.href('/')
                }
          
                fetch('https://discord.com/api/users/@me', {
                    headers: {
                        authorization: `${tokenType} ${accessToken}`,
                    },
                })
                .then(result => result.json())
                .then(response => {
                    const { username, discriminator, avatar, id} = response;
                    //set the welcome username string
                    if( '${username}' !== 'undefined'){
                        sessionStorage.setItem("discordUsername", username);
                        sessionStorage.setItem("discordDiscriminator", discriminator);
                        sessionStorage.setItem("discordAvatar", avatar);
                        sessionStorage.setItem("discordId", id);
                        document.cookie = "sessionStorage.getItem("discordId") = uid";
                        document.cookie = "sessionStorage.getItem("discordUsername") = uname";
                        location.assign('../SQL/eventHomePage.php');
                    }
                })
              .catch(console.error);
            };
          </script>

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
        if (!$dbConnection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        //$_SESSION['sessionID'] = $_POST['uid'];
        //$_SESSION['sessionName'] = $_POST['uname'];

        // if(isset($_POST['submit'])) {
        //     $id = $_SESSION['sessionID'];
        //     $uname = $_SESSION['sessionName'];
        
        //     if (empty($id) || empty($uname)) {
        //         echo "Data required in all fields";
        //     } else {
        //         $query = 'insert into users values (' . $id . ', "' . $uname . '")';
        //         $result = mysqli_query($dbConnection, $query);
        
        //         if (!$result) {
        //             echo "<br>Could not insert into User table<br>";
        //         } else {
        //             echo "<br>Successfuly inserted into User table<br>";
        //             redirect("../Schedgy/SQL/eventHomePage.php");
        //         }
        //     }
        // }
        ?>
        
    </body>
</html>