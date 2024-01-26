// const myPromise = new Promise((resolve, reject) => {
//     // Промис будет находиться в состоянии ожидания - Pending
//     // Выполняются асинхронные операции
//     // Должен выполниться либо метод resolve (если запрос выполнился успешно), либо reject (если получили ошибку)
// });

// myPromise
//     .then( (value) => {
//         // действие в случае положительно выполнения промиса
//         // value значение, которое будет передаваться в вызове функции resolve}
//     })
//     .then( (json) => {
//         // Обрабатываем данные от сервера
//     })
//     .catch( (error) => {
//         // Обрабатываем ошибку
//     });

const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)      // fetch - это промис-функция
    .then( (response) => response.json()) // console.log(response));
    .then( (json) => console.log(json))
    .catch( (error) => console.error(error.message)) // reject

// Упрощение
const getData = (URL) => 
    new Promise((resolve, reject) => {
        fetch(URL)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error));
});

getData(URL)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));