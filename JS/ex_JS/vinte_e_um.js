const conveniado = (idade) =>{
    let preco = 100;
    if(idade < 10){
        preco += 80;
    }else if(idade < 30){
        preco += 50
    }else if(idade <= 60){
        preco += 95
    }else if(idade > 60){
        preco += 130;
    }

    console.log('c vai pagar $' + preco);
}

conveniado(45);