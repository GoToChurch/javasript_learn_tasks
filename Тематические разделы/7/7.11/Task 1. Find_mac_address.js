let regexp = /[0-9a-f]{2}(:[0-9a-f]{2}){5}/gi;

console.log(regexp.test('01:32:54:67:89:AB'));

console.log(regexp.test('0132546789AB'));

console.log(regexp.test('01:32:54:67:89'));

console.log(regexp.test('01:32:54:67:89:ZZ'))