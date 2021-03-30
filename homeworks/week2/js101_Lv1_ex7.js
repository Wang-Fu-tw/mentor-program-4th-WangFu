function findsmallcount(x,y) {
  var c = 0
  for (var i = 0; i < x.length; i++) {
    if (x[i] < y)
	  c++
  }
  return c
}

var Arr = [1, 2, 3, 4, 5, 6]
var Num = 3
console.log(findsmallcount(Arr, Num))