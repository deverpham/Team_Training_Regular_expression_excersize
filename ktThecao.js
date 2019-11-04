
function check(text){
    var myRe = new RegExp(/^\d{4}-\d{4}-\d{4}-\d{4}$/);
    return myRe.test(text);
}
console.log(check("0428-1528-5156-1231"));