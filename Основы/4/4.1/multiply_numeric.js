function multiplyNumeric(obj) {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2
        }
    }
}

function isNumeric(string) {
    return !isNaN(+string)
}