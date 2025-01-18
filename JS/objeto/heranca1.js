const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.prototype);
console.log(ferrari.__proto__); // procura um atributo em toda cadeia de prototipos
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); // não tem prototypo acima dele na hierarquia

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);