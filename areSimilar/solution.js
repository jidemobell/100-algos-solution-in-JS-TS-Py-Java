//arrays are of same legth
let x = [1, 2, 2],
  y = [2, 1, 1];

function areSimilar(a,b) {
  let map1 = new Map(),map2 = new Map();

  for (let i = 0, k = 0; i < a.length && k < b.length; i++, k++) {
    let m = a[i],n = b[k];
    map1.has(m) ? map1.set(m, map1.get(m) + 1) : map1.set(m, 1);
    map2.has(n) ? map2.set(n, map2.get(n) + 1) : map2.set(n, 1);
  }

  for (const key of a) {
    if (map1.get(key) !== map2.get(key)) return false;
  }
  return true
}

console.time("job1")
console.log(areSimilar(x,y))
console.timeEnd("job1")