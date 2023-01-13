function flatten(x) {
  var str = x.join()
  var Ans = str.split(",")
  return Ans
}

var Arr = [1, [2, [3, [4]], 5], 6]
console.log(flatten(Arr))