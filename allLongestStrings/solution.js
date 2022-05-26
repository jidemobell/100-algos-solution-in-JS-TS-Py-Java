const test = ["aba", "aa", "ad", "vcd", "aba"]

function allLongest(){
  return test.filter(y =>y.length === Math.max(...test.map(x => x.length)))
}

// console.log(allLongest(test))