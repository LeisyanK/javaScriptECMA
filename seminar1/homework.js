// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let count = 0;
    this.increment = function() {
        return ++count;
    }
    this.decrement = function() {
        return --count;
    }
}
let counter1 = new createCounter();
console.log(counter1.increment());  // 1
console.log(counter1.increment());  // 2
console.log(counter1.increment());  // 3
console.log(counter1.increment());  // 4
console.log(counter1.decrement());  // 3
console.log(counter1.increment());  // 4
console.log(counter1.decrement());  // 3

// 3) 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)
function factorial (number) {
    if (number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(5));


// // Дополнительная задача

// 4) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// * Пример **
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
