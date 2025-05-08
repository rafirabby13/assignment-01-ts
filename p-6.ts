{
    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null{

        if (products.length == 0) {
            return null
        }
      
        const highestPrice : Product   = products.reduce((prev, current)=> (prev && prev.price > current.price )? prev : current)
       

        return highestPrice

       
     

      }
      const products: Product[] = [
        { name: "Pen", price: 265 },
        { name: "Notebook", price: 265 },
        { name: "Bag", price: 265 }];
      
      const res = getMostExpensiveProduct(products);  
      // Output: { name: "Bag", price: 50 }
      console.log(res)
}