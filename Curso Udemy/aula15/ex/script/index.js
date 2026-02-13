const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML = `<p>Seu nome é: ${nome}.<p/>`;
document.body.innerHTML += `<p>Seu nome tem ${nome.length} letras.<p/>`;
document.body.innerHTML += `<p>A segunda letra do seu nome é: ${nome[1]}<p/>`;
document.body.innerHTML += `<p>Qual o primeiro índice da letar a no seu nome? o primeiro índice da letra a é ${nome.indexOf('a')}<p/>`;
document.body.innerHTML += `<p>Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('a')}<p/>`;
document.body.innerHTML += `<p>As últimas 3 letras do seu nome são: ${nome.slice(-3)}<p/>`;
document.body.innerHTML += `<p>As palavras do seu nome são: ${nome.split(' ')}<p/>`;
document.body.innerHTML += `<p>Seu nome com letras maiúsculas: ${nome.toUpperCase()}<p/>`;
document.body.innerHTML += `<p>Seu nome com letras minúsculas: ${nome.toLowerCase()}<p/>`;

