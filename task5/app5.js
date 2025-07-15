"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// App.ts
var Product5_1 = require("./Product5");
var Cart5_1 = require("./Cart5");
var cart = new Cart5_1.Cart();
var product1 = new Product5_1.Product(1, 'Mobile', 1000);
var product2 = new Product5_1.Product(2, 'Speaker', 200);
cart.addProduct(product1);
cart.addProduct(product2);
cart.showCart();
