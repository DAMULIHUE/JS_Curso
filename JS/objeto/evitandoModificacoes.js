// Object.preventExtension
// previne extensões/aumento de atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'borracha';
produto.descricao = 'borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal
// selar

const pessoa = {nome:'Olivia', idade: 35}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; // não consegue
delete pessoa.nome; // não consegue
pessoa.idade = 29; // consegue
console.log(pessoa);

// Object.freeze = selado + valroes constantes