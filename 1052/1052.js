var input = require('fs').readFileSync('stdin', 'utf8');

let mes = parseInt(input);
const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

switch (mes) {
    case 1: console.log(meses[0]);
        break;
    case 2: console.log(meses[1]);
        break;
    case 3: console.log(meses[2]);
        break;
    case 4: console.log(meses[3]);
        break;
    case 5: console.log(meses[4]);
        break;    
    case 6: console.log(meses[5]);
        break;
    case 7: console.log(meses[6]);
        break;
    case 8: console.log(meses[7]);
        break;
    case 9: console.log(meses[8]);
        break;
    case 10: console.log(meses[9]);
        break;
    case 11: console.log(meses[10]);
        break;
    case 12: console.log(meses[11]);
        break;
}