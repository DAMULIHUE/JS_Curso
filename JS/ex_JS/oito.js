const pedroJogos = (string) => {
    const Array = string.split(' ');

    let valMin=Number(Array[0]), recordeAtual=Number(Array[0]), bateuRecorde = 0;
    
    Array.forEach((element, i) =>{
        
        if(recordeAtual < Number(element)){ bateuRecorde++; recordeAtual = Number(element); }
        if(valMin > Number(element)){ valMin = Number(element); }
    })

    const result = [bateuRecorde, valMin];
    console.log(result);
}

pedroJogos('1 4 13 10 6 14');