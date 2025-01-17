notas = (notas=[9, 2, 6, 7.90]) =>{
    notas.forEach((element, i) =>{
        if(element >= 0 && element <= 4.9){
            console.log('nota D');
        }
        if(element >= 5 && element <= 6.9){
            console.log('nota C');
        }
        if(element >= 7 && element <= 8.9){
            console.log('nota B');
        }
        if(element >= 9 && element <= 10){
            console.log('nota A');
        }
    })
}

notas();