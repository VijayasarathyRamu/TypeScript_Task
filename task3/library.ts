import { Book } from "./Book";
 
export class Library{
    private Books:Book[]=[]
    addBook(book:Book):void{
       this.Books.push(book)
       console.log(`added book: ${book.getDetails()}`);
    }
     removeBook(CODE: string): void {
    this.Books = this.Books.filter(book => book.CODE !== CODE);
    console.log(`removed book with CODE: ${CODE}`);
  }
   listBooks(): void {
     console.log('library catalog:');
    this.Books.forEach(book => console.log(book.getDetails()));
  }
 
}