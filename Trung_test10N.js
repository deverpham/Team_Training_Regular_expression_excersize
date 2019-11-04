function test10N(){
    var n=/n{10,}/i;
    console.log(n.test('nnnnnnnnnnnnnnnnnnnn'));
}
test10N();