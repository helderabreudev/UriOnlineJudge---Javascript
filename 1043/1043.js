const input = require('fs').readFileSync('stdin', 'utf-8')

const valores = input.split(' ');
const A = parseFloat(valores.shift());
const B = parseFloat(valores.shift());
const C = parseFloat(valores.shift());

if (A + B > C && A + C > B && B + C > A) {
    const perimetro = parseFloat(A + B + C);
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {  
        const area = (((B + A)*C) / 2)
        console.log(`Area = ${area.toFixed(1)}`);
}


