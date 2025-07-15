export class Book{
    constructor(
   public title: string,
   public author: string,
   public CODE: string,
   public available: boolean = true
 ) {}
 getDetails(): string {
   return `Title: ${this.title}, Author: ${this.author}, CODE: ${this.CODE}, Available: ${this.available}`;
 }
}