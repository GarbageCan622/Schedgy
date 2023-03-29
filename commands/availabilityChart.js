class AvailabilityChart {
    constructor(start, end) {     
        var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
        var time = (end.getHours() - start.getHours())*4 + (end.getMinutes() - start.getMinutes())/15;
        var arr = [];
        for(let i = 0; i < days; i++) {
            arr[i] = [];
            for(let j = 0; j < time; j++) {
                arr[i][j] = {
                    howMany: 0,
                    who: []
                };
                //Object.assign({},slot);
            }
        }
        this.chart = arr;
    }

    printChart() {
        for(var i = 0; i < this.chart.length; i++) {
            //console.log("");
            for (var j = 0; j < this.chart[i].length; j++) {
                console.log(i + ", " + j + " howMany: " + this.chart[i][j].howMany);
                for (var n = 0; n < this.chart[i][j].who.length; n++) {
                    console.log(" who: " + this.chart[i][j].who[n])
                }
            }
        }
    }

    markAvailable(date, time, id) {
        this.chart[date][time].howMany++;
        this.chart[date][time].who.unshift(id);
    }

    markUnavailable(date, time, id) {
        this.chart[date][time].howMany = -1;
        var index = this.chart[date][time].who.indexOf(id);
        if (index !== -1) {
            this.chart[date][time].who.splice(index, 1);
        }
    }
}

start = new Date(2018, 11, 28, 14, 0, 0, 0);
end = new Date(2018, 11, 30, 15, 15, 0, 0);
poll = new AvailabilityChart(start, end);



module.exports = AvailabilityChart;
