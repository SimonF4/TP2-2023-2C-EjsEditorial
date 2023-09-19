//Clase principal.

const {
    Medida,
    Tipografia,
    Linea,
    Pagina,
    Libro
} = require('./src/entities')


    let medidaDeTest = new Medida(1.20, "pixeles");
    let tipografia01 = new Tipografia(new Medida(), new Medida(), new Medida());
    let linea = new Linea(new Medida(), new Medida(), 7, new Medida());
    let pagina = new Pagina(7, new Medida(), new Medida(), new Medida(), new Medida());
    let libro = new Libro(150);

    alert(libro.getCantPags());

