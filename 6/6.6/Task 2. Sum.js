function sum(a) {
    let currentSum = a;

    function internalSum(b) {
        currentSum += b;
        return internalSum;
    }

    internalSum.toString = function() {
        return currentSum;
    };

    return internalSum;
}