function stars(num) {
  for(var i = 1; i <= num; i++) {
	  var s1 = ''
    for(var j = 1; j<= i; j++) {
	  s1 += '*'
	}
	console.log(s1)
  }
}

var n = 7
stars(n)  