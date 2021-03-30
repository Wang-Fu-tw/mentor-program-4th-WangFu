function makeStars(num) {
  var s1 = ''
  for(var i = 1; i <= num; i++) {
    for(var j = 1; j<= i; j++) {
	  s1 += '*'
	}
	s1 += '\n'
  }
  return s1
}

var n = 7
console.log(makeStars(n))