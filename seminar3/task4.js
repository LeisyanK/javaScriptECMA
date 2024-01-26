// Создайте класс Animal, который будет представлять животное.У 
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name(строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal.Для 
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed(строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] 
// принесла мяч."
class Animal {
    constructor (name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук `);
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super (name); // super - функция, вызывающая родительский конструктор
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака породы ${this.breed} по кличке ${this.name} принесла мяч.`);
    }
    dogSpeak() {
        super.speak();
        console.log( "гав");
    }
    speak() {
        console.log(`${this.name} лает `);
    }
}
const animal = new Animal('Мурка');
animal.speak();
const dog = new Dog('Бобик', 'овчарка');
dog.fetch();
dog.speak();
dog.dogSpeak();