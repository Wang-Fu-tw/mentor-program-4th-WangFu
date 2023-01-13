// function add(a, b) {
//     let c = 0
//     let arr = []
//     while(a > 0 || b > 0){
//         if(c) {
//             if((a & 1) & (b & 1)) {
//                 arr.unshift(1)
//                 c = 1
//             } else if((a & 1) ^ (b&1)) {
//                 arr.unshift(0)
//                 c = 1
//             } else {
//                 arr.unshift(1)
//                 c = 0
//             }
//         } else {
//             if((a & 1) & (b & 1)) {
//                 arr.unshift(0)
//                 c = 1
//             } else if((a & 1) ^ (b&1)) {
//                 arr.unshift(1)
//                 c = 0
//             } else {
//                 arr.unshift(0)
//                 c = 0
//             }
//         }
//         a = a>>1
//         b = b>>1
//     }

//     if(c) arr.unshift(1)

//     var n = 0
//     while(arr.length) {
//         n = n<<1
//         if(arr[0]) {
//             n = n^1
//         }
//         arr.shift()
//     }

//     return n
// }

console.log(add(13, 27))

/*
a b   c sum
0 0   0 0
1 0   0 1
0 1   0 1
1 1   1 0
*/

// function halfadder(a, b) {
//     const sum = a ^ b
//     const carry = a & b
//     return [sum, carry]
// }

/*
a b c  co sum
0 0 0  0  0
1 0 0  0  1
0 1 0  0  1
0 0 1  0  1

1 1 0  1  0
1 0 1  1  0
0 1 1  1  0
1 1 1  1  1
*/

//sum = a ^ b ^ c
//co = ab + bc + ac = a&b + c&(a^b) => carry1 | c&sum1 => carry1 | carry2 

// function fullAdder(a, b, c) {
//     const [sum1, carry1] = halfadder(a, b)
//     const [sum2, carry2] = halfadder(c, sum1)
//     return [sum2, carry1 | carry2]
// }

// function add(a, b) {
//     let result = 0;
//     let positionMask = 1;
//     let carry = 0
//     while(a > 0 || b > 0 || carry > 0) {
//         const[sum, c] = fullAdder(a & 1, b & 1, carry)
//         carry = c
//         result = (sum ? positionMask : 0) | result
//         positionMask <<= 1
//         a >>= 1
//         b >>= 1 
//         console.log(result)
//     }
//     return result
// }

function add(a, b) {
    let result = 0;
    let positionMask = 1;
    let carry = 0
    while(a > 0 || b > 0 || carry > 0) {
        //sum = a ^ b ^ c
        const sum = (a & 1) ^ (b & 1) ^ carry
        //co = ab + bc + ac
        const c = ((a & 1) & b) | ((b & 1) & carry) | ((a & 1) & carry)
        carry = c
        result = (sum ? positionMask : 0) | result
        positionMask <<= 1
        a >>= 1
        b >>= 1 
    }
    return result
}