var input = require('fs').readFileSync('stdin', 'utf8');

var r = parseInt(input) ** 3; /* ** = potencia */
var pi = 3.14159
var volume = ((4/3.0) * pi * r);

console.log(`VOLUME = ${volume.toFixed(3)}`);



