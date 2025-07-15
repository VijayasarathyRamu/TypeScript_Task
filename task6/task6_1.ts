class Car {
    private static carList: Car[] = [];
   
    constructor(
      public model: string,
      public price: number,
      public brand: string
    ) {
      Car.carList.push(this);
    }
   
    // Getter to get info about the car
    get info(): string {
      return `${this.brand} ${this.model} - ${this.price}`;
    }
   
    // Static method to get total cars
    static getCarCount(): number {
      return Car.carList.length;
    }
   
    // Static method to list all cars
    static listAllCars(): void {
      console.log("All Cars in Inventory:");
      Car.carList.forEach(car => console.log(car.info));
    }
  }
   
  // --- Test the Car class ---
   
  const car1 = new Car("Model S", 80000, "Tesla");
  const car2 = new Car("Civic", 22000, "Honda");
  const car3 = new Car("Corolla", 21000, "Toyota");
   
  Car.listAllCars();
  console.log(`\nTotal Cars: ${Car.getCarCount()}`);