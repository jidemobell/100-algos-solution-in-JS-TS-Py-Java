function alphabetSubsequence(word) {
  let array = word.split("").map((x) => x.charCodeAt(0));
  for (let i = 0, k = i + 1; k < array.length; k++, i++) {
    if (array[i] >= array[k]) {
      return false;
    }
  }
  return true;
}

// console.log(alphabetSubsequence("ace"));
