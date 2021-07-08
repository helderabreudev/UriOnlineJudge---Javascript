const input = require("fs").readFileSync("stdin", "utf8");

const [X, Y] = input.split(' ');

if (X > 0.0 && Y > 0.0) {
    console.log("Q1");
} 
else if (X < 0.0 && Y > 0.0) {
    console.log("Q2");
}
else if (X < 0.0 && Y < 0.0) {
    console.log("Q3");
}
else if (X > 0.0 && Y < 0.0) {
    console.log("Q4");
}
else if (X == 0.0 && Y != 0.0) {
    console.log("Eixo Y");
}
else if (X != 0.0 && Y == 0.0) {
    console.log("Eixo X");
} else {
    console.log("Origem");
}
