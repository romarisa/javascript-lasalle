
console.log("%cF%cu%cn%cc%ci%co%cn%cs", "font-weight: bold; color: maroon", "font-weight: bold; color: red","font-weight: bold; color: orange","font-weight: bold; color: yellow","font-weight: bold; color: green","font-weight: bold; color: blue","font-weight: bold; color: purple","font-weight: bold; color: pink");

// FUNCIÓN QUE DEVUELVE UNA STRING POR LA CONSOLA
function saludar() {
    console.log("hola, clase!"); // no sale nada, por eso es que la tengo que llamar con saludar(). By the way, es un verbo, es como "mostrar al usuario" por la consola
}

saludar() // con esto es que llamo a la función. Cuando llamo(call) a la función, se ejecuta el código que hay dentro de sus corchetes


// FUNCIÓN QUE DEVUELVE UNA STRING
function saludo() {
    return "hola, clase!"
}

saludo() 
console.log(saludo());

// es un sustantivo. Devuelve el usuario. Es importante usar verbo o sustantivo o lo que sea dependiendo lo que la funció hace

// FUNCIÓN CON UNA PARÁMETRO QUE MUESTRA UNA STRING POR LA CONSOLA
function saludarPersona(nom) {
    console.log(`hola, ${nom}!`);
}

saludarPersona("David")
saludarPersona("Gonzalo")
saludarPersona("Carlos")

// FUNCIÓN CON UNA PARÁMETRO QUE DEVUELVE UNA STRING PERSONALIZADA
function saludoPersona(nom) {
    return `hola, ${nom}!`
}

console.log(saludoPersona("Alberto"));
console.log(saludoPersona("Myrella"));
console.log(saludoPersona("Xavi"));



// EJERCICIO: hacer una función a la que le pasemos un dni y nos lo DEVUELVA ofuscado. (que le pasemos el dni significa que tiene un parámetro)
function dniOfuscado(dni) {
    return dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
}

console.log(dniOfuscado("12345678A"));


// EJERCICIO: función que ofusca el dni guardado en una variable
dni = "98765432B"

function ofuscarDni() {
    dni = dniOfuscado(dni)
}

ofuscarDni();
console.log(dni);

/* otras versiones
function ofuscarDni() {
    let ofus // variable auxiliar
    ofus = dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
    dni = ofus
}

function ofuscarDni() {
    dni = dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X") // reasignando directamente
}
*/

// no es console.log dentro de la funnción porque no dice que muestre cosas por la consola. Es por el requerimiento técnico del ejercicio.
// por qué el nombre de la función no es un verbo? porque no hace cosas, si no devuelve cosas: un DNI ofuscado. porque modifica una cosa que yo ya tengo que es mi variable dni.

/* versión arrow
const dniOfuscado = dni => dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")
*/


// EJERCICIO: una función a la que le pases un array de dos elementos y te devuelva el array invertido

gatigos = ["🐱","🐶"]

function arrayInvertit(array) {
    return array.toReversed()
}

console.log(arrayInvertit(gatigos))
console.log(arrayInvertit(["A", "B"]));

/*  otras versiones
function arrayInvertit(array) {
    let arrayInv = array.toReversed()
    return arrayInv
}
    
function arrayInvertit(array) {
    array.reverse();
    return array;
} 

function arrayInvertit(array) {
    let [a, b] = array
    return [b, a]
}
 
function arrayInvertit(array) {
    let a = array[0]
    let b = array[1]
    return [b, a]
}
*/

console.log(arrayInvertit);

arrInv = arrayInvertit // asigna la definición de la funciín a otra "variable"

console.log(arrInv);

console.log(arrInv(["A", "B"]))

// FUNCIONES FLECHA ----------------------------------------------------------------

const logRojo = (content) => {
    console.log("%c" + content, "color: red");
}

/* es lo mismo que poner  
    function logRojo(content){
    }
*/

const logAzul = (content1, content2 = "") => {
    console.log("%c" + content1 + content2, "color: blue");
}

logRojo("Hola, Omar!");
logAzul("Hola, ", "Omar!")

const decirHola = () => {   // sin parámetros
    console.log("Hola!");
}

decirHola()

const decirAdios = _ => {   // sin parámetros
    console.log("Adios!");
}

decirAdios()

const suma = (a, b) => {
    return a + b
}

console.log(suma(2, 5));

const resta = (a, b) => a - b // return implicito
const major = (a, b) => a > b // return implicito

console.log(resta(5, 2));
console.log(major(5, 2));

const preguntar = () => console.log("¿Qué tal?"); // ! ojo, función que no devuelve nada

preguntar();

console.log(preguntar());
console.log(console.log("Omar")); // console.log() tampoco devuelve nada

// Parámetros default -------------------------------------------------------

function logColor(content, color = "purple") {  // paràmetro con valor default
    console.log("%c" + content, "color: " + color);
}

logColor("Arnau")
logColor("Arnau", "pink")

// TODO: paràmetre amb valor default amb condicional

// Funcions anónimes i autoexecutables ----------------------------------------

const getName = () => "Marc"
console.log("Hola, " + getName());

console.log(  (  () => "Hola, Roselly"  )()  );

// * funció anònima:
/*
(params) => { 
    aquí hi ha codi
    aquí hi ha més codi
    return bla bla bla
}
*/

// *  funció autoexecutable:
(function cosa(param) {
    console.log("Sóc autoexecutable " + param);
})("yupiiii");

// *  funció anònima i autoexecutable:
cosa = (function (param) {
    console.log("Sóc anònima i autoexecutable " + param);
})("yupiiii");

console.log(cosa); // undefined perquè la funció no retorna res

// Funcions callback --------------------------------------------------------
function logCustom(content, log) {
    log(content)
}

logCustom("Omar", console.log)
logCustom("Omar", logRojo)
logCustom("Omar", logAzul)

logCustom("Omar", (txt) => {
    console.log("%c" + txt, "color: green");
})

logCustom("Omar", (txt) => console.log("%c" + txt, "color: orange"))

// Funciones temporales ---------------------------------------------------

setTimeout(logCustom("Me he ejecutado inmmediatamente!", logRojo), 2000)        // això s'executa immediatament
// setTimeout(() => logCustom("ME he ejecutado después de dos segundos!", logRojo), 2000)  // això triga dos segons

// setInterval(() => {
//     console.log("Ha pasado un segundo!")
//     console.log("");
// }, 1000);

setTimeout(() => {
    logCustom("ME he ejecutado después de dos segundos!", logRojo)

    setInterval(() => {
        console.log("Ha pasado un segundo!")
        console.log("");
    }, 1000);
}, 2000)  // això triga dos segons


// la funcion logCustom ejecuta la funcion que yo le pase como segundo parametro, con el primer prarametro como parametro, en este ejemplo el valor de text sera lo que le pase como primer parámetro que aqui es Omar