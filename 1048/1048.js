const input = require('fs').readFileSync('stdin', 'utf-8')

const sal = parseFloat(input);

const input = require('fs').readFileSync('stdin', 'utf-8')

const sal = parseFloat(input);

if (sal >= 0 && sal <= 400.00) {
    const novoSal = sal + sal * 0.15
    const reajuste = novoSal - sal
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
} else if (sal > 400.00 && sal <= 800.00) {
    const novoSal = sal + sal * 0.12;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
} else if (sal > 800.00 && sal <= 1200.00) {
    const novoSal = sal + sal * 0.10;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
} else if (sal > 1200.00 && sal <= 2000.00) {
    const novoSal = sal + sal * 0.07;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
} else if (sal > 2000.00) {
    const novoSal = sal + sal * 0.04;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}



const input = require('fs').readFileSync('stdin', 'utf-8')

const sal = parseFloat(input);

if (sal >= 0 && sal <= 400.00) {
    const novoSal = sal + sal * 0.15
    const reajuste = novoSal - sal
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
} else if (sal > 400.00 && sal <= 800.00) {
    const novoSal = sal + sal * 0.12;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
} else if (sal > 800.00 && sal <= 1200.00) {
    const novoSal = sal + sal * 0.10;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
} else if (sal > 1200.00 && sal <= 2000.00) {
    const novoSal = sal + sal * 0.07;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
} else if (sal > 2000.00) {
    const novoSal = sal + sal * 0.04;
    const reajuste = novoSal - sal;
    console.log(`Novo salario: ${novoSal.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}



