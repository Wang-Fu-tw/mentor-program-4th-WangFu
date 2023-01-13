var readline = require("readline")
var rl = readline.createInterface({
    input: process.stdin
})

var lines = []

rl.on("line", function(line) {
    lines.push(line)
})

rl.on("close", function() {
    solve(lines)
})

function solve(lines) {
    for(let i=0; i<lines.length; i++) {
        if(lines[i] === '0 0') {
            break
        }
        var tmp = lines[i].split(' ')
        console.log(Number(tmp[0]) >= Number(tmp[1]) ? tmp[0] : tmp[1])
    }
}