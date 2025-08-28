class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ₹${amount}. New Balance: ₹${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than 0.");
        }
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: ₹${amount}. New Balance: ₹${this.balance}`);
        }
    }
}
const myAccount = new BankAccount("ACC123", 5000);

console.log(`Account Number: ${myAccount.accountNumber}`);
console.log(`Initial Balance: ₹${myAccount.balance}`);

myAccount.deposit(2000);
myAccount.withdraw(1500);
myAccount.withdraw(7000);
