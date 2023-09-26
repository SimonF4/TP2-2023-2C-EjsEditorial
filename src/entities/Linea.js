const Medida = require('./Medida')

class Linea {

    #alto //: Medida
    #ancho //: Medida
    #cantidadDeCaracteres //: number
    #interlineado //: Medida

    constructor(alto, ancho, cantidadDeCaracteres, interlineado){
        this.setAlto(alto);
        this.setAncho(ancho);
        this.setCantidadCaracteres(cantidadDeCaracteres);
        this.setInterlineado(interlineado);
    }

    setCantidadCaracteres(cantidadDeCaracteres){

        if(typeof cantidadDeCaracteres != Number){
            throw new Error('La cantidad de caracteres debe ser un dato numerico');
        }

        this.#cantidadDeCaracteres = cantidadDeCaracteres;
    }
    
    validarMedida(medida){
        if(typeof medida != Medida){
            throw new Error('El dato ingresado debe ser de tipo Medida');
        }
    }

    setAlto(alto){
        this.validarMedida(alto);

        this.#alto = alto;
    }

    setAncho(ancho){
        this.validarMedida(ancho);

        this.#ancho = ancho;
    }

    setInterlineado(interlineado){
        this.validarMedida(interlineado);

        this.#interlineado = interlineado;
    }
}

module.exports = Linea