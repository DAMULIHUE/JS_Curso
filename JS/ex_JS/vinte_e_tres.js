const notas = (n1, n2, n3) =>{
    //n1 = n1 > n2 ? n1 > n3 ? n1 : n3 : n2;
    if(n2 > n1){ [n2, n1] = [n1, n2] }
    if(n3 > n1){ [n3, n1] = [n1, n3] }
    const media = (n1 * 4 + n2 * 3 + n3 * 3)/(4+3+3);

    console.log(n1, n2, n3);
    console.log(media);
}

notas(12, 3, 11);