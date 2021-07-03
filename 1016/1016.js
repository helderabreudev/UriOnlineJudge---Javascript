input = require('fs').readFileSync('stdin', 'utf-8');

let distancia = parseInt(input);
let minutos = distancia * 2;

console.log(`${minutos} minutos`);
