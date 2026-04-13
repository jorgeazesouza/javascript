// Escreva uma função que receba 2 números e retorne o maior deles

/*
// Solução
function largestNum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Arrow Function
const max = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}
*/
const max = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(max(10, 2));