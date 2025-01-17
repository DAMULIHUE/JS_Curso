const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

//fabricantes.forEach(imprimir);
//fabricantes.forEach( a => console.log(a) );

//aula 2

const notas = [4.4, 3.4, 7.5, 3.645, 9.9, 10.2, -8, 9, 6.999];

// s callback
let notasBaixas1 = [];

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
}

//console.log(notasBaixas1);

// c callback
let notasBaixas2 = []

const notasMenorQueSete = nota => nota < 7;
notasBaixas2 = notas.filter(notasMenorQueSete);

//console.log(notasBaixas2);


//aula 3

//exemplo no Browser
document.getElementsByTagName('body')[0].onclick = e => console.log('ocorreu evento'); //retorna um array e eu acesso o primeiro 
