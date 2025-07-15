// Temperature.ts
class Temperature {
    private _celsius: number = 0;
   
    // Constructor with optional initial value
    constructor(celsius: number) {
      this.celsius = celsius; // use setter to apply validation
    }
   
    // Setter with validation
    set celsius(value: number) {
      if (value < -273.15) {
        console.log("Error: Temperature can't be below absolute zero (-273.15°C)");
      } else {
        this._celsius = value;
      }
    }
   
    // Getter to return Fahrenheit
    get fahrenheit(): number {
      return this._celsius * 9 / 5 + 32;
    }
   
    // Method to show temperature in both units
    show(): void {
      console.log(`Celsius: ${this._celsius}°C`);
      console.log(`Fahrenheit: ${this.fahrenheit}°F`);
    }
  }
   
  // --- Test the Temperature class ---
   
  const temp1 = new Temperature(25);
  temp1.show();
   
  console.log("\nSetting temperature to -300°C (invalid):");
  temp1.celsius = -300; // should show error
   
  console.log("\nSetting temperature to 100°C:");
  temp1.celsius = 100;
  temp1.show();