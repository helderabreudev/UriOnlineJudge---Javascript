var input = require('fs').readFileSync('stdin', 'utf8');
var resposta = input.split('\n');

var A = parseFloat(resposta.shift());
var B = parseFloat(resposta.shift());
var C = parseFloat(resposta.shift());

var MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);

