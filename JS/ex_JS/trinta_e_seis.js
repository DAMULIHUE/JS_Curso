multipli = (arr=[1, 2, 3, 4, 5], x) =>{
    let result = [];
    arr.forEach((element, i) =>{
        result[i] = element*x;

    })

    console.log(result);
}

multipli5 = (arr=[1, 2, 3, 4, 5], x) =>{

    let result = [];
    arr.forEach((element, i) =>{
        result[i] = element>5 ? element*5 : 'menor q 5';

    })

    console.log(result);
}

multipli5([1, 2 ,3, 4, 5, 6, 7, 8, 9, 10],5);