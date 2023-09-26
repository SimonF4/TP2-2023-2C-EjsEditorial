class Libro{

    #cantPags;

    //No existen los constructores por default en JS:
    /*
    constructor(){
        cantPags = 0;
    }
    */

    constructor(cantPags){
        setCantPags(cantPags);
    }

    setCantPags(cantPags){
        if(typeof cantPags != Number){
            throw new Error('La cantidad de paginas debe ser un dato numerico');
        }

        this.cantPags = cantPags;
    }

    getCantPags(){
        return this.cantPags;
    }

    //export{ getCantPags};
}

module.exports = Libro