"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.Books = [];
    }
    Library.prototype.addBook = function (book) {
        this.Books.push(book);
        console.log("added book: ".concat(book.getDetails()));
    };
    Library.prototype.removeBook = function (CODE) {
        this.Books = this.Books.filter(function (book) { return book.CODE !== CODE; });
        console.log("removed book with CODE: ".concat(CODE));
    };
    Library.prototype.listBooks = function () {
        console.log('library catalog:');
        this.Books.forEach(function (book) { return console.log(book.getDetails()); });
    };
    return Library;
}());
exports.Library = Library;
