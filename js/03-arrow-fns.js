// Стрелочные функции:
// - Обявление
// - Явный и не явный возврат
// - Аргументы
// - Неявный возврат объекта


const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}
 
console.log(add(5, 10, 15));


const addArrow1 = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
}

const addArrow2 = (a, b, c) => a + b + c;

