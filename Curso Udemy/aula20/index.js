// Objetos
/*
    // Utilizamos { Atributos } para criar objetos
    const pessoa1 = {
        // Atributos
        nome: 'Jorge',
        sobrenome: 'Souza',
        idade: 21
    };

    // Acessar atributos
    console.log(pessoa1.nome); // Jorge
    console.log(pessoa1.sobrenome); // Souza
    console.log(pessoa1.idade); // 21
    
    // Podemos criar uma função que cria objetos - denominada de "Factory"
    function criaPessoa(nome, sobrenome, idade) {
        // Simplificação
        return { nome, sobrenome, idade };
        // Mais longo
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
    }
    
    const pessoa1 = criaPessoa('Jorge', 'Souza', 21);
    const pessoa2 = criaPessoa('Gabrielle', 'Oliveira', 21);
    
    console.log(pessoa1.nome, pessoa2.nome); // Jorge Gabrielle
*/

// Funções dentro de Objetos denominadas como Métodos
const pessoa1 = {
    nome: 'Jorge',
    sobrenome: 'Souza',
    idade: 21,

    // Método - não utilizamos o function em objetos
    // this usado para referenciar qualquer atributo dentro do objeto
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala(); // Jorge Souza está falando oi...
pessoa1.incrementaIdade(); // A minha idade atual é 21.
pessoa1.fala(); // Jorge Souza está falando oi...
pessoa1.incrementaIdade(); // A minha idade atual é 22.