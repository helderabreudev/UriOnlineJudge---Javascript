const input = require('fs').readFileSync('stdin', 'utf-8'); 
const valores = input.split('\n');

function positivosMedia() {
    let positivos = 0;
    let soma = 0
    for (let i in valores) { 
        if (parseFloat(valores[i]) > 0) {
            positivos++;
            soma += parseFloat(valores[i]);       
        } 
    }
    let media = soma / positivos
    return console.log(`${positivos} valores positivos`) + console.log(media.toFixed(1));;
}
positivosMedia()
