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
    var q = lines[0].split(' ')
    var N = Number(q[0])
    var M = Number(q[1])

    var arr = []
    for(let i=0; i<N; i++){
        arr.push(Number(lines[i+1]))
    }

    for(let i=0; i<M; i++) {
        console.log(index(arr, Number(lines[N+1+i])))
    }
}

function index(arr, target) {
    if(target < arr[0] || target > arr[arr.length-1]) {
        return -1
    }
    let head = 0
    let end = arr.length - 1

    while(head <= end) {
        let mid = (head+end)>>1
        if(target === arr[mid]) {
            return mid
        } else if(target > arr[mid]) {
            head = mid + 1
        } else {
            end = mid - 1
        }
    }

    return -1
}