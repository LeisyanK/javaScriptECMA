// Создайте объект calculator с методами add(), subtract() и multiply(),
//     которые выполняют соответствующие математические операции над 
// двумя числами.Используйте методы call и apply для вызова этих 
// методов с передачей аргументов.
//     console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
const calculator = {
    add2: function () {
        return this.a + this.b;
    },
    add: function(a, b) {
        // console.log(a + b);
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
}
const Number = {
    num1: 10,
    num2: 5
}
const Number2 = {
    a: 10,
    b: 5
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));
console.log(calculator.add.call(Number, Number.num1, Number.num2)); // используем методы из calculator, а числа берем из объекта Number
console.log(calculator.subtract.apply(Number, [Number.num1, Number.num2]));
console.log(calculator.add2.call(Number2));
// calculator.add(5, 3);
// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(5, 3));
// console.log(calculator.multiply(5, 3));