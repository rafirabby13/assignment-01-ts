"use strict";
{
    function getMostExpensiveProduct(products) {
        if (products.length == 0) {
            return null;
        }
        const highestPrice = products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
        return highestPrice;
    }
    const products = [
        { name: "Pen", price: 130 },
        { name: "Notebook", price: 205 },
        { name: "Bag", price: 50 }
    ];
    console.log(getMostExpensiveProduct(products));
    // Output: { name: "Bag", price: 50 }
}
