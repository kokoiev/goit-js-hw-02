const findLongestWord = function (string) {
  const blockOfWords = string.split(` `);
  let longestWord = blockOfWords[0];

  for (let i = 0; i < blockOfWords.length; i += 1) {
    if (longestWord.length < blockOfWords[i].length) {
      longestWord = blockOfWords[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
