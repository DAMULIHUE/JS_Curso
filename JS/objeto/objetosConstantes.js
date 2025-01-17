// pessoa -> 123 -> {...}
const pessoa = { nome: 'joão' } 
pessoa.nome = 'cleber';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

// Baby
// Baby
// Baby
// Baby
// Baby
// BAIFUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

// vai mudar caralho nenhum
const pessoaConstante = Object.freeze({ nome : 'João' });
pessoaConstante.nome = 'prikito';

console.log(pessoaConstante);
