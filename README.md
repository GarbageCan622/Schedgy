About the Project

Schedgy is a scheduling tool seamlessly integrated with Discord. Its purpose is to make scheduling meetings easier and faster for groups. There is a Schedgy bot that users can add to their Discord servers and its main purpose is to send notifications to users. These notifications can be about filling out an availability polling chart, reminders about upcoming events, and a decided meeting time once a polling chart has been filled out by an entire group. The polling chart will be held on a website and the Schedgy Discord bot will be able to supply links to the website to fill out charts, create events, and see past/upcoming events. 

To Build
1. If you have node.js on your system (run 'node -v' in a command line, it should return v16.9.0 if node.js is installed). Otherwise install the latest version from the node.js site: https://nodejs.org/en/
2. Install discord.js and dotenv with node.js, by running 'npm install discord.js dotenv' in a command line.
3. Download and unzip the repository wherever your like, and add the provided .env file to the root folder (the one with bot.js in it)
4. IMPORTANT: The .env file contains private keys for using the discord bot, please do not store these in a public place, such as the repository.
5. If new slash commands have been created, run 'node deploy-commands.js' to register these new commands for use.
6. Open the command line into the root folder and run 'node bot.js', and 'Ready!' will print if successful. At this point the bot will remain online while the command line is open.


To Generate Figures
1. Add Schedgy to a Discord server you own using this link, if you do not have it already. (Alternatively you can access the "signup.html" page by downloading the repository and skip to step 4)
2. In a Discord channel Schedgy can access, type /sendlink to receive link to Schedy’s homepage
3. From here you can log into Discord, which will give you access to the polling prototype page
4. On the polling page, you then set a name for your event in the “New Event Name” textbox 
5. You can then choose whether you want a “Specific Date” event or a “Day of the Week” event

a. If “Specific Date” is chosen, click on the dates shown to pull up the calendar and select a date range for the event to occur
b. If “Day of the Week” is chosen, click on the days of the week you intend to have the event occur on 

6. Select the hour range you intend to have the event to occur between in the “No earlier than:” and “No later than:” fields 
7. Click create event, and you should now be presented with the event’s polling chart, displaying the times that would be filled out by users.



Running Unit Tests
1. Tests run automatically on Github, but to test locally it must be done manually.
2. n a command line in the /commands folder.
3. If Jest is not installed on your system run 'npm i --save-dev jest' to install it.
4. If Jest is already installed, or after it has been installed, run 'npm run test' in the commands folder to run all unit tests.

To Use the Bot
1. Add to discord server using the provided link.
2. Typing '/' will bring up Schedgy's commands.
