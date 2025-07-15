import { Book } from "./Book";
import { Library } from "./Library";
 
const myLibrary = new Library();
const book1 = new Book('harry potter', 'J.K', '101');
const book2 = new Book('Clean Code', 'Robert Martin', '102', false);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
myLibrary.removeBook('102');
myLibrary.listBooks();