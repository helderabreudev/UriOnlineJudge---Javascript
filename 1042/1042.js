let input = require('fs').readFileSync('stdin', 'utf-8');

let valores = input.split(' ');
let valorescorretos = input.split(' ');

function sortasc(a, b) {
    return (a - b)
}

valores.sort(sortasc)

for (count = 0; count < 3; count++) {
    console.log(parseInt(valores[count]));
}
console.log();
for (count = 0; count < 3; count++) {
    console.log(parseInt(valorescorretos[count]));
}
