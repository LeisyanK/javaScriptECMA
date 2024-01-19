// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title(название) - строка, название книги.
// Свойство author(автор) - строка, имя автора книги.
// Свойство pages(количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц).
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`${this.title} ${this.author}, ${this.pages} pages.`);
    }
}
const book1 = new Book("Сказки", "Пушкин", 25);
const book2 = new Book("Детство", "Толстой", 203);
book1.displayInfo();
book2.displayInfo();


//     Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name(имя) - строка, имя студента.
// Свойство age(возраст) - число, возраст студента.
// Свойство grade(класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте(имя, возраст и класс).
//     javascript

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"
class Student {
    constructor(name, age, grade) {
        this.name = name,
        this.age = age,
        this.grade = grade
    }
    displayInfo() {
        console.log(`Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}`);
    }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


// Необязательная задача

// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]
class Phonebook {
    contacts = [];
    addContact (name, phone) {
        let object = {};
        object['name'] = name;
        object['phone'] = phone;
        this.contacts.push(object);
    }
    // findContactByName(searchName) {
    //     let result = '';
    //     // return function() {
    //     // return this.contacts.find(x => x.name === searchName);
    //     // this.contacts.filter(x => x.name === searchName).map(x => x.phone);
    //     this.contacts.forEach( function (element) {
    //         // console.log(element, element.name, element.phone);
    //         if (element.name === searchName) {
    //             // console.log(`{ name: "${key}", phone: "${value}" }`);
    //             // console.log(element);
    //             // return element;
    //             result = `{ name: ${element.name}, phone: ${element.phone} }`;
    //             // console.log(result);
    //             // return result;
    //         }
    //     });
    //     return result;
    // }
    findContactByName(searchName) {
        // return this.contacts.find(x => x.name === searchName);
        return this.contacts.filter(x => x.name === searchName);

    }
    findContactByPhone(searchPhone) {
        return this.contacts.filter(x => x.phone === searchPhone);
        // this.contacts.forEach( (element) => {
        //     if (element.phone === searchPhone) {
        //         return `{ name: ${element.name}, phone: ${element.phone} }`;
        //     }
        // })
    }
    deleteContact(searchName) {
        this.contacts.forEach( (element, index, array) => {
            if (element.name === searchName) {
                array.splice(index, 1);
            }
        })
    }
}
let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.contacts);
console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts);
