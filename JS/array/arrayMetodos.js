const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Remove o ultimo elemento do arr
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona em ultimo
console.log(pilotos);

pilotos.shift(); // remove o primeiro do arr
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona no primeiro indice
console.log(pilotos);

// splice tanto adiciona quanto remove do array

// adicionar
// adicione, antes do indice 2 o bottas e o massa
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1) // Massa quebrou dnv :(
console.log(pilotos);

// retorna um novo array a partir do metodo 'slice'
const algunsPilotos = pilotos.slice(2);
// retorno o resto do array a partir do 2º indice
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(2 , 4);
// importante lembrar que o ultimo indice não entra
// no novo array
console.log(algunsPilotos2);