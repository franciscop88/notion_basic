// includes: bucle y mostrar en consola los valores del aray que incl "camiseta"

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const product of products) {
    if (product.includes('Camiseta')) {
        console.log(product);
    }
}
