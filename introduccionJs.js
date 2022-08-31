// Declarando variables
let nombre = "Abraham";
let apellido = "Tun Sanchez";
let usuario = "abcod";
let edad = "23";
let email = "abcod98@gmial.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

// Sumado variables (Dinero real)
let dineroReal = dineroAhorrado - deudas;

// Concatenando strings (Nombre Completo)
let completeName = nombre + " " + apellido;

// Imprimiendo valores
console.log ("El dinero real es: " + dineroReal);
console.log ("El nombre completo es: " + completeName);

// Funciones
function nombreCompleto (name, lastname) {
    return name + " " + lastname;
} 

function saludo (name, lastname, nickname) {
    const completeName = nombreCompleto(name, lastname);

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

// Condicionales
// Swithc
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basico":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertDuo":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

// If
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
}

// Ciclos
// For
for (let i=0; i<5; i++) { // Tenemos la variable, la condicion y un contador que aumenta
    console.log("El valor de i es: " + i);
}

for (let i=10; i>=2; i--) {// Tenemos la variable, la condicion y un contaodar que disminuye
    console.log("El valor de i es: " +i);
}

// While
let i=0; // En while se declara primero la variable a utilizar
while (i < 5) { // Tenemos la condicion
    console.log("El valor de i es: " + i);
    i++; // Contador en aumento
}

i = 10; // Ya declarada la variable solo combiamos su valor
while (i>=2) {// Tenemos la condicion
    console.log("El valor de i es: " +i);
    i--;// Contador disminuyendo
}

// Usando promt en un ciclo
let respuesta;
while (respuesta !=4) {
    let pregunta = prompt("¿Cuanto es 2 + 2?");
    respuesta = pregunta;
    if (respuesta == 4) {
        alert("Respuesta correcta");
    }
}

// Listas y Objetos
// Arrays
const array = [1,"Mensaje", true, // Podemos guardar cualquier tipo de dato
{nombre:"Abraham", edad: 23} // Los arrays tambien permiten guardar objetos
]

// Objetos
const obj = { // En los objetos debemos nombrar a nuestros elementos
    nombre: "Abraham",
    edad: 23,
    cursos: ["JavaScript","Videojuegos"]// Los objetos pueden contener arrays
}

// Imprimir valores de array
function imprimirValoresArray(arr) {
    console.log(arr[0]); // Imprime sus valores por pocicion
}

function imprimirElementoPorElemento(arr) {
    for (i=0; i<arr.length; i++) { // con .length nos da la catidad de elementos
        console.log("Posicion: " + i + " Valor: " + arr[i]); // imprime sus valores uno por uno
    }
}

// Imprimir valores de un objeto
function imprimirElementoPorElementoObjeto (obj) {
    const arr = Object.values(obj);
    for (i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}