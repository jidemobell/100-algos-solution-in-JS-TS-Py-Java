let picture = ["abc", "ded"]

function newFiller(data){
  let output = Array(data.length + 2).fill('')
  return output.map((_, i ) =>  (i === 0 || i === output.length - 1) 
  ? `*`.repeat(picture[0].length + 2) : `*${data[i-1]}*`)
}

console.log(newFiller(picture))