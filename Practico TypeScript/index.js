"use strict";
const textoeje1 = document.getElementById('textoeje1');
const numeje1 = document.getElementById('numeje1');
const booleanoeje1 = document.getElementById('booleanoeje1');
const dateeje1 = document.getElementById('dateeje1');
const Texto = "Hola, TypeScript";
const Numero = 123;
const Booleano = true;
const Fecha = new Date(2024, 8, 9);
if (textoeje1)
    textoeje1.innerHTML = `<p> Texto: ${Texto}</p>`;
if (numeje1)
    numeje1.innerHTML = `<p> Numero: ${Numero}</p>`;
if (booleanoeje1)
    booleanoeje1.innerHTML = `<p> Booleano: ${Booleano}</p>`;
if (dateeje1)
    dateeje1.innerHTML = `<p> Fecha: ${Fecha}</p>`;
const convertirNum = document.getElementById('convertirNum');
const NumString = 456;
function convertirNumAString(numero) {
    return numero.toString();
}
if (convertirNum)
    convertirNum.innerHTML = `<p>Numero convertido a cadena: ${convertirNumAString(NumString)}</p>`;
const sumarArray = document.getElementById('sumaArray');
const array = [1, 2, 37, 54, 45, 16];
let resultadoArray = 0;
for (let i = 0; i < array.length; i++) {
    resultadoArray += array[i];
}
if (sumarArray)
    sumarArray.innerHTML = `<p>Suma del array: ${resultadoArray}</p>`;
const estudiante = document.getElementById('estudiante');
const estudiante1 = {
    nombre: "Juan",
    edad: 20,
    curso: "Matematicas"
};
if (estudiante)
    estudiante.innerHTML = `
<p>Estudiante: ${estudiante1.nombre}</p>
<p>Edad: ${estudiante1.edad}</p>
<p>Curso: ${estudiante1.curso}</p>
`;
const direccion = document.getElementById('direccion');
const miDireccion = {
    calle: "Av. Principal",
    ciudad: "Guaymallen",
    cp: 12345
};
if (direccion)
    direccion.innerHTML = `
<p>Calle: ${miDireccion.calle}</p>
<p>Ciudad: ${miDireccion.ciudad}</p>
<p>CP: ${miDireccion.cp}</p>
`;
const usuarioSaludo = document.getElementById('saludo');
const userSaludar = {
    nombre: "Ana",
    correo: "ana@gmail.com",
    saludar: function () {
        return `Hola mi nombre es ${this.nombre}`;
    },
};
if (usuarioSaludo)
    usuarioSaludo.innerHTML = `<p>${userSaludar.saludar()}</p>`;
const persona = document.getElementById('persona');
class Persona {
    constructor(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }
    presentacion() {
        return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
let persona1 = new Persona('Carlos', 30);
if (persona)
    persona.innerHTML = `<p>${persona1.presentacion()}</p>`;
const identidad = document.getElementById('identidad');
function iden(valor) {
    return valor;
}
const valorNumber = iden(123);
const valorString = iden('texto');
if (identidad)
    identidad.innerHTML = `
<p>Identidad del numero: ${valorNumber}</p>
<p>Identidad del texto: ${valorString}</p>
`;
const colores = document.getElementById('colores');
var color;
(function (color) {
    color["AZUL"] = "Azul";
    color["ROJO"] = "Rojo";
    color["VERDE"] = "Verde";
})(color || (color = {}));
if (colores)
    colores.innerHTML = `Color favorito: ${color.AZUL}`;
