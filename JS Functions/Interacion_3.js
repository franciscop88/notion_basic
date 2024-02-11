// calcular suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }

  return sum;
}

const result = sumAll(numbers);
console.log('La suma de todos los números es:', result);
