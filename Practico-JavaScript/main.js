//Ejercicio 2:
//Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y haz que c sea la suma de a y b. Imprime el resultado en la consola.

var a = 5
var b = 10
var c = a+b

console.log(`La suma de a + b es: ${c}`)

//Ejercicio 3:
//Escribe un programa que pida al usuario su nombre y lo almacene en una variable. Luego, imprime un saludo en la consola que incluya el nombre del usuario.

//var nombre = prompt("¿Cuál es tu nombre?");
//console.log(`Hola, ${nombre}!`);

//Ejercicio 4:
//Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado en la consola.
var numberMax = 0
var a = 10
var b = 1
var c = 55

if(a > numberMax){
  numberMax = a;
}
if (b > numberMax){
  numberMax= b
} 
if(c > numberMax){
  numberMax = c;
}
console.log(`El numero mas grande es: ${numberMax}`)

//Ejercicio 5:
//Crea un programa que pida al usuario un número y determine si es par o impar.

//var number = prompt("Ingrese un numero y te dire si es par o impar")

if(number%2==0){
  console.log("el numero es par")
} else{
  console.log("el numero es impar")
}

//Ejercicio 6:
//Crea un script que inicialice una variable en 10 y luego use un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0. Imprime el valor de la variable en cada iteración.

var number = 11

while( number > 0){
  number--
  console.log(number)
}

//Ejercicio 7:
//Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.

//do{
//var number = prompt("Ingrese un numero mayor a 100")
//}while (number <= 100)
//
//console.log(`Ingresaste un numero mayor a 100: ${number}`)

//Ejercicio 8:
//Escribe una función llamada esPar que reciba un número como parámetro y retorne true si el número es par y false si es impar. Prueba la función con diferentes números.


//function esPar(number){
//    if(number%2==0){
//      number = true
//      console.log(`El numero elegido es par: ${number} `)
//    } else{
//      number = false
//      console.log(`El numero elegido es par: ${number} `)
//    }
//}
//
//var number = prompt("Elige un numero")
//esPar(number)

//Ejercicio 9:
//Crea una función llamada convertirCelsiusAFahrenheit que reciba un valor en grados Celsius y lo convierta a Fahrenheit. La fórmula es F = C × 1.8 + 32. Muestra el resultado en la consola.

const convertirCelsiusAFahrenheit = (Celsius) => {
  var Fahrenheit = (Celsius*1.8+32)
  console.log(`${Celsius}°C son equivalentes a ${Fahrenheit}°F`)
};

convertirCelsiusAFahrenheit(45);

//Ejercicio 10:
//Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.

let persona = {
  nombre: "Ulises",
  apellido:"Guzman",
  ciudad: "Mendoza",
}
function cambiarCiudad(persona){
  var nuevaCiudad = "Barcelona"
  persona.ciudad = nuevaCiudad
}
cambiarCiudad(persona)
console.log(persona)


//Ejercicio 11:
//Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.

let libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  año: 10
}

function antiguedad(libro){
  if(libro.año > 10){
    var antiguedadlibro = true
    console.log(`El libro ${libro.titulo} es antiguo ${antiguedadlibro}`)
  } else{
    var antiguedadlibro = false
    console.log(`El libro ${libro.titulo} es antiguo ${antiguedadlibro}`)
  }
}
antiguedad(libro)

//Ejercicio 12:
//Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array. Muestra el array original y el nuevo array en la consola.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicadosPorDos = [];

for (let i = 0; i < numeros.length; i++) {
    multiplicadosPorDos.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array con números multiplicados por 2:", multiplicadosPorDos)

const pares = []

for (let i = 1; i <= 20; i++) {
  if(i % 2 === 0){
    pares.push(i);
  }
} 
console.log(pares)

// Ejercicio 13:
// En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul

document.getElementById("buttonBlue").addEventListener("click",()=>{
  
  const parrafos = document.querySelectorAll(".text")
  parrafos.forEach(p =>{ 
    
    if(p.style.color === "blue"){
      p.style.color = "black"
    }else {
      p.style.color = "blue"
    }
  })
})

document.getElementById("mostrarTexto").addEventListener("click",() =>{

  const alerta = document.getElementById("campoTexto").value
  alert(alerta)
})





const lista = document.getElementById('miLista')
const items = lista.getElementsByTagName('li')

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        console.log(items[i].textContent)
    })
}


const campoTexto = document.getElementById('campoTexto2')
const deshabilitarBtn = document.getElementById('deshabilitarBtn')
const habilitarBtn = document.getElementById('habilitarBtn')


deshabilitarBtn.addEventListener('click', () => {
    campoTexto.disabled = true;
    deshabilitarBtn.disabled = true; 
    habilitarBtn.disabled = false
})


habilitarBtn.addEventListener('click', () => {
    campoTexto.disabled = false
    deshabilitarBtn.disabled = false
    habilitarBtn.disabled = true
})