input = require('fs').readFileSync('stdin', 'utf-8');

let intervalo = parseFloat(input);

if (intervalo >= 0 && intervalo <= 25.0000) {
    console.log(`Intervalo [0,25]`);
}
else if (intervalo > 25.0000 && intervalo <= 50.0000000) {
    console.log(`Intervalo (25,50]`);
}
else if (intervalo > 50.0000000 && intervalo <= 75.0000000) {
    console.log(`Intervalo (50,75]`);
}
else if (intervalo > 75.0000000 && intervalo <= 100.0000000) {
    console.log(`Intervalo (75,100]`);
}
else {
    console.log(`Fora de intervalo`);
}
