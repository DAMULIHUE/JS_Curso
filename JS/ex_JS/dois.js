const triang = (l1, l2, l3) =>{

const tipoTriangulo = (l1 == l2 && l1 == l3 ? 'equilatero' : 
                            l1 == l2 || l1 == l3 || l2 == l3 ? 'isóceles' : 'escaleno');

    console.log(`é um triangulo ${tipoTriangulo}`);
}

triang(40, 30, 25);