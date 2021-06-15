var input = require('fs').readFileSync('stdin', 'utf8');
var result = input.split('\n');

var nome = result.shift();
var salfixo = parseFloat(result.shift());
var totalvendas = parseFloat(result.shift());

var comissao = (totalvendas * 0.15);
var saltotal = (salfixo + comissao);


console.log(`TOTAL = R$ ${saltotal.toFixed(2)}`);