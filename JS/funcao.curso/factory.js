function criarPessoa(nome, sobrenome) {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

const ana = new criarPessoa;
// console.log(ana);

//aula 2

function criarProd(nome, preco) {
    return {
        nome,
        preco,
        desconto: 70/100
    }
}

const prod1 = new criarProd('airFry', 79);
console.log(prod1);
