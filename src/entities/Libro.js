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
        this.cantPags = cantPags;
    }

    getCantPags(){
        return this.cantPags;
    }

    //export{ getCantPags};
}