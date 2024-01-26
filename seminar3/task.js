// 1. Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение".Класс должен иметь публичные методы "сложить", "вычесть", "умножить" и "разделить", которые будут изменять значение текущего значения в соответствии с выбранной операцией.Также класс должен иметь статическое поле "точность", которое будет задавать количество знаков после запятой при выводе результата.
class Calculator {
    #lastResult = 0;      // приватное поле, недоступно извне без getter и setter
    #currentValue = 0;
    static #precision = 2;  // статичное поле доступно только внутри класса, у наследников недоступно

    add(value) {
        this.#lastResult = this.#currentValue;
        this.#currentValue += value;
    }

    sub(value){
        this.#lastResult = this.#currentValue;
        this.#currentValue -= value;
    }

    mult(value) {
        this.#lastResult = this.#currentValue;
        this.#currentValue *= value;
    }

    div(value) {
        if (value === 0) {
            throw new Error("Деление на ноль!!!");
        }
        this.#lastResult = this.#currentValue;
        this.#currentValue /= value;
    }

    getResult() {
        return Number(this.#currentValue.toFixed(Calculator.#precision)); // через this к статическому объекту не постучаться, можно только через сам класс Calculator
    }
    getLastResult() {
        return this.#lastResult;
    }

    // constructor(last) {
    //     this.#lastResult = last;
    // }
    // getLast() {
    //     return this.#lastResult;
    // }
}

const calculator = new Calculator(50);
console.log(calculator);
calculator.add(6);
console.log(calculator);
calculator.sub(3);
console.log(calculator);
calculator.mult(4);
console.log(calculator);
calculator.div(9);
console.log(calculator);
// calculator.div(0);
// console.log(calculator);
console.log(calculator.getResult());
console.log(calculator.getLastResult());

// console.log(calculator.getLast());
// console.log(calculator.#last);  // ошибка получения приватного поля
