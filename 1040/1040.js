var input = require("fs").readFileSync("stdin", "utf8");

const notas = input.split("\n"); 
const [N1, N2, N3, N4] = notas[0].split(' ')
const N_exame = parseFloat(notas[1]);

const media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7){
    console.log("Aluno aprovado.");
}
else if(media < 5){
    console.log("Aluno reprovado.");
}
else if(media >= 5 && media <= 6.9) {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + N_exame.toFixed(1));
    const media2 = (media + N_exame) / 2;
    if(media2 >= 5){
        console.log("Aluno aprovado.");

    }
    else if(media2 <= 4.9){
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + media2.toFixed(1));
}