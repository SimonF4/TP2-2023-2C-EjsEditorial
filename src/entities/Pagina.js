class Pagina {
    #cantidadDeLineas //: number
    #margenSuperior //: Medida
    #margenInferior //: Medida
    #margenDerecho //: Medida
    #margenIzquierdo //: Medida

    constructor(cantidadDeLineas, margenSuperior, margenInferior, margenDerecho, margenIzquierdo){
        this.setCantLineas(cantidadDeLineas);
        this.margenSuperior = margenSuperior;
        this.margenInferior = margenInferior;
        this.margenDerecho = margenDerecho;
        this.margenIzquierdo = margenIzquierdo;
    }

    setCantLineas(cantidadDeLineas){
        if(typeof cantidadDeLineas != Number){
            throw new Error('La cantidad de lineas debe ser un dato numerico');
        }

        this.#cantidadDeLineas = cantidadDeLineas;
    }
}

module.exports = Pagina