const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1} ${nome}`);
    console.log(array); // usa o proprio array como param
    console.log(x) // undefiened
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);