To Build
1. If you have node.js on your system (run 'node -v' in a command line, it should return v16.9.0 if node.js is installed). Otherwise install the latest version from the node.js site: https://nodejs.org/en/
2. Install discord.js and dotenv with node.js, by running 'npm install discord.js dotenv' in a command line.
3. Download and unzip the repository wherever your like, and add the provided .env file to the root folder (the one with bot.js in it)
    3.1. IMPORTANT: The .env file contains private keys for using the discord bot, please do not store these in a public place, such as the repository.
    3.2. If new slash commands have been created, run 'node deploy-commands.js' to register these new commands for use.
4. Open the command line into the root folder and run 'node bot.js', and 'Ready!' will print if successful. At this point the bot will remain online while the command line is open.

To Use
1. Add to discord server using the provided link
2. Typing '/' will bring up Schedgy's commands
