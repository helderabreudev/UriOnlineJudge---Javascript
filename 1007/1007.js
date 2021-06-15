var input = require('fs').readFileSync('stdin', 'utf8');
var result = input.split('\n');

var a = parseInt(result.shift())
var b = parseInt(result.shift())
var c = parseInt(result.shift())
var d = parseInt(result.shift())

var DIFF = (a * b - c * d); 

console.log(`DIFERENCA = ${DIFF}`);
