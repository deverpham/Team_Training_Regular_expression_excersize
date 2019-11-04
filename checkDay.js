var pattenr = new RegExp(/^([0-2][0-9])|(30)|(31)\/(([0][1-9])|(11)|(12))\/([0-9]{4})$/);
const string = '31/11/2547';
console.log(pattenr.test(string));
