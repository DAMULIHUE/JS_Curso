const calc = (x, y) => {
    if(isNaN(x) || isNaN(y)){
        return console.error('x ou y nao eh um numero');
    } 
        const ops = [
            {op: '+', result: x+y},
            {op: '-', result: x-y},
            {op: '*', result: x*y},
            {op: '/', result: x/y},
        ];

    ops.forEach((element) => console.log(`x ${element.op} y = ${element.result}`));
}

calc(10, 'asas');
calc(10, 40);