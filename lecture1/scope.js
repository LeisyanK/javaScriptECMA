const createCounter = () => {
    let counter = 0;
    // console.log('bbb '+counter);
    return () => {
        // console.log(counter);
        return ++counter;
    }
}
// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3
counter1(); // 4
//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 5