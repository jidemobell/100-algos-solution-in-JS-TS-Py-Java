
function alphaShift(text){
  return text.split('').map(x => x == 'z' ? 'a' : (String.fromCharCode(x.charCodeAt(0)+ 1))).join('')
}



console.log(alphaShift("python"))
// console.log(('z'.charCodeAt(0)))

