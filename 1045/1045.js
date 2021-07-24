const input = require('fs').readFileSync('stdin', 'utf-8');

const lados = input.split(' ');

lados.sort((a, b) => b - a);

const A = parseFloat(lados[0]);
const B = parseFloat(lados[1]);
const C = parseFloat(lados[2]);

if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
 } else if(A**2 === B**2 + C**2) {
    console.log('TRIANGULO RETANGULO');
 } else if (A**2 > B**2 + C**2) {
     console.log('TRIANGULO OBTUSANGULO');
 } else if (A**2 < B**2 + C**2) {
    console.log('TRIANGULO ACUTANGULO');     
} 

if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO');
} else if (A === B || A === C || B === C) {
    console.log('TRIANGULO ISOSCELES');
}