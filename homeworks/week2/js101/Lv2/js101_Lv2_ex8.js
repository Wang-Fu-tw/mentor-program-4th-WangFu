function swap(x) {
  var temp
  var Ans = []
  for (var i = 0; i < x.length; i++) {
	temp = x.charCodeAt(i)
	x.charAt(i) <= "Z" ? temp += 32 : temp -= 32
	Ans.push(String.fromCharCode(temp))
  }
  return (Ans.join(""))
}

var str = "JavaScript"
console.log(swap(str))