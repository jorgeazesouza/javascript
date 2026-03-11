// Avaliação de curto-circuito retorna o FALSY Value caso esteja sendo utilizado em um operador de comparação
// Retorna o "Valor mesmo!"

/* 
    Valor que avalia em falso - FALSY Values
    false
    0
    '' "" ´´ - string vazia
    null / undefined
    NaN

    // Qualquer coisa diferente dos valores em FALSY avalia em true no operador &&
    
    // se os valores são avaliados em verdadeiro ele retorna o ultimo valor
    console.log('Luiz' && 'Maria'); // Maria
    
    // retorna o valor avaliado em FALSY
    console.log('Jorge' && '' && 'Gabrielle'); // ''
    console.log('Jorge' && undefined && 'Gabrielle'); // undefined
    console.log('Jorge' && NaN && 'Gabrielle'); // NaN
    
    // Utilização
    function falaOi() {
        return 'Oi';
    }
    
    // const vaiExecutar = false;
    // console.log(vaiExecutar && falaOi()); // false
    
    // let vaiExecutar;
    // console.log(vaiExecutar && falaOi()); // undefined
    
    const vaiExecutar = 'joaozinho';
    console.log(vaiExecutar && falaOi()); // Oi
    
    // || - retorna o primeiro valor vardadeiro se qualquer uma das expressões for verdadeira
    // retorna o ultimo valor falso se todas forem falsas

    console.log(0 || false || null || 'Jorge Azevedo' || true); // Jorge Azevedo
    
    // Aplicação
    
    // Exemplo 1
    const corUsuario = null;
    const corPadrao = corUsuario || 'preto';
    console.log(corPadrao); // preto
    
    // Exemplo 2
    const corUsuario = 'vermelho';
    const corPadrao = corUsuario || 'preto';
    console.log(corPadrao); // vermelho
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // 'false'