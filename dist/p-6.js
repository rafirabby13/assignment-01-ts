"use strict";
{
    function getMostExpensiveProduct(products) {
        if (products.length == 0) {
            return null;
        }
        const highestPrice = products.reduce((prev, current) => (prev && prev.price > current.price) ? prev : current);
        return highestPrice;
    }
    const products = [
        { name: "Pen", price: 180 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    const res = getMostExpensiveProduct(products);
    // Output: { name: "Bag", price: 50 }
    console.log(res);
}
