var input = require('fs').readFileSync('stdin', 'utf8');

var r1 = parseFloat(input);

var n = 3.14159;
var r2 = (r1 * r1);

var A = (n * r2)

console.log(`A=${A.toFixed(4)}`); 
