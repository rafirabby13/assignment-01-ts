{
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

    // getModel(model: string){
    //     this.model= model
    // }
    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }

  const myCar = new Car("Toyotrrra", 2020, "Corolla");

  myCar.getInfo(); 
  myCar.getModel();



}
