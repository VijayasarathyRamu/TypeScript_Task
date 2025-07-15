class BankAccount{
    private accountHolderName: string;
    private balance: number;
    private acntNumber: string;
 
    constructor(name:string,balance:number,accountnumber:string){
        this.accountHolderName = name;
        this.balance = balance;
        this.acntNumber = accountnumber;
    }
 
    public deposit(amount:number){
        if(amount>0){
            return this.balance+= amount;
        }
        return 0;
    }
 
    public withraw(amount:number){
        if(amount>0 && amount<=this.balance){
            return this.balance -= amount;
        }
        return 0;
    }
 
    public displayBalance(){
        return `Name: ${this.accountHolderName} Balance: ${this.balance}`;
    }
 
}
 
let result = new BankAccount("vijay",1000,"897678956");
result.deposit(1000);
console.log(result.displayBalance());
result.withraw(500);
console.log(result.displayBalance());
 