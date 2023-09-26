// Esto era en realidad para importar una clase dentro de otra: const Medida = require('./Medida')

class Medida{
    #medida // : float
    #unidadDeMedida // (pixels, milímetros) : string
    
    constructor(medida, unidadDeMedida){
        this.#medida = medida;
        this.#unidadDeMedida = unidadDeMedida;
    }
}

//  Exportacion de la clase para poder usarlo en la clase principal:
module.exports = Medida