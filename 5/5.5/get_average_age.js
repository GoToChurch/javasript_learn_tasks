let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    return arr.slice().map(item => item.age).reduce((sum, current) => sum + current) / arr.length;
}

console.log(getAverageAge(arr))