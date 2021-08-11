let input = require('fs').readFileSync('stdin', 'utf-8');

const valores = input.split(' ');
const inicio = parseInt(valores.shift());
const fim = parseInt(valores.shift());

if (inicio === fim) {
console.log(`O JOGO DUROU 24 HORA(S)`);
} else if(inicio < fim) {
    const duracao = (fim - inicio);
    console.log(`O JOGO DUROU ${duracao} HORA(S)`);
} else if(inicio > fim) {
    const duracao = ((24 + fim) - inicio);
    console.log(`O JOGO DUROU ${duracao} HORA(S)`);
}