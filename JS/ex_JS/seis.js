const jurosSimples = (capital, taxa, tempo) =>{

    const juros = capital * taxa * tempo;
    console.log("O montante é: " + (capital + juros));
}

const jurosCompostos = (capital, taxa, tempo) =>{

    const montante = capital * (1 + taxa) ** tempo;
    console.log("O montante é: " + montante);
}

jurosSimples(1200, 12/100, 4);
jurosCompostos(1200, 12/100, 4);