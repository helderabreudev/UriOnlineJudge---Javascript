var input = require('fs').readFileSync('stdin', 'utf-8');

let notas = input.split(' ');

let N1 = parseFloat(notas.shift());
let N2 = parseFloat(notas.shift());
let N3 = parseFloat(notas.shift());
let N4 = parseFloat(notas.shift());
let notaExame = parseFloat(notas.pop());

let media = (N1 * 2 + N2 * 3  + N3 * 4 + N4 * 1) / 10;
let mediafinal = parseFloat((media + notaExame) / 2);

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
    console.log(`Aluno aprovado.`);
} else if(media < 5.0) {
    console.log(`Aluno reprovado.`);
} else if (media >= 5.0 && media <= 6.9) {
    console.log(`Aluno em exame.`);
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    if (mediafinal >= 5.0) {
        console.log(`Aluno aprovado.`);
        console.log(`Media final: ${mediafinal}`);
    }
    else {
        console.log(`Aluno reprovado.`);
        console.log(`Media final: ${mediafinal}`);
    }
}

