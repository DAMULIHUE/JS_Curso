let ola = _ => 'ola';
//console.log(ola());

//aula 2    
function pessoa() {
    this.idade = 0;

    setInterval( () =>{
        this.idade++
        console.log(this.idade);
    }, 1000);
}   

//new pessoa;

//aula 3

let comparaComThis = function(param){
    console.log(this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow = comparaComThisArrow.bind(obj);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(obj);


