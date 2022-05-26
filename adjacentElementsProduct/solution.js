const test = [3, 6, -2, -5, 7, 3]
let max = 0
for (let i = 0,j=1; i < test.length && j <= test.length; i++, j++) {
   test[i] * test[j] > max && (max = test[i] * test[j]) 
}

// console.log(max)