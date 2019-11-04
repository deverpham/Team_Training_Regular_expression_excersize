//git Bai 1
function checkWorld(str){
    var re = new RegExp(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/)
    console.log(re);   
    return re.test(str)
}
console.log(checkWorld('0434-3443-4443-4433a'))

//Bai 2

function checkWorldN(str){
    var re = new RegExp(/n{10,}/i)
    console.log(re);   
    return re.test(str)
}
console.log(checkWorldN('aaannnnnnnNNnnnnjjj'))

//Bai 3
function checkPhoneVN(str){
    var re = new RegExp(/^(\+84)[1-9][0-9]{8}$/)
    console.log(re);   
    return re.test(str)
}
console.log(checkPhoneVN('+84312345679'))

//Bài 4
function checkDate(str){
    var re = new RegExp(/^(3[0-1] | [12][0-9] | 0[0-9])\/(1[0-2]|0[1-9])\/[1-9][0-9]{3}$/)
    console.log(re);
    return re.test(str)
}
console.log(checkDate('01/02/1093'))

//Bài 5
function checkName(str){
    var re = new RegExp(/^[^0-9][A-z0-9_]{3,12}$/)
    console.log(re);
    return re.test(str)
}
console.log(checkName('kJHASskdh__'))