const textoeje1:HTMLElement | null = document.getElementById('textoeje1');
const numeje1:HTMLElement | null = document.getElementById('numeje1')
const booleanoeje1:HTMLElement | null = document.getElementById('booleanoeje1')
const dateeje1:HTMLElement | null = document.getElementById('dateeje1')

const Texto: string = "Hola, TypeScript";
const Numero: number = 123;
const Booleano: boolean = true;
const Fecha: Date = new Date(2024, 8, 9); 


if(textoeje1) textoeje1.innerHTML = `<p> Texto: ${Texto}</p>`
if(numeje1) numeje1.innerHTML = `<p> Numero: ${Numero}</p>`
if(booleanoeje1) booleanoeje1.innerHTML = `<p> Booleano: ${Booleano}</p>`
if(dateeje1) dateeje1.innerHTML = `<p> Fecha: ${Fecha}</p>`


const convertirNum:HTMLElement | null = document.getElementById('convertirNum')

const NumString: number = 456

function convertirNumAString(numero: number){
    return numero.toString()
}

if(convertirNum) convertirNum.innerHTML = `<p>Numero convertido a cadena: ${convertirNumAString(NumString)}</p>`


const sumarArray: HTMLElement | null = document.getElementById('sumaArray')

const array: number[] = [1,2,37,54,45,16]
let resultadoArray:number = 0

for (let i = 0; i<array.length; i++) {
    resultadoArray += array[i]
}
if(sumarArray) sumarArray.innerHTML = `<p>Suma del array: ${resultadoArray}</p>`



const estudiante :HTMLElement | null = document.getElementById('estudiante')

interface estudianteObj {
    nombre: string;
    edad: number;
    curso: string;
}

const estudiante1:estudianteObj={
    nombre:"Juan",
    edad:20,
    curso:"Matematicas"
}

if(estudiante) estudiante.innerHTML = `
<p>Estudiante: ${estudiante1.nombre}</p>
<p>Edad: ${estudiante1.edad}</p>
<p>Curso: ${estudiante1.curso}</p>
`


const direccion : HTMLElement | null = document.getElementById('direccion')

type Direccion ={
    calle: string;
    ciudad: string;
    cp: number;
}
const miDireccion: Direccion={
    calle: "Av. Principal",
    ciudad: "Guaymallen",
    cp:12345
}
if(direccion) direccion.innerHTML = `
<p>Calle: ${miDireccion.calle}</p>
<p>Ciudad: ${miDireccion.ciudad}</p>
<p>CP: ${miDireccion.cp}</p>
`


const usuarioSaludo: HTMLElement | null = document.getElementById('saludo')
interface UserSaludo{
    nombre:string
    correo: string
    saludar(): string
}

const userSaludar: UserSaludo = {
    nombre: "Ana",
    correo:  "ana@gmail.com",
    saludar: function(): string {
        return `Hola mi nombre es ${this.nombre}`
    },
}

if(usuarioSaludo) usuarioSaludo.innerHTML = `<p>${userSaludar.saludar()}</p>`


const persona: HTMLElement|null = document.getElementById('persona')

class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number) {
        this.edad = edad
        this.nombre = nombre
    }
    presentacion() {
        return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

let persona1 = new Persona('Carlos',30)
if(persona) persona.innerHTML = `<p>${persona1.presentacion()}</p>`


const identidad: HTMLElement|null = document.getElementById('identidad')


function iden<T>(valor: T): T {
    return valor;
    }
    
const valorNumber = iden<number>(123);
const valorString = iden<string>('texto');

if(identidad) identidad.innerHTML = `
<p>Identidad del numero: ${valorNumber}</p>
<p>Identidad del texto: ${valorString}</p>
`


const colores:HTMLElement|null = document.getElementById('colores')

enum color{
    AZUL = "Azul",
    ROJO = "Rojo",
    VERDE = "Verde"
}

if(colores) colores.innerHTML = `Color favorito: ${color.AZUL}`
