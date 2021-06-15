var input = require('fs').readFileSync('stdin', 'utf8');
var result = input.split('\n');

var [p1, np1, v1] = result.shift().split(' ');
var [p2, np2, v2] = result.shift().split(' ');

var total1 = np1 * v1;
var total2 = np2 * v2;
var total = total1 + total2

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
