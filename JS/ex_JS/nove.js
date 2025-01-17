const notas = (nota) => {

    // 38 - 40 = 2 - arredonda pra 40
    // 34 - 30 = 4 - não arredonda

    resto = nota%5;
    let notaRound = resto < 5 / 2 ? nota : nota + (5 - resto);
    

    if(notaRound < 40){ console.log('reprovado'); }
    else{ console.log('aprovado'); }

    console.log(notaRound);
}

notas(43);
notas(38);
notas(25);
notas(36);
notas(99);