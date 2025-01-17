const negativosis = (arr = [2, 3, 3, 5, 7, 10]) =>{
    
    let quociente = 0, divisor = 0;

    arr.forEach((element, i) => {
        quociente += element;
        divisor++;
    })

    console.log(quociente/divisor);
}

negativosis();