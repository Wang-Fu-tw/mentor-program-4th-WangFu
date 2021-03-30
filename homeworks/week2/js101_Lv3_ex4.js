function winner(x) {
  var str = x.join()
  var New = str.split(",")
  for (var i = 0; i < 3 ; i++) {
    if (New[i] === New[i+3] && New[i+3] === New[i+6]) {
	  return New[i]
	}
	if (New[i*3] === New[i*3+1] && New[i*3+1] === New[i*3+2]) {
	  return New[i*3]
	}
  }
  if (New[0] === New[4] && New[4] === New[8]) {
	return New[0]
  }
  if (New[2] === New[4] && New[4] === New[6]) {
	return New[2]
  }
  return "draw"
}

var Arr = [
['O', 'O', 'X'],
['O', 'X', 'X'],
['X', 'X', 'O']
]
console.log(winner(Arr))