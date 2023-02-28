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

function printListRecursion(list) {
    console.log(list.value);

    if (list.next) {
        printListRecursion(list.next);
    }
}

function printListCycle(list) {
    let currentList = list;

    while (currentList) {
        console.log(currentList.value);
        currentList = currentList.next;
    }
}

