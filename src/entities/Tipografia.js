const Medida = require('./Medida')

class Tipografia{
    #alto // : Medida
    #ancho // : Medida
    #espaciado //: Medida
    
    constructor(alto, ancho, espaciado){
        this.alto = alto;
        this.ancho = ancho;
        this.espaciado = espaciado;
    }

    validarMedida(medida){
        if(typeof medida != Medida){
            throw new Error('El dato ingresado debe ser de tipo Medida');
        }
    }
}

module.exports = Tipografia