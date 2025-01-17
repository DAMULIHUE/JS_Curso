const pares = () => {
    let limite = 100, num = 1;

    while(limite > 0){
        if(num%2 == 0){ console.log(num, 'é par'); }
        num++;
        limite--;
    }
}

pares();