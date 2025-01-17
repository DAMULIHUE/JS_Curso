const pedido = (codigo, quantia) =>{
    let pedido, preco;
    switch(codigo){
        case 100:
            pedido = 'cachorro quente';
            preco = 3;
            break;
        case 200:
            pedido = 'hámburguer simples';
            preco = 4;
            break;
        case 300:
            pedido = 'cheeseburguer';
            preco = 5.50;
            break;
        case 400:
            pedido = 'bauru';
            preco = 7.50;
            break;
        case 500:
            pedido = 'refrigerante';
            preco = 3.50;
            break;
        case 600:
            pedido = 'Suco';
            preco = 2.80;
            break;
        default:
            console.log('pedido inválido');
            break;
    }

    console.log(`Você vai pagar exatos: ${preco * quantia} por ${quantia} ${pedido}`);
}

pedido(500, 12);