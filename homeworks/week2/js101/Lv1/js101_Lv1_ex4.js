function star(num) {
  var c = ""
  for (var i = 1; i <= num; i++) {
    c += "*"
  }
  return c
}

var n = 10
console.log(star(n))