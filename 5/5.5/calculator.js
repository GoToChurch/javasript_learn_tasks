function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.calculate = function(str) {
        let slitedString = str.split(' ');
        let firstNumber = +slitedString[0],
            operand = slitedString[1],
            secondNumber = +slitedString[2];

        if (!this.methods[operand] || isNaN(firstNumber) || isNaN(secondNumber)) {
            return null;
        }

        return this.methods[operand](firstNumber, secondNumber);
    }

    this.addMethod = function(operand, func) {
        this.methods[operand] = func
    }
}

let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate(" ** 8"))