function fib(x) {
  if (x === 0)
    return x
  var sum = 1
  var temp = 0
  for(var i = 2; i <= x; i++) {
    sum += temp
	temp = sum-temp
  }
  return sum
}

var n = 11
console.log(fib(n))