function getMaxSubSumOn2(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sliceSum = 0;
        for (let j = i; j < arr.length; j++) {
            sliceSum += arr[j];
            sum = Math.max(sum, sliceSum);
        }
    }

    return sum;
}

function getMaxSubSumOn(arr) {
    let resultSum = 0;
    let currentSum = 0;

    for (let number of arr) {
        currentSum += number;
        resultSum = Math.max(resultSum, currentSum);

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return resultSum;
}

console.log(getMaxSubSumOn2([1, 2, -3, 4]));