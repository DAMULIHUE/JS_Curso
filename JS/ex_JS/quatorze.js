const frutas = (fruta) => {

    fruta = fruta.toLowerCase();
    switch(fruta){
        case 'maça':
            console.log('vende isso aqui não doido');
            break;
        case 'kiwi':
            console.log('kiwi ta faltando doido');
            break;
        case 'melancia':
            console.log('ta aqui doido é 3 conto baratin ó');
            break;
        default:
            console.error('opção inválida moço');
            break;
    }
}

frutas('Maça');
frutas('KIiWI');
frutas('melancia');
frutas('cu de quem ta lendo');