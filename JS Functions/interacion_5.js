// Calcular promedio de srtings
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
  const words = array.filter(element => typeof element === 'string'); // Filtrar solo las cadenas de texto
  if (words.length === 0) {
    return 0; // Manejar el caso de un array sin palabras para evitar división por cero.
  }

  const totalLength = words.reduce((total, word) => total + word.length, 0);
  return totalLength / words.length;
}

const result = averageWord(mixedElements);
console.log(result); // Imprimirá el promedio en la consola.
