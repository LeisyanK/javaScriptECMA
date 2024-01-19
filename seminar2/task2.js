// Создайте объект Animal со свойством name и методом eat(), который 
// выводит сообщение о том, что животное ест.Создайте объект Dog со 
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает.Используйте одалживание метода eat() из 
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
//     что собака ест.
//         // Одалживание метода eat() из объекта Animal к объекту Dog
//         Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating
const Animal = {
    name: "Barsik",
    eat: function(){
        console.log(`${this.name} is eating.`);
    }
}

const Dog = {
    name: "Rex",
    bark: function(){
        console.log(`${this.name} is barking.`);
    }
}
Dog.eat = Animal.eat;

Animal.name;
Animal.eat();
Dog.name;
Dog.bark();
Dog.eat();
