const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // todos os estilos computados de CSS no body
const backgroundColorBody = estilosBody.backgroundColor; // pegou a cor de fundo do body
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}