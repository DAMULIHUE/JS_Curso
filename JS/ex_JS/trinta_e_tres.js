const concatArr = (arrInt=[1, 2, 3, 4], arrStrng=['a', 'b', 'c', 'd'], arrDouble=[1.1, 1.2, 1.3, 1.4]) =>{
    let arrResult1=arrInt.concat(arrStrng), arrResult2=arrInt.concat(arrDouble);

    console.log(arrResult1);
    console.log(arrResult2);
}

concatArr();