const calcu = (x, op, y) => {
    switch(op){
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x*y);
            break;
        case '/':
            console.log(x/y);
            break;
        default:
            console.log('op ou numeros inválidos');
            break;
    }
}

calcu(2, '+', 3);
calcu(2, '-', 3);
calcu(2, '/', 3);
calcu(2, '*', 3);