var input = require("fs").readFileSync("stdin", "utf8");

var result = input.split("\n");

var A = parseInt(result.shift());
var B = parseInt(result.shift());

var X = A + B

console.log("X = " + X);
