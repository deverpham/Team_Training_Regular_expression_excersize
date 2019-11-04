function DateTime(){
    var dt= /^(0?[1-9]|[12]\d|3[01])-(0?[1-9]|1[0-2])-(\d{2}|\d{4})$/;
    console.log(dt.test('10-11-1999'));
}
DateTime();