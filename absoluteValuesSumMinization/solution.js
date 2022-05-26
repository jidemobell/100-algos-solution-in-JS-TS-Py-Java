
function decR(){
  let test = [2, 4, 7, 6, 6, 8], sum = [0, 0], sumMap = new Map(), 
  testSet =[...new Set(test)], another = testSet, i = 0, y = 0
  while(testSet.length > i){
    let presentMax = Math.max(...testSet)
    another.map(x => {
      sumMap.set(x, Math.abs( x - presentMax))
    })
     let valuesSum = Array.from(sumMap.values()).reduce(( p, n) => p + n)
    if (y === 0 ){ 
      sum = [presentMax, valuesSum] }
    if(valuesSum < sum[1] ){
      sum = [presentMax, valuesSum]}
    testSet = testSet.filter((x) =>  x !== Math.max(...testSet))
    y++
 }
 return sum[0]
}

console.log(decR())
// console.log((new Array(5).fill(0)))



// =====
function simMini(a){
  const isEven = a.length%2 === 0
  return isEven ? a[(a.length / 2) - 1] : a[Math.floor(a.length / 2)]
}
