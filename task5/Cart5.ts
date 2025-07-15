import { Product } from './Product5';
 
export class Cart {
  items: Product[] = [];
 
  addProduct(product: Product): void {
    this.items.push(product);
  }
 
  getTotal(): number {
    return this.items.reduce((total, product) => total + product.price, 0);
  }
 
  showCart(): void {
    if (this.items.length === 0) {
      console.log('Your cart is empty.');
    } else {
      console.log('Items in your cart:');
      this.items.forEach(item => console.log(item.getInfo()));
      console.log(`Total: ${this.getTotal()}`);
    }
  }
}