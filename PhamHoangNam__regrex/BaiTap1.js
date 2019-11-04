//Viết chuỗi regex kiểm tra thẻ cào: xxxx-xxxx-xxxx-xxxx với x là các số từ 0 đến 9

function checkCard(str) {
    var re = new RegExp(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/)
    return re.test(str)
}

console.log(checkCard("1223-4563-1233-4452"))