let salaries = {
    "John": 100,
    "Pete": 100,
    "Mary": 100
};

function topSalary(salaries) {
    let maxSalary = 0;
    let topEmployee = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topEmployee = name;
        }
    }

    return topEmployee;
}

console.log(topSalary(salaries))