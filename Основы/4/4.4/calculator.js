let calculator = {
    read() {
        this.firstNumber = +prompt("Enter first number", 0);
        this.secondNumber = +prompt("Enter second number", 0);
    },

    sum() {
        return this.firstNumber + this.secondNumber
    },

    mul() {
        return this.firstNumber * this.secondNumber
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());