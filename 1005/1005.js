var input = require('fs').readFileSync('stdin', 'utf8');
var resposta = input.split('\n');

var A = parseFloat(resposta.shift());
var B = parseFloat(resposta.shift());

var MEDIA = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);

