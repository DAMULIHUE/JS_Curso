let estaEntre = (num, min, max, inclusive = false) =>{
    let result;
    if(inclusive){ result = num >= min && num <= max ? true : false; }
    else{ result = num > min && num < max ? true : false; }
    
    console.log(result);
}

estaEntre(50, 10, 100);
estaEntre(6, 100, 160);
estaEntre(3, 3, 150);
estaEntre(3, 3, 150, true);