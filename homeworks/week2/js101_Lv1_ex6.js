function position(x) {
  var Arr = x.split('')
  for (var i = 0; i < Arr.length; i++) {
	if ("A" <= Arr[i] && Arr[i] <= "Z") {
	  return (Arr[i]+" "+i)
	}
  }
  return -1
}

var str = "abcD"
console.log(position(str))