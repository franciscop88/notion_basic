function swap(array, index1, index2) {
    // Verifica que los índices estén dentro del rango del array
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.error('Índices fuera de rango');
        return array; // Devolver el array sin cambios si los índices son inválidos
    }

    // Intercambiar los elementos en los índices especificados
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

// Ejemplo de uso: Intercambiar elementos en un array
const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log('Array original:', names);

// Intercambiar los elementos en los índices 1 y 3
const swappedNames = swap(names, 1, 3);
console.log('Array con elementos intercambiados:', swappedNames);
