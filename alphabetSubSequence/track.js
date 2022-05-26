Number.prototype[Symbol.iterator] = function* () {
  for (let i=0; i < this; i++) {
    yield i;
  }
}
console.log([...10])

console.time('cool way')
console.log([...Array(10).keys()])
console.timeEnd('cool way')