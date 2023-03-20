function* pseudoRandom(seed) {
    let current = seed;

    while (true) {
        current *= 16807 % 2147483647;
        yield current;
    }
}