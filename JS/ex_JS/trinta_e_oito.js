maiorMenor = (menor=0, maior=100) =>{
    if(maior < menor){ [maior, menor] = [menor, maior]; }

    for(let i=menor; i <= maior; i++){
        let numeroPar = i%2 == 0 ? i :'';
        console.log(numeroPar);
    }
}

maiorMenor(20, 12);