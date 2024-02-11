
//crear una función que tome dos números como argumento y devuelva el más alto

function getMax(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
  }
  
  // Ejemplo de uso:
  const result = getMax(8, 5);
  console.log(result);  // Esto imprimirá 8, ya que 8 es mayor que 5
  