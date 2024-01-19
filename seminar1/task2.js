// Задание 2(Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив 
// чисел в качестве аргумента и возвращает новый массив,
//     содержащий только четные числа.
const getEvenNumbers = (arr) => 
    // const arrNew = arr.map((elem) => {
    //     if (elem % 2 === 0) {
    //         return elem;
    //     } 
    //     // else {
    //     //     arr.splice(elem, 1);
    //     // }
    // });
    // return arrNew;
    arr.filter((elem) => elem % 2 == 0);

console.log(getEvenNumbers([2,5,5,4,7,3]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает 
// массив чисел в качестве аргумента и возвращает среднее значение 
// этих чисел.
const calculateAverage = (arr) => 
    arr.reduce( (sum, elem) => sum + elem, 0) / arr.length;
// const calculateAverage = (arr) => {
//     return arr.reduce((sum, elem) => sum + elem, 0) / arr.length;
// }

console.log(calculateAverage([2, 5, 5, 4, 7, 3]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в 
// качестве аргумента и возвращает новую строку, в которой первая 
// буква каждого слова является заглавной.
const text = 'привет, дорогой друг.';
const capitalizeFirstLetter = (string) => {
    const words = string.split(' ');
    let newWords = words.map( (elem) => elem.replace(elem[0], elem[0].toUpperCase()));
    return newWords.join(' ');
}

// const capitalizeFirstLetter2 = (string) => {
//     return string.replace(/(^|\s)\S/g, (char) => {
//         return char.toUpperCase();
//     });
// }
const capitalizeFirstLetter2 = (string) => 
    string.replace(/(^|\s)\S/g, (char) => char.toUpperCase());

console.log(capitalizeFirstLetter(text));
console.log(capitalizeFirstLetter2(text));