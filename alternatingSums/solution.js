let ar = [50, 60, 60, 45, 70]
let b = [0, 0]
for (let i = 0,k=i+1; i <= ar.length - 1; i+=2,k+=2) {
  b[0] += (ar[i])
  k != ar.length && (b[1] += (ar[k]))
}
console.log(b)
