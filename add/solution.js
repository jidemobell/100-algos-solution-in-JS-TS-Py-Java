function sumAll(params){
  return [...arguments].reduce((p,n) => p + n)
}

console.log(sumAll(2,3))
console.log(sumAll(2,3,6,4,3,2,2,2))