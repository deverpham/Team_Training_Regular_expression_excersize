//Kiểm tra định dạng ngày tháng năm  DD/MM/YYYY. 


// 28 29 là tháng 2 ([1-2][0-9] || [0][1-9]) / (2) / 
// 30 là tháng 4 6 9 11
// 31 là tháng 1 3 7 8 10 12
function checkDate(str) {
    var re = new RegExp(/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/)
    return re.test(str)
}

console.log(checkDate("01/04/2019"))