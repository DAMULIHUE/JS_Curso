function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('bem vindo', 123);
const aula2 = new Aula('Até breve', 456);
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    // passa os valores para dentro do obj
    // e os valores (antes de entrarem no obj) são
    // alterados pela função "aula"
    return obj;
}

const aula3 = novo(Aula, 'Bem vindo', 123);
const aula4 = novo(Aula, 'Ate logo', 456);
console.log(aula3, aula4);
console.log(aula3.__proto__ === Aula.prototype);