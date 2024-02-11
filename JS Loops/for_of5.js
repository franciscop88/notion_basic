// Usar for of para recorrer array toy
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 41, name: 'El gato felix'}
];

for (const toy of toys) {
    if (toy.name.toLowerCase().includes('gato')) {
        const index = toys.indexOf(toy);
        toys.splice(index, 1);
    }
}

console.log(toys);
