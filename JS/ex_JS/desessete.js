const aumentoPlano = (plano, salario) =>{

    plano = plano.toLowerCase();
    switch(plano){
        case 'a':
            console.log(salario + salario * 10/100);
            break;
        case 'b':
            console.log(salario + salario * 15/100);
            break;
        case 'c':
            console.log(salario + salario * 20/100);
            break;
        default:
            console.log('plano inválido');
            break;
    }
}

aumentoPlano('A', 1200);
aumentoPlano('B', 1200);
aumentoPlano('c', 1200);