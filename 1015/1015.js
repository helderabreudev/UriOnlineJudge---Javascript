input = require('fs').readFileSync('stdin', 'utf-8');

let linhas = input.split('\n');
let [x1, y1] = linhas.shift().split(' ')
let [x2, y2] = linhas.shift().split(' ');

let distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

console.log(distancia.toFixed(4));

