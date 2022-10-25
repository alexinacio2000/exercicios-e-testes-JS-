/* const array = [1, 2, 3];
array.push(4);
array[0] = 'Alex';
console.log(array); */

/* const pessoa1 = {
    nome: 'Alex',
    sobrenome:  'Inácio',
    idade: 22   
};

console.log(pessoa1.nome); */

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Alex', 'Inácio', 22);
console.log(pessoa1.sobrenome);
