const bhaskara = (ax2,bx, c) => {

    const delta = bx**2-4*ax2*c; //(b)^2 - 4ac
    
    const x1 = delta >= 0 ? (-bx + Math.sqrt(delta))/(2*ax2) : 'delta eh negativo';
    const x2 = delta >= 0 ? (-bx - Math.sqrt(delta))/(2*ax2) : 'delta eh negativo';

    console.log('x1: '+ x1);
    console.log('x2: '+ x2);
}

bhaskara(3, -2, -8);