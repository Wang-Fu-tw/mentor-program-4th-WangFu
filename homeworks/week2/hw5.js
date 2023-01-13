function join(arr, concatStr) {
  let str = ''
  for(let i=0; i<arr.length; i++) {
    str += arr[i]
    if(i<arr.length-1) {
        str += concatStr
    }
  }
  return str
}

function repeat(str, times) {
  let result = ''
  for(let i=0; i<times; i++) {
    result += str
  }
  return result
}

console.log(join([1, 2, 3], ''));
console.log(repeat('yoyo', 2));
