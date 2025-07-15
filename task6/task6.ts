class Car {
    constructor(
      public model: string,
      public price: number,
      public brand: string
    ) {}
   
    get info(): string {
      return `${this.brand} ${this.model} - ${this.price}`;
    }
  }
   
  // --- Outside the class ---
  const allCars: Car[] = [];
   
  const car1 = new Car("Model S", 80000, "Tesla");
  const car2 = new Car("Civic", 22000, "Honda");
  const car3 = new Car("Corolla", 21000, "Toyota");
   
  allCars.push(car1, car2, car3);
   
  console.log("All Cars:");
  allCars.forEach(car => console.log(car.info));
   
  console.log(`\nTotal Cars: ${allCars.length}`);