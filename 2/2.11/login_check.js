let login = prompt("Enter your login", [""])

if (login == "Admin") {
    let password = prompt("Enter your password", [""])

    if (password == "I'm in charge") {
        alert("Hello!")
    } else if (password == null || password == "") {
        alert("Canceled")
    } else {
        alert("Password is incorrect")
    }
} else if (login == "" || login == null) {
    alert("Canceled")
} else {
    alert("I don't know you")
}