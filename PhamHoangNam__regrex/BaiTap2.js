//Kiểm tra chuỗi xuất hiện ít nhất 10 chữ N liên tiếp và không phân biệt hoa thường

function checkContinueString(str) {
    var re = new RegExp(/\.*n{10}/i)
    return re.test(str)
}

console.log(checkContinueString("annnNnnnnnn"))