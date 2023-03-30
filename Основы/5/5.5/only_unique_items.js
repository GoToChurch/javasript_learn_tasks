function unique(arr) {
    let uniqeStringsArray = [];

    for (let item of arr) {
        if (!uniqeStringsArray.includes(item)) {
            uniqeStringsArray.push(item);
        }
    }

    return uniqeStringsArray;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));