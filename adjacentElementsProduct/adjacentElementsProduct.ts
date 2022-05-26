const adjacentElementsProduct = (inputArray: number[]): number => {
  let pairs = findPairs(inputArray);

  return pairs
    .map(pair => pair.reduce((a: number, b: number) => a * b, 1))
    .sort((a: number, b: number) => (a > b ? -1 : 1))[0];
};

// Helpers
const findPairs = (array: number[]): number[][] => {
  let pairs = [];

  for (let i = 0; i < array.length - 1; i++) {
    let pair = [array[i], array[i + 1]];

    if (!pairs.includes(pair)) pairs.push(pair);
  }

  return pairs;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
