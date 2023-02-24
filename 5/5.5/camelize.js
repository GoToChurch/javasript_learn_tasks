function camelize(str) {
    return str
        .split('-')
        .map((item, index) => index == 0 ? item : ucFirst(item))
        .join('');
}

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(camelize("-background-color"))