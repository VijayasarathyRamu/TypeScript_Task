"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.items.push(product);
    };
    Cart.prototype.getTotal = function () {
        return this.items.reduce(function (total, product) { return total + product.price; }, 0);
    };
    Cart.prototype.showCart = function () {
        if (this.items.length === 0) {
            console.log('Your cart is empty.');
        }
        else {
            console.log('Items in your cart:');
            this.items.forEach(function (item) { return console.log(item.getInfo()); });
            console.log("Total: ".concat(this.getTotal()));
        }
    };
    return Cart;
}());
exports.Cart = Cart;
