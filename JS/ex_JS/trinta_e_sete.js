progArit = (a1 = 40, n = 3, r = 2) =>{
    for(let i=1; i <= n; i++){
        console.log(a1 + (i - 1)*r)
    }
}

progGeo = (a1 = 2, n = 3, r = 3) =>{
    for(let i=1; i <= n; i++){
        console.log(a1*=r)
    }
}

progArit();
progGeo();