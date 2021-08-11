const input = require('fs').readFileSync('stdin', 'utf-8');

let sal = parseFloat(input);

const imposto1 = (1000 * 0.08) 
const imposto2 = (1500 * 0.18)

if (sal >= 0.00 && sal <= 2000.00) {
    console.log('Isento');
} else if (sal > 2000.00 && sal <= 3000.00) {
    sal = sal - 2000; 
    const imposto = sal * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`)
} else if (sal > 3000.00 && sal <= 4500.00) {
    sal = sal - 3000;
    const imposto = (sal * 0.18) + imposto1
    console.log(`R$ ${imposto.toFixed(2)}`);
} else if (sal > 4500.00) {
    sal = sal - 4500;
    const imposto = (sal * 0.28) + imposto1 + imposto2;
    console.log(`R$ ${imposto.toFixed(2)}`);
}