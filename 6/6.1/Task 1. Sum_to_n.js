function sumToRecursion(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumToRecursion(n - 1)
    }
}

function sumToCycle(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function sumToProgression(n) {
    return (1 + n) / 2 * n;
}
console.log(sumToProgression(100))