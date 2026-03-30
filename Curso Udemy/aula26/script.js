// If e Else

// Estrutura condicional - If
// Pode ser utilizado sozinho
/*
    const hora = 10;

    // if (condição) { corpo da execução }
    if (hora < 12) {
        console.log('Bom dia!');
    }
    
    // Exemplo 2
    // const hora = 12;
    const hora = 13;
    
    if (hora <= 12) {
        console.log('Bom dia!')
        // podemos executar o que quisermos
        console.log(1 + 1);
    }
    
    // Estrutura condicional - Else If
    // Podemos utilizar vários Else Ifs
    // Sempre que utilizo a palavra else é preciso de um if e só posso ter um else na checagem 
    // Podemos utilizar somente o If e Else
    
    // Entre 0 e 11 - Bom Dia
    // Entre 12 e 17 - Boa Tarde
    // Entre 18 e 23 - Boa Noite
   
   const hora = 30;
   
   if (hora < 12) {
       console.log('Bom dia!');
    } else if (hora < 18) {
        console.log('Boa Tarde!');
    } else if (hora < 24) {
        console.log('Boa Noite!');
    } else {
        console.log('Este não é um horario valido.');
    }
*/

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa!');
} else {
    console.log('Não vou sair de casa.');
}