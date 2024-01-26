// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee(сотрудник), который имеет следующие свойства и методы:

// Свойство name(имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике(имя).
// Реализуйте класс Manager(менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department(отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере(имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales
class Employee {
    constructor(name) {
        this.name = name;
    }
    
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// ""Управление списком заказов""

// Реализуйте класс Order(заказ), который имеет следующие свойства и методы:

// Свойство orderNumber(номер заказа) - число, уникальный номер заказа.
// Свойство products(продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600
class Order {
    products = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        // this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
     };
    getTotalPrice() {
        return this.products.reduce( (acc, elem) => {return acc += elem.price}, 0)
    }
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());

// Необязательное задание

// 1. Создать класс "Товар" с приватными полями "название", "цена" и "количество".Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно.Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

// Пример работы кода:

// const product1 = new Product('Тетрадь', 50, 200);
// console.log(product1.name); // "Тетрадь"
// console.log(product1.price); // 50
// console.log(product1.quantity); // 200
// console.log(product1.getCost()); // 10000

// const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"
class Product2 {
    #name;
    #price;
    #quantity;
    static maxQuantity = 1000;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        if (quantity < Product2.maxQuantity) {
            this.#quantity = quantity;
        } else {
            console.log("Quantity is too high");
            // throw new Error("Quantity is too high");
        }
    }

    setName(name) {
        this.#name = name;
    }
    setPrice(price) {
        this.#price = price;
    }
    setQuantity(quantity) {
        if (quantity < Product.maxQuantity) {
            this.#quantity = quantity;
        } else {
            console.log("Quantity is too high");
            // throw new Error("Quantity is too high");
        }
    }
    getName() {
        return this.#name;
    }
    getPrice() {
        return this.#price
    }
    getQuantity() {
        return this.#quantity;
    }

}
const product3 = new Product2('Тетрадь', 50, 200);
// console.log(product3.name); // "Тетрадь"
console.log(product3.getName()); // "Тетрадь"
// console.log(product3.price); // 50
console.log(product3.getPrice()); // 50
// console.log(product3.quantity); // 200
console.log(product3.getQuantity()); // 10000

const product4 = new Product2('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"

// 2 Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта.Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

// const user1 = new User('John', 30);
// console.log(user1.getName()); // "John"
// user1.setName('Mike');
// console.log(user1.getName()); // "Mike"
// console.log(User.getMaxAge()); // 120

// const user2 = new User('Jane', 150); // Error: Age is too high
class User {
    #name;
    #age;
    #email;
    static maxAge = 120;

    constructor(name, age, email){
        if(age > User.maxAge) {
            // console.log('Error: Age is too high');
            throw new Error('Error: Age is too high');
        }
        this.#name = name;
        this.#age = age;
        this.#email = email;
    }
    getMaxAge(){
        return User.maxAge;
    }
    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getEmail() {
        return this.#email;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }

    setEmail(email) {
        this.#email = email;
    }
}

const user1 = new User('John', 30);
console.log(user1.getName()); // "John"
user1.setName('Mike');
console.log(user1.getName()); // "Mike"
console.log(user1.getMaxAge()); // 120

const user2 = new User('Jane', 150); // Error: Age is too high