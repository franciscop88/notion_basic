// Iteración #2: Buscar la palabra más larga
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  let longestWord = '';

  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i];
    }
  }

  return longestWord;
}

const longestAvenger = findLongestWord(avengers);
console.log('La palabra más larga es:', longestAvenger);
