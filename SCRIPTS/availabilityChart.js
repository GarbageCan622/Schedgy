class AvailabilityChart {
    constructor(start, end) {     
        let days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24));
        let time = (end.getHours() - start.getHours())*4 + (end.getMinutes() - start.getMinutes())/15;
        let arr = [];
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
        for(let i = 0; i < this.chart.length; i++) {
            //console.log("");
            for (let j = 0; j < this.chart[i].length; j++) {
                console.log(i + ", " + j + " howMany: " + this.chart[i][j].howMany);
                for (let n = 0; n < this.chart[i][j].who.length; n++) {
                    console.log(" who: " + this.chart[i][j].who[n]);
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
        let index = this.chart[date][time].who.indexOf(id);
        if (index !== -1) {
            this.chart[date][time].who.splice(index, 1);
        }
    }
}


//year, month, day, hours, minutes, seconds, milliseconds
let start = new Date(2018, 11, 28, 14, 0, 0, 0);
let end = new Date(2018, 11, 30, 15, 15, 0, 0);

// 6 days, 23 fifteen minute availability slots

poll = new AvailabilityChart(start, end);
//console.log(poll.chart[0][0].howMany == poll.chart[1][1].howMany);
//console.log(poll.chart[0][0].howMany == poll.chart[1][1].howMany);


module.exports = AvailabilityChart;
