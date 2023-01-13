function  isUpperCase(x) {
  var Cut = x.slice(0,1)
  return ('A' <= Cut && Cut <= 'Z')
}

var str = "Zsbd"
console.log(isUpperCase(str)) 