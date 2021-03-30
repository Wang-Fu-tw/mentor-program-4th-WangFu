function reverse(x) {
  var temp = x.split("")
  var arr = []
  for (var i = 0; i <= temp.length; i++) {
    arr.push(temp[temp.length-i])
  }
  var Ans = arr.join("")
  return Ans
}

var str = "72507002"
console.log(reverse(str))