function getPreco(imposto = 0, moeda="R$"){
    return `${moeda} ${this.preco * (1 - this.desc)*(1 + imposto)}`
}

prod = {
    nome: 'a hora',
    preco: 300,
    desc: 0.15,
    getPreco
}
global.preco = 5000;
global.desc = 0.40;


console.log(getPreco());
console.log(prod.getPreco());

const carro = { preco: 500, desc: 0.20 }

console.log(getPreco.call(carro)); //define o contexta da função no obj dado como param
console.log(getPreco.apply(carro)); //define o contexta da função no obj dado como param

console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(global, [0.17, '$']));