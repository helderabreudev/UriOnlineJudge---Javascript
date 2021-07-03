var segundos = require('fs').readFileSync('stdin', 'utf-8');

var horas = parseInt(segundos/3600);
segundos = segundos % 3600;

var minutos = parseInt(segundos/60);
segundos = segundos % 60;

console.log(`${horas}:${minutos}:${segundos}`);