// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // NÃO FAÇA ISSO EM CASA!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3:'C' }

console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);
console.log(pai.attr3);
console.log(filho.attr0);

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += this.velMax;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324, // shadowing (essa velMax sobrescreve 
                //a velMax do 'pai')
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}` 
        //super invoca o metodo do prototipo 
        // com o mesmo nome, nesse caso 'super'
    }
}

Object.setPrototypeOf(ferrari, carro);
// ferrari tem como __proto__ o carro
Object.setPrototypeOf(volvo, carro);


ferrari.aceleraMais();
console.log(ferrari.status());

volvo.aceleraMais();
console.log(volvo.status());

