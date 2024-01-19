// Создайте объект Person, представляющий человека, сo следующими свойствами: name, age и gender.Добавьте 
// также методы introduce и changeName.Метод introduce должен выводить информацию о человеке, включая его
// имя, возраст и пол.Метод changeName должен изменять имя человека на новое заданное значение.
//     Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is 
// John.I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const Person = {
    personName: this.personName,
    age: this.age,
    gender: this.gender,

    introduce: function() {
        console.log(`My name is ${this.personName}.I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName: function(newName) {
        this.personName = newName;
        console.log(this.personName);
    }
}

Person.personName = "John";
Person.age = 25;
Person.gender = "male";
console.log(Person);
Person.introduce(); // Ожидаемый результат: My name is John.I'm 25 years old and I identify as male.
Person.changeName("Mike");
// console.log(Person.changeName.call(Person, "Mike"));
Person.introduce(); // Ожидаемый результат: My name is Mike.I'm 25 years old and I identify as male.
// console.log(this);