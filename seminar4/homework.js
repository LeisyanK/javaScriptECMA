// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API(https://jsonplaceholder.typicode.com/users) и отобразить их на странице.

// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

let URL = 'https://jsonplaceholder.typicode.com/users';
const tag = document.querySelector('.container');

const getData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
};

try {
    const data = await getData(URL);
    console.log(data);
    data.forEach(element => {
        tag.insertAdjacentHTML('beforeend', `
        <div class="block">
            <h1>${element.name}</h1>
            <h2>${element.username}</h2>
            <p class="text">${element.email}</p>
            <div>
                <h3>Address</h3>
                <p class="text">${element.address.street}</p>
                <p class="text">${element.address.suite}</p>
                <p class="text">${element.address.city}</p>
                <p class="text">${element.address.zipcode}</p>
                <h3>Geo</h3>
                <p class="text">${element.address.geo.lat}</p>
                <p class="text">${element.address.geo.lng}</p>
            </div>
            <p>Telephone: ${element.phone}</p>
            <p>Website: <a href="${element.website}" class="site">${element.website}</a></p>
            <div>
                <h2>Company</h2>
                <p class="text">${element.company.name}</p>
                <p class="text">${element.company.catchPhrase}</p>
                <p class="text">${element.company.bs}</p>
            </div>
        </div>
        `);
    });    
} catch (error) {
    console.log(error);
}



URL = 'https://dog.ceo/api/breeds/image/random';
let count = 0;

const getDog = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    // return data;
    console.log(data);
    tag.insertAdjacentHTML('beforeend', `
    <div class="block">
        <img src="${data.message}">
    </div>
    `);
};

function setInterval(func, interval, ...param) {
// const setInterval = (func, interval, ...param) => {
    setTimeout(() => {
        const data = func(...param);
        // count++;
        // if (count >= 10) { clearInterval(count); }
        // console.log(setInterval);
        console.log(setInterval(func, interval, ...param));
        // let timerId = setInterval(func, interval, ...param);
        // console.log(timerId);
        return count++;
    }, interval);
};

try {
    let timerId = setInterval(getDog, 3000, URL);

    console.log(timerId);
    // clearInterval(setInterval(getData, 3000, URL));

    // setTimeout(function () {
    //     clearInterval(setInterval(getData, 3000, URL));
    // }, 15000);
    // clear

} catch (error) {
    console.log(error);
}