input = require('fs').readFileSync('stdin', 'utf-8');

var dias = parseInt(input);

let ano = 365;
var tempoano = parseInt(dias / ano);
console.log(`${tempoano} ano(s)`);
dias = (dias % ano);

let mes = 30;
var tempomes = parseInt(dias / mes);
console.log(`${tempomes} mes(es)`);
dias = (dias % mes);

let dia = 1;
var tempodia = (dias / dia)
console.log(`${tempodia} dia(s)`);