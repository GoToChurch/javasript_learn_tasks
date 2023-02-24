function Calculator() {
    this.read = function() {
        this.firstNumber = +prompt("Enter first number", 0);
        this.secondNumber = +prompt("Enter second number", 0);
    };

    this.sum = function() {
        return this.firstNumber + this.secondNumber
    };

    this.mul = function() {
        return this.firstNumber * this.secondNumber
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

