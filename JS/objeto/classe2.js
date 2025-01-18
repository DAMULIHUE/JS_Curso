class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome); // chama o construtor da class
                         // passada como extends
        this.profissao = profissao;
                        // torna profissao publico
                       // dentro da class
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva');
    }
}

const filho = new Filho;
console.log(filho);