About the Project

Schedgy is a scheduling tool seamlessly integrated with Discord. Its purpose is to make scheduling meetings easier and faster for groups. There is a Schedgy bot that users can add to their Discord servers and its main purpose is to send notifications to users. These notifications can be about filling out an availability polling chart, reminders about upcoming events, and a decided meeting time once a polling chart has been filled out by an entire group. The polling chart will be held on a website and Schedgy will be able to supply links to website to fill out charts, create events, and see past/upcoming events. 

To Build
1. If you have node.js on your system (run 'node -v' in a command line, it should return v16.9.0 if node.js is installed). Otherwise install the latest version from the node.js site: https://nodejs.org/en/
2. Install discord.js and dotenv with node.js, by running 'npm install discord.js dotenv' in a command line.
3. Download and unzip the repository wherever your like, and add the provided .env file to the root folder (the one with bot.js in it)
4. IMPORTANT: The .env file contains private keys for using the discord bot, please do not store these in a public place, such as the repository.
5. If new slash commands have been created, run 'node deploy-commands.js' to register these new commands for use.
6. Open the command line into the root folder and run 'node bot.js', and 'Ready!' will print if successful. At this point the bot will remain online while the command line is open.

Running Unit Tests
1. Tests run automatically on Github, but to test locally it must be done manually.
2. n a command line in the /commands folder.
3. If Jest is not installed on your system run 'npm i --save-dev jest' to install it.
4. If Jest is already installed, or after it has been installed, run 'npm run test' in the commands folder to run all unit tests.

To Use the Bot
1. Add to discord server using the provided link.
2. Typing '/' will bring up Schedgy's commands.
