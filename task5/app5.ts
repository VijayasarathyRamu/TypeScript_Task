import { Product } from './Product5';
import { Cart } from './Cart5';
 
const cart = new Cart();
 
const product1 = new Product(1, 'Mobile', 1000);
const product2 = new Product(2, 'Speaker', 200);
 
cart.addProduct(product1);
cart.addProduct(product2);
 
cart.showCart();