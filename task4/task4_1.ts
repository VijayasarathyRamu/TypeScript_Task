class BankAccount {
    private accountNumber: number;
    private holderName: string;
    private balance: number;
   
    constructor(accountNumber: number, holderName: string, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.holderName = holderName;
      this.balance = initialBalance;
    }
   
    // Public method to deposit money
    public deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
   
    // Public method to withdraw money
    public withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.balance}`);
      } else {
        console.log("Invalid or insufficient funds.");
      }
    }
   
    // Public method to check balance
    public getBalance(): number {
      return this.balance;
    }
   
    // Display account info (excluding private balance)
    public getAccountInfo(): void {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Holder Name: ${this.holderName}`);
    }
  }
   
  // Example usage
  const myAccount = new BankAccount(123456, "Praveen Raj", 1000);
   
  myAccount.getAccountInfo();     // View basic info
  myAccount.deposit(500);         // Deposit money
  myAccount.withdraw(300);        // Withdraw money
  console.log("Balance:", myAccount.getBalance());  // Check balance