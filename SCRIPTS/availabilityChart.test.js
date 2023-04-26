const AvailabilityChart = require("./availabilityChart");

function makeArray(w, h) {
    let arr = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = {
                howMany: 0,
                who: []
            };
        }
    }   
    return arr;
}

describe("Availability Chart", () => {
    test("Chart Construction, 6 days, 5 hours, 45 mins", () => {
        const start = new Date(2018, 11, 24, 12, 0, 0, 0);
        const end = new Date(2018, 11, 30, 17, 45, 0, 0);
        expect(new AvailabilityChart(start, end).chart).toStrictEqual(makeArray(23,6));
    });
    test("Chart Construction, 16 days, 4 hours, 15 mins", () => {
        const start = new Date(2018, 11, 30, 14, 0, 0, 0);
        const end = new Date(2018, 12, 15, 18, 15, 0, 0);
        expect(new AvailabilityChart(start, end).chart).toStrictEqual(makeArray(17,16));
    });
    test("Mark Available", () => {
        const start = new Date(2018, 11, 28, 14, 0, 0, 0);
        const end = new Date(2018, 11, 30, 15, 15, 0, 0);
        chart1 = new AvailabilityChart(start, end);
        chart1.markAvailable(1,1,123);
        let chart2 = makeArray(5,2);
        chart2[1][1].howMany++;
        chart2[1][1].who.unshift(123);
        expect(chart1.chart).toStrictEqual(chart2); 
    });
    test("Mark Available multiple", () => {
        const start = new Date(2018, 11, 28, 14, 0, 0, 0);
        const end = new Date(2018, 11, 30, 15, 15, 0, 0);
        let chart1 = new AvailabilityChart(start, end);
        chart1.markAvailable(1,1,123);
        chart1.markAvailable(1,1,456);
        chart1.markAvailable(0,3,456);
        let chart2 = makeArray(5,2);
        chart2[1][1].howMany++;
        chart2[1][1].who.unshift(123);
        chart2[1][1].howMany++;
        chart2[1][1].who.unshift(456);
        chart2[0][3].howMany++;
        chart2[0][3].who.unshift(456);
        expect(chart1.chart).toStrictEqual(chart2); 
    });

    test("Mark Unavailable", () => {
        const start = new Date(2018, 11, 28, 14, 0, 0, 0);
        const end = new Date(2018, 11, 30, 15, 15, 0, 0);
        let chart1 = new AvailabilityChart(start, end);
        chart1.markAvailable(1,1,123);
        chart1.markUnavailable(1,1,123);
        let chart2 = makeArray(5,2);
        chart2[1][1].howMany--;
        expect(chart1.chart).toStrictEqual(chart2); 
    });

    test("Mark Unavailable multiple", () => {
        const start = new Date(2018, 11, 28, 14, 0, 0, 0);
        const end = new Date(2018, 11, 30, 15, 15, 0, 0);
        let chart1 = new AvailabilityChart(start, end);
        chart1.markAvailable(1,1,123);
        chart1.markAvailable(1,1,456);
        chart1.markAvailable(0,3,456);
        chart1.markUnavailable(1,1,456);
        chart1.markUnavailable(0,3,456);
        let chart2 = makeArray(5,2);
        chart2[1][1].howMany++;
        chart2[1][1].who.unshift(123);
        chart2[1][1].howMany--;
        chart2[1][1].who.splice(chart2[1][1].who.indexOf(456), 1);
        chart2[0][3].howMany--;
        chart2[0][3].who.splice(chart2[0][3].who.indexOf(456), 1);
        expect(chart1.chart).toStrictEqual(chart2); 
    });
    
    test("Mark Unavailable for invalid time slot", () => {
        const start = new Date(2018, 11, 28, 14, 0, 0, 0);
        const end = new Date(2018, 11, 30, 15, 15, 0, 0);
        let chart1 = new AvailabilityChart(start, end);
        chart1.markAvailable(1,1,123);
        chart1.markAvailable(1,2,456);
        chart1.markUnavailable(1,1,123);
        chart1.markUnavailable(1,2,456);
        chart1.markUnavailable(1,3,789);
        let chart2 = makeArray(23,2);
        chart2[1][1].howMany++;
        chart2[1][1].who.unshift(123);
        chart2[1][2].howMany++;
        chart2[1][2].who.unshift(456);
        expect(() => {chart1.markUnavailable(1,3,789)}).toThrow("Invalid time slot.");
        expect(chart1.chart).toStrictEqual(chart2); 
    });
    
});