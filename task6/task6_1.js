// Car.ts
var Car = /** @class */ (function () {
    function Car(model, price, brand) {
        this.model = model;
        this.price = price;
        this.brand = brand;
        Car.carList.push(this);
    }
    Object.defineProperty(Car.prototype, "info", {
        // Getter to get info about the car
        get: function () {
            return "".concat(this.brand, " ").concat(this.model, " - ").concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    // Static method to get total cars
    Car.getCarCount = function () {
        return Car.carList.length;
    };
    // Static method to list all cars
    Car.listAllCars = function () {
        console.log("All Cars in Inventory:");
        Car.carList.forEach(function (car) { return console.log(car.info); });
    };
    Car.carList = [];
    return Car;
}());
// --- Test the Car class ---
var car1 = new Car("Model S", 80000, "Tesla");
var car2 = new Car("Civic", 22000, "Honda");
var car3 = new Car("Corolla", 21000, "Toyota");
Car.listAllCars();
console.log("\nTotal Cars: ".concat(Car.getCarCount()));
