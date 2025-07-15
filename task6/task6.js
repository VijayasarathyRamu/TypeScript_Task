var Car = /** @class */ (function () {
    function Car(model, price, brand) {
        this.model = model;
        this.price = price;
        this.brand = brand;
    }
    Object.defineProperty(Car.prototype, "info", {
        get: function () {
            return "".concat(this.brand, " ").concat(this.model, " - ").concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
// --- Outside the class ---
var allCars = [];
var car1 = new Car("Model S", 80000, "Tesla");
var car2 = new Car("Civic", 22000, "Honda");
var car3 = new Car("Corolla", 21000, "Toyota");
allCars.push(car1, car2, car3);
console.log("All Cars:");
allCars.forEach(function (car) { return console.log(car.info); });
console.log("\nTotal Cars: ".concat(allCars.length));
