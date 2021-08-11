const input = require('fs').readFileSync('stdin', 'utf-8')

const [c1, c2, c3] = input.split('\n')

if (c1[0] === 'v' && c2[0] === 'a' && c3[0] === 'c') {
    console.log('aguia');
} else if (c1[0] === 'v' && c2[0] === 'a' && c3[0] === 'o') {
    console.log('pomba');
} else if (c1[0] === 'v' && c2[0] === 'm' && c3[0] === 'o') {
    console.log('homem');
} else if (c1[0] === 'v' && c2[0] === 'm' && c3[0] === 'h') {
    console.log('vaca');
} else if (c1[0] === 'i' && c2[0] === 'i' && c3[2] === 'm') {
    console.log('pulga');
} else if (c1[0] === 'i' && c2[0] === 'i' && c3[2] === 'r') {
    console.log('lagarta');
} else if (c1[0] === 'i' && c2[0] === 'a' && c3[0] === 'h') {
    console.log('sanguessuga');
} else if (c1[0] === 'i' && c2[0] === 'a' && c3[0] === 'o') {
    console.log('minhoca');
}