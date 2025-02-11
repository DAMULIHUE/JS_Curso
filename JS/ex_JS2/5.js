function maiorOuIgual(x, y){
    const result = typeof x == typeof y ? x>=y : false;
    console.log(result);
}

maiorOuIgual(0, "0");
maiorOuIgual(0, 0);
maiorOuIgual(5, 0);