function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now);

    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0);

    return (+tomorrow - +now) / 1000;
}

console.log(getSecondsToTomorrow())