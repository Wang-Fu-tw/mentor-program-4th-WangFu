function stars2(num) {
  for(var i = 1; i <= num; i++) {
	  var s1 = ''
    for(var j = 1; j<= i; j++) {
	  s1 += '*'
	}
	console.log(s1)
  }
  for(var i = num-1; i > 0; i--) {
	  var s2 = ''
    for(var j = i; j > 0; j--) {
	  s2 += '*'
	}
	console.log(s2)
  }
}

var n = 7
stars2(n)  