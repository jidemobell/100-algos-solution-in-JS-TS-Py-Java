// console.log(Date.parse("13:58"))

function parseTime(wrd){
  let arr = wrd.split(':').map(x => parseInt(x))
  return (arr[0] <= 24 && arr[1] <= 60) 
}

console.log(parseTime("22:51"))