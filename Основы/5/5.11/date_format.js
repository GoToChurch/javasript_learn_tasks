function formatDate(date) {
    let now = new Date();
    let diff = now - date;

    if (diff < 1000) {
        return 'Right now';
    } else if (diff < (1000 * 60)) {
        return `${Math.round(diff / 1000)} seconds ago`;
    } else if (diff < (1000 * 60 * 60)) {
        return `${Math.round(diff / 60000)} minutes ago`;
    } else {
        let dateArray = [
            '0' + date.getDate(),
            '0' + date.getMonth(),
            '' + date.getFullYear(),
            '0' + date.getHours(),
            '0' + date.getMinutes()
        ].map(item => item.slice(-2))

        return dateArray.slice(0, 3).join('.') + ' ' + dateArray.slice(-2).join(':')
    }
}

console.log(formatDate(new Date(new Date - 86400 * 1000)))