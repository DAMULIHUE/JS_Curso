const pares = (arr = []) => {
    
    let impar = 0, par = 0;

    arr.forEach((element) => {
        if(element%2 == 0){ par++; }
        if(element%2 == 1){ impar++; }
    })

    console.log('impar:', impar, 'par:', par)
}

pares([2, 3, 4, 5, 6, 6, 10, 12, 12, 40, 43, 69, 1234123141234324635454573257, 234]);

