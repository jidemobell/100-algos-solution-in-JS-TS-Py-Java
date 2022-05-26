let names = ['steve', 'stevens', 'danny', 'steves', 'dan', 'john']
let query = ['steve', 'alex', 'joe']
// let result = [...Array(query.length ).fill(0)]
let output = []
function prefixer(names,query){
  let result = [...Array(query.length ).fill(0)]
  let k = 0;
  for (const val of query) {
    while(k < names.length - 1){
      if(names[k].split(val).length > 1){
        if(val === val) {
          
        }
        console.log("yes for ", val)
       
      }
      k++
    }
  }
  return result
}

// console.log('steve' === 'steve')
// console.log([3,4].indexOf(4))
console.log(prefixer(names,query))


// for (let j = 0; j < names.length; j++) {
//   if(names[j].split(val).length > 1){
//     result[names.indexOf(names[j])] = result[names.indexOf(names[j])] + 1
//   }
// }

console.log("alexes".split('alex'))