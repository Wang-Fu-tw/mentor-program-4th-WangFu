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
    var n = Number(lines[0])

    var str = ''
    for(let i=0; i<n; i++) {
        str += lines[i+1]
    }
    
    var ans = ''
    for(let i=0; i<Number(lines[n+1]); i++){
        ans += str[Number(lines[i+n+2])-1]
    }

    console.log(ans)

    
    // var n = Number(lines[0])
    // var row = 1
    // var str = ''

    // for(let i=0; i<n; i++) {
    //     str += lines[row]
    //     row++
    // }

    // n = Number(lines[row])
    // row++
    // var ans = ''

    // for(let i=0; i<n; i++) {
    //     ans += str[Number(lines[row]-1)]
    //     row++
    // }

    // console.log(ans)
}