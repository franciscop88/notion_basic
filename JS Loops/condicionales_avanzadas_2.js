// Condicionales avanzados
//En cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia

function checkAndMarkApproved(alumns) {
    for (let i = 0; i < alumns.length; i++) {
        const alumn = alumns[i];

        // Comprueba si al menos dos trimestres están aprobados
        if (alumn.T1 + alumn.T2 + alumn.T3 >= 2) {
            alumn.isApproved = true;
        } else {
            alumn.isApproved = false;
        }
    }

    // Muestra el resultado con console.log
    console.log(alumns);
}

// Array de alumnos
const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

// Llama a la función con el array de alumnos
checkAndMarkApproved(alumns);

//añadir nueva propiedad a un objeto
colegios = [
    { name: 'Pilarica', Clase1: 100, Clase2: 80, Clase3: 10 }, 
    { name: 'Lorica', Clase1: 89, Clase2: 50, Clase3: 40 }
]

// Recorremos el array de objetos con un forEach
colegios.forEach((colegio) => {
    // Le añadimos la propiedad nueva llamada "pintada" y le asignamos el valor true
    colegio.pintada = true;
})

console.log(colegios);
