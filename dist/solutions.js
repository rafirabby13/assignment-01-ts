"use strict";
{
    function formatString(input, toUpper) {
        if (typeof toUpper === "undefined") {
            return input.toUpperCase();
        }
        if (toUpper) {
            return input.toUpperCase();
        }
        return input.toLocaleLowerCase();
    }
    function filterByRating(items) {
        const ratingABoveFour = items.filter(item => item.rating >= 4);
        return ratingABoveFour;
    }
    function concatenateArrays(...arrays) {
        let concateArray = [];
        arrays.map(array => {
            // console.log(array)
            concateArray.push(...array);
        });
        // console.log(concateArray)
        return concateArray;
    }
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        // getModel(model: string){
        //     this.model= model
        // }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    function processValue(value) {
        if (typeof value === 'string') {
            return value.length;
        }
        return value * 2;
    }
    function getMostExpensiveProduct(products) {
        if (products.length == 0) {
            return null;
        }
        const highestPrice = products.reduce((prev, current) => (prev && prev.price > current.price) ? prev : current);
        return highestPrice;
    }
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
    }
}
