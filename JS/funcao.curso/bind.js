const pessoa = {
    saudacao: 'bom dia',

    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar(); 

const fala = pessoa.falar;
fala();

const falu = fala.bind(pessoa);
falu();




 