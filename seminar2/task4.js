// Создайте класс Person, который имеет свойства name и age, а также 
// метод introduce(), который выводит сообщение с представлением 
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.
class Person {
    // name = "John";
    // age = 25;

    constructor(name, age) {
        this.name = name,
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${ this.name } and I'm ${this.age} years old.`);
    }
}
const Dog = {
    bark: function (name){
        console.log(`${name} bark bark`);
    }
}

const person = new Person("John", 25);
person.introduce();
person.bark = Dog.bark;
person.bark(person.name);
console.log(person);