// Esto era en realidad para importar una clase dentro de otra: const Medida = require('./Medida')

class Medida{
    #medida // : float
    #unidadDeMedida // (pixels, milímetros) : string
    
    constructor(medida, unidadDeMedida){
        this.setMedida(medida);
        this.setUnidadDeMedida(unidadDeMedida);
    }
    
    setMedida(medida){
        if(typeof medida != Number){ //"Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc."
            throw new Error('La medida debe ser un dato numerico');
        }
        
        this.#medida = medida;
    }

    setUnidadDeMedida(unidadDeMedida){
        if(typeof unidadDeMedida != String){
            throw new Error('La unidad de medida debe ser un texto');
        }

        this.#unidadDeMedida = unidadDeMedida;
    }
}

//  Exportacion de la clase para poder usarlo en la clase principal:
module.exports = Medida