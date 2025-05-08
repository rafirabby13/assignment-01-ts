"use strict";
{
    function processValue(value) {
        if (typeof value === 'string') {
            return value.length;
        }
        return value * 2;
    }
    const res = processValue(707); // Output: 5
    console.log(res);
    // processValue(10);      // Output: 20
}
