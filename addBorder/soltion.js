// picture = ["abc",
// "ded"]
// the output should be

// addBorder(picture) = ["*****",
//            "*abc*",
//            "*ded*",
//            "*****"]

let picture = ["abc", "ded"]
// picture.unshift('*'.repeat(picture[0].length + 2))
// console.log(picture)
// console.log(Array(picture.length).fill(''))

function newFiller(data){
  let output = Array(data.length + 2).fill('')
  return output.map((_, i ) =>  (i !== 0 || i !== output.length) ? `*${data[i-1]}*` : ` `)
}

console.log(newFiller(picture))