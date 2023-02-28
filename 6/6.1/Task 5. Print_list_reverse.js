let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseListRecursion(list) {
    if (list.next) {
        printReverseListRecursion(list.next);
    }

    console.log(list.value);

}

function printReverseListCycle(list) {
    let currentList = list;
    let valuesArray = [];

    while (currentList) {
        valuesArray.push(currentList.value);
        currentList = currentList.next;
    }

    valuesArray.reverse().map(item => console.log(item))
}

console.log(printReverseListCycle(list))