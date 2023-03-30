function pow(x, n) {
    return (n >= 1) ? x**n : 'Exponent must be greater than 0';
}

let x = prompt("Enter number to exponent");
let n = prompt("Enter exponent");

alert(pow(x, n))