function Email(){
    var email= /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    console.log(email.test('voquoctrung1011@gmail.com'));
}
Email();