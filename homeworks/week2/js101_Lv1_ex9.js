function findAllSmall(x,y) {
  var Ans = []
  for (var i = 0; i < x.length; i++) {
    if (x[i] < y)
	  Ans.push(x[i])
  }
  return Ans
}

var Arr = [1, 87, 9453, 666, 9527, 1995]
var Num = 9500
console.log(findAllSmall(Arr, Num))