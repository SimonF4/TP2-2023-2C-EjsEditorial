const Medida = require('./Medida')

class Tipografia{
    #alto // : Medida
    #ancho // : Medida
    #espaciado //: Medida
    
    constructor(alto, ancho, espaciado){
        this.setAlto(alto);
        this.setAncho(ancho);
        this.setEspaciado(espaciado);
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

    setEspaciado(espaciado){
        this.validarMedida(espaciado);

        this.#espaciado = espaciado;
    }
}

module.exports = Tipografia