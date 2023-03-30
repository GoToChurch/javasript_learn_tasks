function extractCurrencyValue(str) {
    let currencyValue = str.slice(1)

    return isFinite(currencyValue) ? +currencyValue : null
}

console.log(extractCurrencyValue("$1222"))