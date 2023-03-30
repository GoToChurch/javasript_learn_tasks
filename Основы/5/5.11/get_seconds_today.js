function getSecondsToday() {
    let now = new Date();
    let todayAtZero = new Date(now);

    todayAtZero.setHours(0, 0, 0);

    return (+now - +todayAtZero) / 1000;
}

console.log(getSecondsToday())