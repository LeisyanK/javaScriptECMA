const URL = 'https://jsonplaceholder.typicode.com/users';

const getData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
};

try {
    const data = await getData(URL);
    console.log(data);
} catch (error) {
    console.log(error);
}