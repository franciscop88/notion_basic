// For in: Ej: un for...in para imprimir por consola los datos del alienígena

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien) {
    console.log(`${key}: ${alien[key]}`);
}
