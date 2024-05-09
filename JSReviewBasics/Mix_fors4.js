const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

// Objeto para contar las ocurrencias de cada sonido favorito
const soundCount = {};

// Iterar sobre la lista de usuarios usando forof
for (const user of users) {
    const favoritesSounds = user.favoritesSounds;

    // Iterar sobre los sonidos favoritos de cada usuario usando forin
    for (const sound in favoritesSounds) {
        // Verificar si el sonido ya está en el objeto de conteo
        if (soundCount[sound]) {
            // Incrementar el conteo si el sonido ya existe en el objeto
            soundCount[sound]++;
        } else {
            // Inicializar el conteo en 1 si es la primera vez que se encuentra el sonido
            soundCount[sound] = 1;
        }
    }
}

// Mostrar el resultado del conteo de cada sonido favorito
console.log('Conteo de sonidos favoritos:');
for (const sound in soundCount) {
    console.log(`${sound}: ${soundCount[sound]} vez(es)`);
}

