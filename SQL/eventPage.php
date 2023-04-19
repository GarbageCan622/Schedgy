<!DOCTYPE html>
<html lang="en">
    <header>
        <title>Schedgy Event</title>
        <link rel="stylesheet" href="../CSS/style.css"/>
    </header>

    <body style="background-color:#36393F;">
        <h1 id="eventName"></h1>
        
        <div class="availableCharts">
            <div class="grids">
                <div id="chartToFill">
                    <table id="personalTimeTable" class="avalibityChart daySelect"></table>           
                </div>
            </div>
            <div class="grids">
                <div id="liveFeed">
                    <table id="groupTimeTable"></table>
                </div>
            </div>
        </div>
        
        <div id="submitDiv">
            <input type=submit value="Submit time" id="CreateEvent" style="font-size:12px;">
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="../SCRIPTS/createSpecificDate.js" ></script>
    </body>
</html>