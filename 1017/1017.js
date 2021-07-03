var input = require('fs').readFileSync('stdin', 'utf-8');

var [horas, km] = input.split('\n');
var distancia = horas * km;
var litros = distancia / 12;

console.log(litros.toFixed(3));
