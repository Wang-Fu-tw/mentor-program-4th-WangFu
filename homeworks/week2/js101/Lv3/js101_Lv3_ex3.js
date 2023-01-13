function tree(x) {
  var leaf = ""
  for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= x*2-1; j++) {
	  if (j <= x-i) {
	    leaf += " "
	  } else if (x-i < j && j < x+i){
	    leaf += "*"
	  } else {
	    continue
	  }
	}
	console.log(leaf)
	leaf = ""
  }
  var trunk = ""
  if (x - 1) {
    for (var i = 1; i < x; i++) {
	trunk += " "
	}
	trunk += "*"
    for (var j = 0; j < x; j++) {
	console.log(trunk)
	}
  }
}

var n = 5
tree(n)