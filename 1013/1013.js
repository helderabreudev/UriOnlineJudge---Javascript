var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = (input.split(' ')).map(item => parseInt(item));

var maiorAB = ((A+B) + Math.abs(A-B)) / 2;
var maiorXC = ((C+maiorAB) + Math.abs(C-maiorAB)) / 2;

console.log(`${maiorXC} eh o maior`);