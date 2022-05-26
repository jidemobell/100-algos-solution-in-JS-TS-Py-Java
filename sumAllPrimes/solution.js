function fizzBuzz(n){
  let nRange = [...Array(n).keys(),n].slice(1,)
  for (const val of nRange) {
    (val%3 === 0 && val%5 === 0) ? console.log('FizzBuzz') :
    (val%3 === 0 && val%5 !== 0) ? console.log('Fizz') :
    (val%3 !== 0 && val%5 === 0) ? console.log('Buzz') : console.log(val)
  }
}

fizzBuzz(15)

// console.log([...Array(10).keys(),10].slice(1,))