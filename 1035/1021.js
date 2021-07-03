var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split(' ');

var A = parseInt(valores.shift()); 
var B = parseInt(valores.shift()); 
var C = parseInt(valores.shift()); 
var D = parseInt(valores.shift()); 

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && (A % 2 == 0)) {
    console.log(`Valores aceitos`)
}
else {
    console.log(`Valores não aceitos`)
}