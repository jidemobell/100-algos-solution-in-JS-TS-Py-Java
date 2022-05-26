let data = [2, 8, 121, 42, 222, 23];

function uniqProd(arr) {
  let prodSet = new Set();
  const prodNum = (str) => str.split('').reduce((b, a) => parseInt(b) * parseInt(a));
  for (const val of arr) { 
    val.toString().length > 1 ? prodSet.add(prodNum(val.toString())) : prodSet.add(val);
  }
  return prodSet
}

console.time('setgick')
console.log(uniqProd(data))
console.timeEnd('setgick')