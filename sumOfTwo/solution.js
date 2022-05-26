let ai = [1, 2, 3], bi = [10, 20, 30, 40], v=53
// sumOfTwo(a, b, v) = true.
function sumOfTwo(a, b, v){
  for (const val of a) {
      if(b.includes(v - val)) return true
  }
  return false
}

console.log(sumOfTwo(ai,bi,v))