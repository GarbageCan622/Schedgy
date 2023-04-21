<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Discord Login</title>
        <link rel="stylesheet" href="CSS/style.css">
        <link rel="stylesheet" type="text/css" href="CSS/output.css">
    </header>

    <body style="background-color:#36393F;">
        <h1>Welcome to the Schedgy Discord Login Page!</h1>
            <div class="flex items-center justify-center bg-discord-gray text-white" >
                <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=1083099572856959027&redirect_uri=https%3A%2F%2Fgarbagecan622.github.io%2FSchedgy&response_type=token&scope=identify" class="bg-discord-blue  text-xl px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75">
                    <i class="fa-brands fa-discord text-2xl"></i>
                    <span>Click here for Instant Discord login</span>
                </a>
            </div>
        <br>
        <img src="LOGOS/discord logo.png" width = 100 class="center">
        
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
                  location.assign('HTML/signup.html');
             }})
              .catch(console.error);
          
          
          };
          </script>
    </body>
</html>