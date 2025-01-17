const vendaCarros = (carro) => {
    switch(carro){
        case 'hatchi':
            console.log('é teu PORRA');
            break;
        case 'ferrari':
        case 'pulga':
        case 'boga':
            console.log('certeza?');
            break;
        default:
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA');
            break;
    }
}

vendaCarros('hatchi');
vendaCarros('pulga');
vendaCarros('AAAAAAAAAAAAAAAAAAAAAAAA');