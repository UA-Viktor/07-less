// Замыкание
// Из функуции можно вызвать функцию

// const fnA = function (parameter) {
//     const innerVariable = 'Значение внут. переменной функции fnA';

//     const innerFunction = function () {
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA();
// console.log(fnB);







const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

// makeDish('Mango', 'Пирожок');
// makeDish('Mango', 'Омлет');
// makeDish('Mango', 'Чай');

// makeDish('Poly', 'Котлеты');
// makeDish('Poly', 'Супик');
// makeDish('Poly', 'Кофе');









// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//     }
//     return makeDish;
// };
 
// const mango = makeSheff('Mango');
// mango('Пирожок');
// mango('Омлет');

// const poly = makeSheff('Poly');
// poly('Котлеты');
// poly('Супик');








// Окгруглятор

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

// console.log(floatingPoint);
// console.log(someInt);
// console.log(withDecimals);


// const number1 = 3.6678;
// const number2 = 4.1234;
// console.log(Number(number1.toFixed(2)));
// console.log(Number(number2.toFixed(2)));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// console.log(rounder(3.6678, 2));
// console.log(rounder(4.1234, 3));

const rounder2 = rounder(2);
const rounder3 = rounder(3);

// console.log(rounder2(3.6678));
// console.log(rounder3(4.1234));







// Приватные данные и функции

const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;
    const changeBy = function (amount) {
        salary += amount;
    };

    return {
        raise(amount) {
            changeBy(amount);
        },
        lower(amount) {
            changeBy(amount);
        },
        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Viktor', 5000);
console.log(salaryManager.current());