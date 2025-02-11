let inverso = variavel => {    

    const result = typeof variavel == typeof Boolean() ? !variavel :
        typeof variavel == typeof Number() ? variavel *= -1 :
            `booleano ou número esperados, mas o parâmetro é do tipo ${typeof variavel}`;
    console.log(result);    
}

inverso(true);
inverso(6);
inverso("6");
inverso(fun =>{});
inverso([]);
