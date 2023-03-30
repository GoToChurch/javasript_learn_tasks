function sumInput() {
    let numbers = [];
    let sum = 0;

    while (true) {
        let number = prompt("Enter your number");

        if (!isFinite(number) || number === '' || number == null) {
            break
        }

        numbers.push(+number)
    }

    for (let i of numbers) {
        sum += i;
    }

    return sum;
}

alert(sumInput());