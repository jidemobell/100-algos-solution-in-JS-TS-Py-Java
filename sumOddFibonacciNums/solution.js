function sumOddFibonacciNums(n){
  if (n ===0 || n === 1) return 1
  return sumOddFibonacciNums(n-1) + sumOddFibonacciNums(n-2)
}

// console.log(sumOddFibonacciNums(10))

function fibGenerator(n) {
  let fi = [1, 1],i = 2;
  while (i < n) {
    fi[i] = fi[i - 1] + fi[i - 2];
    i++;
  }
  return fi
}
// console.log(fibGenerator(10));


function sumOddFibonacciNums(n) {
  let fi = [1, 1],i = 2;sum=0
  while (i < n) { fi[i] = fi[i - 1] + fi[i - 2]; i++; }
  for (const val of fi) {
    if (val < n && val%2!==0){sum += val}
  }
  return sum
}

console.log(sumOddFibonacciNums(1000))