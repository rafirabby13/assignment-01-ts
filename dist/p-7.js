"use strict";
{
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        return [Day.Saturday, Day.Sunday].includes(day) ? "Weekend" : "Weekday";
        // return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday"
    }
    const res = getDayType(Day.Sunday);
    console.log(res);
}
