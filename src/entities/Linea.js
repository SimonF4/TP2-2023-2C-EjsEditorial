class Linea {

    #alto //: Medida
    #ancho //: Medida
    #cantidadDeCaracteres //: number
    #interlineado //: Medida

    constructor(alto, ancho, cantidadDeCaracteres, interlineado){
        this.alto = alto;
        this.ancho = ancho;
        setCantidadCaracteres(cantidadDeCaracteres);
        this.#interlineado = interlineado;
    }

    setCantidadCaracteres(cantidadDeCaracteres){

        if(typeof cantidadDeCaracteres != Number){
            throw new Error('La cantidad de caracteres debe ser un dato numerico');
        }

        this.cantidadDeCaracteres = cantidadDeCaracteres;
    }
}

module.exports = Linea