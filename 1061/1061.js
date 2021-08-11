let input = require('fs').readFileSync('stdin', 'utf-8');

let datas = input.split('\n');
let diaInicial = datas.shift().replace(/\D/gim, '');
let horarioInicial = datas.shift();
let diaFinal = datas.shift().replace(/\D/gim, '');
let horarioFinal = datas.shift();
let [hora1, minuto1, segundo1] = horarioInicial.split(' : ')
let [hora2, minuto2, segundo2] = horarioFinal.split(' : ')

let dias = diaFinal - diaInicial;
let horas = hora2 - hora1;

if (horas < 0) {
    horas += 24;
    dias -= 1
}

let minutos = minuto2 - minuto1
if (minutos < 0) {
    minutos += 60;
    horas -= 1;
}

let segundos = segundo2 - segundo1
if (segundos < 0) {
    segundos += 60;
    minutos -= 1;
}

if (horas < 0) {
    horas += 24;
    dias -= 1
}

if (minutos < 0) {
    minutos += 60;
    horas -= 1;
}

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);