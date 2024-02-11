// arrays

//1.1  el valor "HULK" del array de avengers y ver por consola
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambiar el primer elemento de avengers a "IRONMAN"
avengers[0] = "IRONMAN";
console.log(avengers);

//1.3 Imprime el número de elementos en el array usando la propiedad length de Array.
console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const ultimoPersonaje = rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], ultimoPersonaje);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
