// 不能使用 BigInt 這個資料型態
function multiply(a, b) {
    let bb = b.split('')
    let d = []
    for(let i=0; i<bb.length; i++) {
        d.push(multiRow(a, bb[bb.length -1 -i]))
        for(let j=0; j<i; j++) {
            d[i] += '0'
        }
    }

    var ans = d[0]
    for(let i=1; i<bb.length ; i++) {
        ans = adderRow(ans, d[i])
    }
    
    return ans
}

console.log(multiply('124902814902890825902840917490127902791247902479027210970941724092174091274902749012740921759037590347438758957283947234273942304239403274093275902375902374092410937290371093719023729103790123', '1239128192048129048129021830918209318239018239018239018249082490182490182903182390128390128903182309812093812093820938190380192381029380192381092380192380123802913810381203'))

console.log(124902814902890825902840917490127902791247902479027210970941724092174091274902749012740921759037590347438758957283947234273942304239403274093275902375902374092410937290371093719023729103790123n*1239128192048129048129021830918209318239018239018239018249082490182490182903182390128390128903182309812093812093820938190380192381029380192381092380192380123802913810381203n)

function multiSingle(a, b, c) {
    const m = Number(a) * Number(b) + c
    return [m%10, Math.floor(m/10)]
}

function multiRow(a, b) {
    let carry = 0
    let arr = a.split('')
    let row = ''
    while(arr.length) {
        const [s, c] = multiSingle(arr[arr.length -1], b, carry)
        row = s + row
        carry = c
        arr.pop()
    }
    if(carry) row = carry + row
    return row
}

function adderSingle(a, b, c) {
    const s = Number(a) + Number(b) + c
    return [s%10, Math.floor(s/10)]
}

function adderRow(s1, s2) {
    let sum = ''
    let ss1 = s1.split('')
    let ss2 = s2.split('')
    let carry = 0
    while(ss1.length && ss2.length) {
        const [s, c] = adderSingle(ss1[ss1.length - 1], ss2[ss2.length - 1], carry)
        sum = s + sum
        carry = c
        ss1.pop()
        ss2.pop()
    }

    let temp = ss1.length ? ss1.join('') : ss2.join('')
    sum = (carry ? Number(temp) + 1 : temp) + sum
    return sum
}

//        123456
//             9
// -------------
//            54
//           45
//          36
//         27
//        28
//        9
// =============
//       1111104

//        123456
//        456789
// -------------
//       1111104
//       987648
//      864192
//     740736
//    617280
//   493824
// =============
//   56393342784


