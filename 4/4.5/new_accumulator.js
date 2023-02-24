function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        let valueToAdd = +prompt("Enter value to add", 0)
        this.value += valueToAdd;
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);