const negativosis = (arr = [1, -1, -40, 20, 400, 21, 23, 69, -2]) =>{
    let negativos = 0;

    arr.forEach((element) => {
        if(element < 0){ negativos++; }
    })

    console.log(negativos);
}

negativosis();