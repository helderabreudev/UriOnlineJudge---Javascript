let input = require('fs').readFileSync('stdin', 'utf-8');
const valores = input.split(' ');

const horaInicial = parseInt(valores.shift());
const minutoInicial = parseInt(valores.shift());
const horaFinal = parseInt(valores.shift());
const minutoFinal = parseInt(valores.shift());

totalMinutosIniciais = (horaInicial * 60) + minutoInicial;
totalMinutosFinais = (horaFinal * 60) + minutoFinal;

if (totalMinutosIniciais === totalMinutosFinais) {
console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
} else if(totalMinutosIniciais < totalMinutosFinais) {
    const duracao = (totalMinutosFinais - totalMinutosIniciais);
    const horas = parseInt(duracao / 60);
    const minutos = duracao % 60;
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
} else if(totalMinutosIniciais > totalMinutosFinais) {
    const duracao = ((1440 + totalMinutosFinais) - totalMinutosIniciais);
    const horas = parseInt(duracao / 60);
    const minutos = duracao % 60;
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
}

