// Задание 3(Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное 
// значение и возвращает объект с двумя методами: add и subtract. 
// Метод add должен увеличивать значение на переданное число, а 
// метод subtract должен уменьшать значение на переданное число. 
// Значение должно быть доступно только через методы объекта, а не
// напрямую

const createCalculator = (number) => { // number - нач. значение
    return {
        add: num => num + number,
        add2: (num1, num2) => num1 + num2 + number,
        subtract: num => number - num,
        number: number
    }
}

const result = createCalculator(34);
console.log(result);
console.log(result.add(5)); // 5 - это num
console.log(result.subtract(5)); // 5 - это num
console.log(result.add2(5, 10)); // 5 - это num
console.log(result.number); 