function carro(velocidadeMax=200, delta=5){
    // atributo privado
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    };
}

const uno = new carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(350, 20);
ferrari.acelerar(); 
console.log(ferrari.getVelocidadeAtual());

console.log(typeof carro);
console.log(typeof uno);
console.log(uno);