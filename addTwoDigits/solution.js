function sumDigits(n){
  return ((n).toString().split('')).reduce((a,b) => parseInt(a) + parseInt(b))
}

console.log(sumDigits(765))