let a = [1, 1, 1, 1, 1]


function lightOff(arr){
  const upDwn = (n) => n === 1 ? 0 : 1 
  for (const ki in arr) {
    if (arr[ki] === 1 ){
      for (let j = ki; j >= 0 ; j--) {
        arr[j] = upDwn(arr[j])
      }
    }
  }
  return arr
}

console.log(lightOff(a))