var input = require("fs").readFileSync("stdin", "utf8");

var notas = input.split(" "); 
var exame = input.split("\n");

var N1 = parseFloat(notas.shift());
var N2 = parseFloat(notas.shift());
var N3 = parseFloat(notas.shift());
var N4 = parseFloat(notas.shift());

const N_exame = parseFloat(exame.pop());
console.log(N_exame);

/*
var media;
media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4) / 10;

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
*/