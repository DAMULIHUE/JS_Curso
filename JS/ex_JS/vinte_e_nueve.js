const limiteVetor = (arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]) => {

    let limiteMin = 10;
    let limiteMax = 20;
    let numDentro = 0;
    let numFora = 0;

    for(let i=0; i < arr.length; i++){
        if(i >= limiteMin && i <= limiteMax ){ numDentro++; }
        else{ numFora++; }
    }

    console.log('dentro:', numDentro, 'fora:', numFora);
}

limiteVetor();