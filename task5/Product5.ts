export class Product {
    id: number;
    name: string;
    price: number;
   
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
   
    getInfo(): string {
      return `${this.name} Product_Id: ${this.id} - ${this.price}`;
    }
  }