// Создайте класс BankAccount, который представляет банковский счет. 
// У него должны быть свойства accountNumber(номер счета) и balance
//     (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета.Класс должен иметь 
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account 
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account 
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account 
// 1234567890
class BankAccount {
    static bankName = "Bank";
    bankName2 = "Bank";
    // accountNumber;
    // balance;
    constructor(number, money){
        this.accountNumber = number;
        this.balance = money;
        console.log(`A new account ${this.accountNumber} in ${this.bankName}. Balance ${this.balance}.`);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited 500 into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn 200 from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient funds in account ${this.balance}`);
        }
    }
}
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
console.log(account1.bankName); // экземпляры не наследуют static поля
console.log(account1.bankName2);
