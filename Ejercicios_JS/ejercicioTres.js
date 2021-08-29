var pi = 3.141592;
class Evento{
    constructor(radio){
        this.radio= radio
    }
    getArea(){
        return pi * Math.pow(this.radio,2);
    }
    getPerimetro(){
        return pi * this.radio * 2;
    }
}
var ultimoResultado = new Evento(10);
console.log(ultimoResultado.getArea());
console.log(ultimoResultado.getPerimetro());
