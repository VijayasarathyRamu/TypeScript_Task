"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Product.ts
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getInfo = function () {
        return "".concat(this.name, " Product_Id: ").concat(this.id, " - ").concat(this.price);
    };
    return Product;
}());
exports.Product = Product;
