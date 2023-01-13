var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

rl.on("line", function(line) {
    lines.push(line)
});

rl.on("close", function() {
    solve(lines)
});

function solve(lines) {
    var tmp = lines[0].split(' ')
    console.log(Number(tmp[0]) + Number(tmp[1]))
}