var BankAccount = /** @class */ (function () {
    function BankAccount(name, balance, accountnumber) {
        this.accountHolderName = name;
        this.balance = balance;
        this.acntNumber = accountnumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            return this.balance += amount;
        }
        return 0;
    };
    BankAccount.prototype.withraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            return this.balance -= amount;
        }
        return 0;
    };
    BankAccount.prototype.displayBalance = function () {
        return "Name: ".concat(this.accountHolderName, " Balance: ").concat(this.balance);
    };
    return BankAccount;
}());
var result = new BankAccount("vijay", 1000, "897678956");
result.deposit(1000);
console.log(result.displayBalance());
result.withraw(500);
console.log(result.displayBalance());
