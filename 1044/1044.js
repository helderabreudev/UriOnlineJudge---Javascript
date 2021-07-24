const input = require('fs').readFileSync('stdin', 'utf-8');

const array = input.split(' ');
const n1 = parseInt(array.shift())
const n2 = parseInt(array.shift())

if (n1 % n2 == 0 || n2 % n1 == 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}