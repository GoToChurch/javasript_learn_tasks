function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, current) => sum + current, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));