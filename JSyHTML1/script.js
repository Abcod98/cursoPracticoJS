const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pclase = document.getElementsByClassName('.pclase');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value); 

console.log({
    h1,
    p,
    pclase,
    pid,
    input
}); 

h1.innerText="Cambio de titulo con JavaScript";

console.log(h1.getAttribute('atributo'))
h1.setAttribute('atributo', 'CambioValorAtributo')

h1.classList.add('rojo'); // añade propiedad en clase
h1.classList.remove('verde'); // elimina propiedad en clase
h1.classList.toogle  //condiciona las clases que tengamos
h1.classList.contains //nos regresa true o false

input.value = "123";

const img = document.createElement('img');
img.setAttribute('src', 'url-de-la-imagen');
pid.append(img)