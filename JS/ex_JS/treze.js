const diaUtil = (dia) => {
    switch (dia) {
        case 1:
        case 7:
            console.log('Fim de semana');
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil');
            break;
        default:
            console.log('Dia inválido');
            break;
    }
}

diaUtil(1);
diaUtil(2);
diaUtil(3);
diaUtil(4);
diaUtil(5);
diaUtil(6);
diaUtil(7);
diaUtil(8);