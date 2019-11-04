
function checkCard(str) {
    var re = new RegExp(/^([a-zA-Z0-9\-_])+@([a-zA-Z0-9]+\.)+([a-zA-Z0-9]{2,5})$/)
    return re.test(str)
}

console.log(checkCard("nam@gmail.commm"))