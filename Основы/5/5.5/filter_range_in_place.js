function filterRangeInPlace(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (currentNumber < min || currentNumber > max) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4))