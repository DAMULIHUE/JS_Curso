const anuidade = (mes, valAnuidade) =>{
    
    const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 
                    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    let diaDoPagamento = (12 - mes) + 1;
    let Montante = valAnuidade * (1 + 5/100) ** diaDoPagamento;


    console.log(Math.floor(Montante));
}

anuidade(3, 500);