const test = [1, 3, 2, 1]
const test2 = [1,3,2]

function incresingSeq(data){
  let clone = [...data]
  console.log(data)
    let output;
    for (let i of data) {
      clone.splice(i, 1)
      for (const j of clone) {
        console.log(clone[j])
        if(clone[j] > clone[j+1]){
          output =  false
          console.log(output)
          be
        }
      }
      clone = [...data]
    }
  // return output
}


incresingSeq(test2)