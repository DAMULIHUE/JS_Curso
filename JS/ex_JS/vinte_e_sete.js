const criancas = (maior, menor, taxaMaior, taxaMenor) => {

    if(maior < menor){ [maior, menor] = [menor, maior]; }

    if(taxaMaior < taxaMenor){ 
        let anos = 0;
        while(maior > menor){
            anos++
            menor += taxaMenor;
        }

        console.log('vai ultrapassar em:', anos);
    }else{ console.log('não vai ultrapassar'); }
}

criancas(12, 11, 3/100, 4/100);
criancas(12, 14, 3/100, 4/100);
criancas(12, 14, 4/100, 3/100);