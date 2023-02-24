function readNumber() {
    while (true) {
        number = prompt("Enter your number")

        if (number === '' || number === null) {
            return null;
        }

        if (isFinite(number)) {
            return +number
        }
    }
}

alert(readNumber())