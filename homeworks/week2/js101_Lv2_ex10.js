function findNthMin(x,y) {
  var temp
  for (var i = 0; i < x.length-1; i++) {
    for (var j = 1; j < x.length-i; j++) {
	  if (x[j-1] > x[j]) {
	    temp = x[j-1]
		x[j-1] = x[j]
		x[j] = temp
	  }
	}
  }
  return x[y-1]
}

var Arr = [88, 44, 33, 6, 1, 0, -10]
var n = 2
console.log(findNthMin(Arr,n))