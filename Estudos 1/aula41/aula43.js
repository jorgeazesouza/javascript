// Escreva uma função que escreva e retorne o seguinte:
// Número divisivel por 3 = Fizz
// Número divisivel por 5 = Buzz
// Número divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 à 100

function divTres(num) {
    if (typeof(num) === 'string') {
        return num;
    } else if (typeof(num) == 'number') {
        if (num >= 0 && num <= 100) {
            
        }
        if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
        } else if (num % 3 === 0) {
            return 'Fizz';
        } else if (num % 5 === 0) {
            return 'Buzz';
        } else {
            return num;
        }
    } else {
        console.log('Erro!');
    }
}

console.log(divTres('125'));
