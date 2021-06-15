var input = require('fs').readFileSync('stdin', 'utf-8');

var input = input.split(' ');
var A = parseFloat(input.shift());
var B = parseFloat(input.shift());
var C = parseFloat(input.shift());
var pi = 3.14159

var areatriangulo = ((A*C)/2);
var areacirculo = (pi * (C ** 2));
var areatrapezio = (((A + B) * C) / 2);
var areaquadrado = (B * B);
var arearetangulo = (A * B);

console.log(`TRIANGULO: ${areatriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areacirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areatrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaquadrado.toFixed(3)}`);
console.log(`RETANGULO: ${arearetangulo.toFixed(3)}`);
