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

// Función para calcular la media del volumen de todos los sonidos favoritos
function calcularMediaVolumen(users) {
    let totalVolumen = 0;
    let totalSonidos = 0;

    for (const user of users) {
        const favoritesSounds = user.favoritesSounds;

        // Usar forin para recorrer los sonidos favoritos de cada usuario
        for (const sound in favoritesSounds) {
            const volume = favoritesSounds[sound].volume;
            totalVolumen += volume;
            totalSonidos++;
        }
    }

    // Calcular la media del volumen
    const mediaVolumen = totalVolumen / totalSonidos;
    return mediaVolumen;
}

// Llamar a la función para calcular la media del volumen
const media = calcularMediaVolumen(users);
console.log('La media del volumen de todos los sonidos favoritos es:', media);
