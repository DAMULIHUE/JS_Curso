console.log(typeof Array, typeof new Array, typeof []);
// Array eh um objeto!!!

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
console.log(aprovados[3]);

aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === null);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // organiza o array por ordem alfabetica
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento adicionado 1', 'Elemento adicionado 2') 
// remove ou adiciona elementos de um array
// 1 param - a partir de qual elemento devo excluir?
// 2 - quantos elementos devem ser excluidos a partir daqui?
// 3 - elementos q serão adicionados no intervlo em que
// os outros foram excluidos
console.log(aprovados);