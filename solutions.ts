{
  function formatString(input: string, toUpper?: boolean): string {
    if (typeof toUpper === "undefined") {
      return input.toUpperCase();
    }
    if (toUpper) {
      return input.toUpperCase();
    }
    return input.toLocaleLowerCase();
  }



  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const ratingABoveFour: { title: string; rating: number }[] = items.filter(item=> item.rating >= 4)

    return ratingABoveFour
}
  
function concatenateArrays<T>(...arrays: T[][]): T[]{
  let concateArray: T[] = []
   arrays.map(array=>{
     
       concateArray.push(...array)

   })

   return concateArray


}

 class Vehicle {
    constructor(private make: string, public year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }



  function processValue(value: string | number): number{
    if (typeof value === 'string') {
        return value.length   
    }
    
        return value *2
    

}


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



  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{

   
    return [Day.Saturday, Day.Sunday].includes(day) ? "Weekend" : "Weekday"

  }


  async function squareAsync(n: number): Promise<number> {
   
    return await new Promise<number>((res, rej) => {
      if (n < 0) {
        rej("Negative number not allowed");
      } else {
        setTimeout(() => {
 
            res(n * n);
          }, 1000);
      }
    });
  }
}
