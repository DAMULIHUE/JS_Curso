const troco = (num) => {
    let nota1 = 0, nota5 = 0, nota10 = 0, nota50 = 0, nota100 = 0;
    let string = 'seu troco é: '

    while(num > 0){    
        if(num > 100){
            nota100++;
            string += `${nota100} nota(s) de 100. `
            num-=100;

        } else if(num > 50){
            nota50++;
            string += `${nota50} nota(s) de 50. `
            num-=50;

        }else if(num > 10){
            nota10++,
            string += `${nota10} nota(s) de 10. `
            num-=10;

        }else if(num > 5){
            nota5++;
            string += `${nota5} nota(s) de 5. `
            num-=5;

        }else if(num >= 1){
            nota1++;
            string += `${nota1} nota(s) de 1. `
            num-=1;
        }
    }

    console.log(string);
    
}

troco(18);