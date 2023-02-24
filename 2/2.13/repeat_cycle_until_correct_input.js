let userNumber;
while (userNumber = prompt("Enter your number")) {
    if (+userNumber > 100 || userNumber == null) {
        break
    }
}