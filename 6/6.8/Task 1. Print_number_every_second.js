function printNumbersInterval(from, to) {
    let currentNumber = from;

    let interval = setInterval(function() {
        console.log(currentNumber);

        if (currentNumber === to) {
            clearInterval(interval);
        } else {
            currentNumber ++;
        }
    }, 1000);
}

function printNumberTimeout(from, to) {
    let currentNumber = from;

    let timeout = setTimeout(function count() {
        console.log(currentNumber);

        if (currentNumber === to) {
            clearTimeout(timeout);
        } else {
            currentNumber ++;
            setTimeout(count, 1000);
        }
    }, 1000);
}

printNumberTimeout(1, 6)