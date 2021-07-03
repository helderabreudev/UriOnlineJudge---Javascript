let input = require('fs').readFileSync('stdin', 'utf-8'); 

let dinheiro = parseFloat(input);

let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]; 
console.log(`NOTAS:`);

for (let valor of notas) {
    qtdNotas = parseInt(dinheiro / valor);
    console.log(`${qtdNotas} nota(s) de R$ ${valor.toFixed(2)}`);
    dinheiro = (dinheiro % valor)
}
console.log(`MOEDAS:`);

for (let valor of moedas) {
    qtdMoedas = parseInt(dinheiro / valor);
    console.log(`${qtdMoedas} moeda(s) de R$ ${valor.toFixed(2)}`);
    dinheiro = (dinheiro % valor) + 0.00001;
}
