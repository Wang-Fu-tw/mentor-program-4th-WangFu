function sum(x) {
  var Ans = 0
  for (var i = 0; i < x.length; i++)
    Ans += x[i]
  return Ans
}

var Arr = [1, 9, 9, 5, 8, 7]
console.log(sum(Arr))