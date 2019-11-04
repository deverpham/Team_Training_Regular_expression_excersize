function testName(){
    var name =/^\D[a-z0-9_ ]{4,12}$/i;
    console.log(name.test('Vqt_1011'));
}
testName();