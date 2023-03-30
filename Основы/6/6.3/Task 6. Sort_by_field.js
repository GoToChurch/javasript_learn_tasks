function byField(fieldName) {
    return function (firstObject, secondObject) {
        return firstObject[fieldName] > secondObject[fieldName] ? 1 : -1;
    }
}