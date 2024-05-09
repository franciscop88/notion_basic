function rollDice(numFaces) {
    // Generar un número aleatorio entre 1 y el número de caras (inclusive)
    return Math.floor(Math.random() * numFaces) + 1;
}

// Ejemplo de uso: Lanzar un dado de 6 caras
const diceResult = rollDice(6);
console.log(`El resultado del dado es: ${diceResult}`);
