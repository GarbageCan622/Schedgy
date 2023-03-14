const AvailabilityChart = require("./availabilityChart.js");


function makeArray(w, h, val) {
    var arr = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

const slot = {
    howMany: 0,
    who: []
}
describe("Availability Chart", () => {
    test("Chart Construction, 6 days, 5 hours, 45 mins", () => {
        start = new Date(2018, 11, 24, 12, 0, 0, 0);
        end = new Date(2018, 11, 30, 17, 45, 0, 0);
        expect(new AvailabilityChart(start, end)).toStrictEqual(makeArray(23,6,slot));
    });
    test("Chart Construction, 6 days, 5 hours, 45 mins", () => {
        start = new Date(2018, 11, 30, 14, 0, 0, 0);
        end = new Date(2018, 12, 15, 18, 15, 0, 0);
        expect(new AvailabilityChart(start, end)).toStrictEqual(makeArray(17,16,slot));
    });
    
});
