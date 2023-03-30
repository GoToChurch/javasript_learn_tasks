function randomInteger(min, max) {
    let randomNumber;

    do {
        randomNumber = Math.random() * max
    }
    while (randomNumber <= min);

    return Math.round(randomNumber);
}

alert(randomInteger(1, 5))