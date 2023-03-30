function parse(expr) {
    const pattern = /(?<first>-?\d+(\.\d+)?)\s*(?<operator>[-+*/])\s*(?<second>-?\d+(\.\d+)?)/g;
    let results = expr.matchAll(pattern);

    let resArray = [];

    for(let result of results) {
        resArray.push(result.groups.first);
        resArray.push(result.groups.operator);
        resArray.push(result.groups.second);
    }

    return resArray;
}

let [a, op, b] = parse("-6 / 3");

console.log(a, op, b)