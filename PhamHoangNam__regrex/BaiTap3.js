//Kiểm tra số điện thoại 10 số của việt nam bắt đầu bằng mã vùng +84

function checkPhoneNumber(str) {
    var re = new RegExp(/^(\+84)[1-9]{9}$/)
    return re.test(str)
}

console.log(checkPhoneNumber("+841234a6789"))