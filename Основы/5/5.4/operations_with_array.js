let styles = ["Jazz", "Blues",];
styles.push("Rock'n'Roll");
styles[(Math.floor((styles.length - 1) / 2))] = "Classic";
console.log(styles.shift());
styles.unshift("Rap", "Raggy");

console.log(styles);