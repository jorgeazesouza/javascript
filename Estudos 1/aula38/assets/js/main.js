const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const esilosBody = getComputedStyle(document.body); // Pega todos os estilos do body
const backgroundColorBody = esilosBody.backgroundColor; // Pegou o background Color do Body
console.log(backgroundColorBody); // rgb(17, 86, 102)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}