// Напишите рекурсивную функцию sumDigits, которая принимает 
// положительное целое число в качестве аргумента и возвращает 
// сумму его цифр.
//     // Пример использования:
//     console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 
// + 7 + 8 + 9)
function sumDigits(number) {
    // sum = 0;
    if (number < 10) {
        // console.log(number);
        return number
    } else {
        // console.log(number % 10);
        return number % 10 + sumDigits(Math.floor(number / 10))
    }
}

console.log(sumDigits(123));