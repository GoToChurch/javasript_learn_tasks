function aclean(arr) {
    let map = new Map();

    for (let item of arr) {
        let sortedWord = item.toLowerCase().split('').sort().join();
        map.set(sortedWord, item);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

