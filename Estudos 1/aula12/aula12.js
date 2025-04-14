let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varD = varA; // A
varA = varB // B
varB = varC // C
varC = varD // A

// [varA, varB, varC] = [varB, varC, varA] desse jeito funciona também

console.log(varA, varB, varC);