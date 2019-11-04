function testCard(){
    var test= /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    console.log(test.test('1234-4321-1122-2332'))
}
testCard();