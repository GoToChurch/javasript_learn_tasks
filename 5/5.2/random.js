function random(min, max) {
    let randomNumber;

    do {
        randomNumber = Math.random() * max
    }
    while (randomNumber <= min);

    return randomNumber;
}

alert(random(1, 10))