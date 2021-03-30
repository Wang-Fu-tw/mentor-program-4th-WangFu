function isPrime(x) {
  if (x < 2){
	return false
  } else if ( x === 2) {
    return true
  }
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
	  return false
	}
  }
  return true
}

var n = 81
console.log(isPrime(n))