const addTwoDigits = (n: any): number =>
  n
    .toString()
    .split("")
    .map(char => +char)
    .reduce((a, b) => a + b, 0);

console.log(addTwoDigits(29));
