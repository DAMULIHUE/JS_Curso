const maiorMenor = (arr = [1, -1, -40]) =>{
    let menor=arr[0];
    let maior=arr[0];

    arr.forEach((element) => {
        if(element < menor){ menor=element; }
        if(element > maior){ maior=element; }
    })

    console.log(menor, maior);
}

maiorMenor();