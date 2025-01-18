console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
// todos tem .prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
    // split pertence a string, não esta no contexto lé
    //xico de reverse, ent deve-se acessar com 'this.'
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function(){
    return this[0];
}

console.log([1,2,3,4,5,6].first());
console.log(['a', 'b', 'c'].first());

// NÃO FAÇA ISSO 
String.prototype.toString = function() {
    return 'lascou tudo';
}

console.log('Escola cod3r'.toString());