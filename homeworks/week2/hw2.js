function capitalize(str) {
  let ans = ''
  if('a' <= str[0] && str[0] <= 'z') {
    ans += String.fromCharCode(str[0].charCodeAt() - 32)
  } else {
    ans += str[0]
  }

  for(let i=1; i<str.length; i++){
    ans += str[i]
  }
  return ans
}

console.log(capitalize(',hello'));
