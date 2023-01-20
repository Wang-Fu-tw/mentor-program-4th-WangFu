function reverse(str) {
  let ans =''
  for(let i=0; i<str.length; i++) {
    ans += str[str.length-i-1]
  }
  console.log(ans)
}

reverse('1abc2');
