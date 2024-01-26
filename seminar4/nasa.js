const URL = 'https://api.nasa.gov/planetary/apod?count=10&api_key=DEMO_KEY'; 
const body = document.querySelector('body');
console.log(body);

const getData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
};

try {
    const data = await getData(URL);
    console.log(data);
    data.forEach(element => {
        body.insertAdjacentHTML('beforeend', `
        <figure>
            <img src="${element.url}">
            <figcaption>
                ${element.explanation}
            </figcaption>
        </figure>
        `);
    });
} catch (error) {
    console.log(error);
}