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
        { name: "Pen", price: 265 },
        { name: "Notebook", price: 265 },
        { name: "Bag", price: 265 }
    ];
    const res = getMostExpensiveProduct(products);
    // Output: { name: "Bag", price: 50 }
    console.log(res);
}
