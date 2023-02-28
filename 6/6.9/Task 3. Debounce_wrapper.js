function debounce(func, ms) {
    let isCooldown = false;

    return function(...args) {
        if (isCooldown) {
            return;
        }

        func.call(this, args);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    }
}
