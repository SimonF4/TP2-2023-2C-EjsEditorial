const Medida = require('./Medida')

class Pagina {
    #cantidadDeLineas //: number
    #margenSuperior //: Medida
    #margenInferior //: Medida
    #margenDerecho //: Medida
    #margenIzquierdo //: Medida

    constructor(cantidadDeLineas, margenSuperior, margenInferior, margenDerecho, margenIzquierdo){
        this.setCantLineas(cantidadDeLineas);
        this.setMargenSuperior(margenSuperior);
        this.setMargenInferior(margenInferior);
        this.setMargenDerecho(margenDerecho);
        this.setMargenIzquierdo(margenIzquierdo);
    }

    setCantLineas(cantidadDeLineas){
        if(typeof cantidadDeLineas != Number){
            throw new Error('La cantidad de lineas debe ser un dato numerico');
        }

        this.#cantidadDeLineas = cantidadDeLineas;
    }

    validarMargen(margen){
        if(typeof margen != Medida){
            throw new Error('El margen debe ser un tipo de dato Medida');
        }
    }

    setMargenSuperior(margenSuperior){
        this.validarMargen(margenSuperior);

        this.margenSuperior = margenSuperior;
    }

    setMargenInferior(margenInferior){
        this.validarMargen(margenInferior);

        this.margenInferior = margenInferior;
    }

    setMargenDerecho(margenDerecho){
        this.validarMargen(margenDerecho);

        this.margenDerecho = margenDerecho;
    }

    setMargenIzquierdo(margenIzquierdo){
        this.validarMargen(margenIzquierdo);

        this.margenIzquierdo = margenIzquierdo;
    }
}

module.exports = Pagina