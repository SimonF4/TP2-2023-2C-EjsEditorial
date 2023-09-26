//Clase principal.

const {
    Medida,
    Tipografia,
    Linea,
    Pagina,
    Libro
} = require('./src/entities')

try {
    let medidaDeTest = new Medida(200, "pixeles");
    let tipografia01 = new Tipografia(new Medida(8, "pixeles"), new Medida(3, "pixeles"), new Medida(5, "pixeles"));
    let linea = new Linea(new Medida(1600, "pixeles"), new Medida(400, "pixeles"), 200, new Medida(5));
    let pagina = new Pagina(15, new Medida(10, "milimetros"), new Medida(10, "milimetros"), new Medida(10, "milimetros"), new Medida(10, "milimetros"));
    let libro = new Libro(150);

    alert(libro.getCantPags());
} catch (error) {
    alert(error.message());
}