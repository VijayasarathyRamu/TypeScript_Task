// Temperature.ts
var Temperature = /** @class */ (function () {
    // Constructor with optional initial value
    function Temperature(celsius) {
        this._celsius = 0;
        this.celsius = celsius; // use setter to apply validation
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        // Setter with validation
        set: function (value) {
            if (value < -273.15) {
                console.log("Error: Temperature can't be below absolute zero (-273.15°C)");
            }
            else {
                this._celsius = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        // Getter to return Fahrenheit
        get: function () {
            return this._celsius * 9 / 5 + 32;
        },
        enumerable: false,
        configurable: true
    });
    // Method to show temperature in both units
    Temperature.prototype.show = function () {
        console.log("Celsius: ".concat(this._celsius, "\u00B0C"));
        console.log("Fahrenheit: ".concat(this.fahrenheit, "\u00B0F"));
    };
    return Temperature;
}());
// --- Test the Temperature class ---
var temp1 = new Temperature(25);
temp1.show();
console.log("\nSetting temperature to -300°C (invalid):");
temp1.celsius = -300; // should show error
console.log("\nSetting temperature to 100°C:");
temp1.celsius = 100;
temp1.show();
