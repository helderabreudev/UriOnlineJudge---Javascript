input = require('fs').readFileSync('stdin', 'utf-8');

const [A, B, C] = input.split(' ');

const delta = (B ** 2) - (4 * A * C);
const R1 = (-Math.abs(B) + Math.sqrt(delta)) / (2 * A)
const R2 = (-Math.abs(B) - Math.sqrt(delta)) / (2 * A)

if (delta < 0 || A <= 0) {
    console.log(`Impossivel calcular`);
}
else {
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}
