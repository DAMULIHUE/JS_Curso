// usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.25);
p1.nome = 'cuneta';
console.log(p1);

const p2 = new Produto('note', 8920, 0.10);
console.log(p2.getPrecoComDesconto());

// função factory
// é um padrão de projeto
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 8400, 1);
console.log(f1.getSalario(),f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Um função famosa q retorna OBJETO
const fromJSON = JSON.parse('{"info": "sou JSON"}');
console.log(fromJSON.info);