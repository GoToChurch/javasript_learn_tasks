function getDateAgo(date, days) {
    const msInDay = 86400000;

    return new Date(+date - (days * msInDay));
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 365));
