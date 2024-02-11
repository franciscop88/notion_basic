//contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(array) {
    const wordCount = {};
  
    for (const word of array) {
      // Si la palabra ya está en el objeto, incrementa su contador.
      // De lo contrario, agrega la palabra al objeto con un contador de 1.
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    return wordCount;
  }
  
  const result = repeatCounter(counterWords);
  console.log(result);
  