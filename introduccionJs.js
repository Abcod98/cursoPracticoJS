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