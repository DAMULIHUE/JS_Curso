const junta = (pilha=[1, 2, 3, 4], adiciona=[5, 6, 7, 8]) => {
    let result = pilha.concat(adiciona);

    console.log(result);
    console.log(pilha);
    console.log(adiciona);
}

junta();