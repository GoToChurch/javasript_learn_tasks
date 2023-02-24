function getWeekDay(date) {
    let day = date.getDay();

    return day === 0 ? 7 : day;
}

console.log(getWeekDay(new Date(2012, 0, 1)));