/*
const nome01 = 'Jorge';
const sobrenome01 = 'Azevedo';
const idade01 = 20;

const nome02 = 'Gabrielle';
const sobrenome02 = 'Oliveira';
const idade02 = 20;

// podemos criar um objeto para simplificar
const pessoa1 = { // Utilizamos as {} para criar um objeto
    // Atributos - variáveis que estão dentro de uma variável
    nome: 'Jorge',
    sobrenome: 'Azevedo',
    idade: 20
};

const pessoa2 = {
    nome: 'Grabrielle',
    sobrenome: 'Oliveira',
    idade: 20
};

// Acessar os atributos
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

// Função para criar um objeto
function criaPessoa(nome, sobrenome, idade) {
    return { // factory - fábrica de objetos
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Jorge', 'Azevedo', 20);
const pessoa2 = criaPessoa('Jessica', 'Gregório', 25);
const pessoa3 = criaPessoa('Victor', 'Azevedo', 18);
const pessoa4 = criaPessoa('Fernanda', 'Azevedo', 49);
const pessoa5 = criaPessoa('Celso', 'Souza', 55);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

// podemos diminuir a função assim
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

// Função no objeto
const pessoa1 = {
    nome: 'Jorge',
    sobrenome: 'Azevedo',
    idade: 20,

    // quando uma função está dentro de um objeto ela é chamada de método
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); // this representa esta objeto
    },
};

pessoa1.fala();

// Outra função no objeto
const pessoa1 = {
    nome: 'Jorge',
    sobrenome: 'Azevedo',
    idade: 20,

    // quando uma função está dentro de um objeto ela é chamada de método
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`); // this representa esta objeto
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
*/

