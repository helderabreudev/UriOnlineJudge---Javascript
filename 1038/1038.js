var input = require('fs').readFileSync('stdin', 'utf-8');

let [id, qtd] = input.split(' ');

if (id == 1) {
    let preco = (4.00 * qtd)
    console.log(`Total: R$ ${preco.toFixed(2)}`);
}  else if (id == 2) {
    let preco = (4.50 * qtd)
    console.log(`Total: R$ ${preco.toFixed(2)}`);
} else if (id == 3) {
    let preco = (5.00 * qtd)
    console.log(`Total: R$ ${preco.toFixed(2)}`);
} else if (id == 4) {
    let preco = (2.00 * qtd)
    console.log(`Total: R$ ${preco.toFixed(2)}`);
} else if (id == 5) {
    let preco = (1.50 * qtd)
    console.log(`Total: R$ ${preco.toFixed(2)}`);
}

