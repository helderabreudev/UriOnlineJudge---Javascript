var input = require('fs').readFileSync('stdin', 'utf8');
var result = input.split('\n');

var id = parseInt(result.shift());
var horas = parseInt(result.shift());
var valorhora = parseFloat(result.shift());

var sal = (horas * valorhora) 

console.log(`NUMBER = ${id}`);
console.log(`SALARY = U$ ${sal.toFixed(2)}`);