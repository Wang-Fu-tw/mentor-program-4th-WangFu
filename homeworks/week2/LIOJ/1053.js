const { stat } = require("fs");
const { maxHeaderSize } = require("http");
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
    var size = lines[0].split(' ')
    var H = Number(size[0])
    var W = Number(size[1])

    var maze = []
    var parent = []
    
    for(let i=0; i<H; i++) {
        let row = lines[i+1]
        let arr1 = []
        let arr2 = []
        maze.push(arr1)
        parent.push(arr2)
        for(let j=0; j<W; j++) {
            maze[i][j] = row[j]
            parent[i][j] = row[j]
        }
    }

    var dir = ['D', 'R', 'L', 'U']
    var vector = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    var start = {
        x: 0,
        y: 0
    }

    var queue = []
    queue.push(start)
    parent[start.y][start.x] = 'S'
    
    while(queue.length) {
        let now = queue.shift()
        if(now.x === W-1 && now.y === H-1)
        {
            cntPath(parent, H-1, W-1, 0)
            break
        }
        for(let i=0; i<4; i++) {
            let next = {
                x: now.x+vector[i][0],
                y: now.y+vector[i][1]
            }
            if(next.x < 0 || next.y < 0 || next.x === W || next.y === H) {
                continue
            }
            if(maze[next.y][next.x] === '#' || parent[next.y][next.x] != '.') {
                continue
            }
            queue.push(next)
            parent[next.y][next.x] = dir[i]
        }
    }

    // for(let i=0; i<H; i++) {
    //     let str = ''
    //     for(let j=0; j<W; j++) {
    //         str += maze[i][j]
    //     }
    //     console.log(str)
    // }    

    // console.log('===========================')

    // for(let i=0; i<H; i++) {
    //     let str = ''
    //     for(let j=0; j<W; j++) {
    //         str += parent[i][j]
    //     }
    //     console.log(str)
    // }
    //console.log(maze)
    //console.log(parent)
}

function cntPath(p, y, x, c) {
    if(x==0 && y==0) {
        console.log(c)
    }
    c++
    if(p[y][x] == 'D') cntPath(p, y-1, x, c)
    if(p[y][x] == 'R') cntPath(p, y, x-1, c)
    if(p[y][x] == 'L') cntPath(p, y, x+1, c)
    if(p[y][x] == 'U') cntPath(p, y+1, x, c)
}