class AvailabilityChart {
    constructor(start, end) {
        var days = Math.floor((end.getTime() - start.getTime())/(1000*3600*24))
        var time = (end.getHours() - start.getHours())*4 + (end.getMinutes() - start.getMinutes())/15;
        var arr = [];
        var slot = {
            howMany: 0,
            who: []
        }
        for(let i = 0; i < days; i++) {
            arr[i] = [];
            for(let j = 0; j < time; j++) {
                arr[i][j] = slot;
            }
        }
        return arr;
    }

    mark_available(date, time, id) {
        availability[date][time] = availability[date][time]
    }

    
}


//year, month, day, hours, minutes, seconds, milliseconds
start = new Date(2018, 11, 30, 14, 0, 0, 0);
end = new Date(2018, 12, 15, 18, 15, 0, 0);

// 6 days, 23 fifteen minute availability slots

console.log(new AvailabilityChart(end, start));

module.exports = AvailabilityChart;