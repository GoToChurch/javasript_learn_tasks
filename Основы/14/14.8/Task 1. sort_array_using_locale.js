let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

function localeCompare(str1, str2) {
    let collator = new Intl.Collator();
    return collator.compare(str1, str2)
}

animals.sort(localeCompare);

console.log(animals);