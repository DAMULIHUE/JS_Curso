// Closure: é o escopo criado
//quando se define uma função

//Esse escopo permite a função
//acessar variaveis externas à
//função e manipula-as 

//contexto léico em ação:
const x = 'global';

function fora(){
    const x = 'local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFunc = fora();
console.log(minhaFunc());