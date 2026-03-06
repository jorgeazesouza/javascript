// Funções - Executa uma ação

// criar uma função
// função nomeDaFuncao(Parâmetro) { Corpo da função }

/*
    function saudacao() {
        console.log('Bom dia!');
    }

    // Chamando uma função com ()
    saudacao(); // Bom dia!

    function saudacao(nome) {
        console.log(`Bom dia! ${nome}`);
    }

    // (Argumento) - valor do parâmetro
    saudacao('Jorge'); // Bom dia! Jorge
    saudacao('Gaby'); // Bom dia! Gaby

    function saudacao(nome) {
        return `Bom dia! ${nome}`;
    }

    // retornar o valor de uma função
    const variavel = saudacao('Jorge');
    console.log(variavel); // Bom dia! Jorge
*/

/*
    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    }

    console.log(soma(2, 2)); // 4
    console.log(soma(3, 1)); // 4
    console.log(soma(5, 10)); // 15

    Tudo dentro do escopo da função não pode ser acessado por fora 
    console.log(resultado); // Erro

    const resultado = soma(2, 2);
    console.log(resultado); // 4

    Tudo abaixo da palavra return dentro da função não sera executado
    
    // Outros valores 
    const resultado = soma('Jorge', ' Azevedo');
    console.log(resultado); // Jorge Azevedo
    
    // Pré definir os valores do parâmetro
    function soma(num1 = 1, num2 = 1) {
        const resultado = num1 + num2;
        return resultado;
    }
    
    const resultado = soma(4);
    console.log(resultado); // 5


    // Função Anônima (dentro de uma variável)

    // Sempre quando atribuimos uma função precisamos utilizar ; no final
    const raizQ = function(num) {
        return num ** 0.5;
    };

    console.log(raizQ(9)); // 3
    console.log(raizQ(16)); // 4
    console.log(raizQ(25)); // 5
*/

    // Arrow Function (=>)
    const raizQ = (num) => {
        return num ** 0.5;
    };

    // simplificado:
    // const raizQ = num => num ** 0.5;

    console.log(raizQ(36)); // 6
    console.log(raizQ(49)); // 7
    console.log(raizQ(64)); // 8
