function findSmallerTotal(x,y) {
  var sum = 0
  for (var i = 0; i < x.length; i++) {
    if (x[i] < y)
	  sum += x[i]
  }
  return sum
}

var Arr = [1, 2, 3, 4, 5, 6]
var Num = 5
console.log(findSmallerTotal(Arr, Num))