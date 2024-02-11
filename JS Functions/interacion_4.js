// Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
  if (array.length === 0) {
    return 0; // Manejar el caso de un array vacío para evitar división por cero.
  }

  const sum = array.reduce((total, num) => total + num, 0);
  return sum / array.length;
}

const result = average(numbers);
console.log(result); // Imprimirá el promedio en la consola.
