console.log("%cCondicionals", "font-weight: bold");

text = "esto es un texto de prueba"

if (text.lenght >20) {
    console.log("se ha cumplido mi condición");   
}

nom = ""
// nom = prompt("Introdueix el teu nom")

nom = "albert"

if (nom == "omar") console.log("hola omar!");
else console.log("hola desconocido, tú no eres omar");

/* 
lo siguiente es la forma larga de lo anterior

if (nom == "omar") {
console.log("hola omar");
} else {
    console.log("hola desconocido, tú no eres omar");   
} */


var num = 18;

if (num < 10) {
    console.log("El número es menor a 10");
  } else {
    console.log("El número es igual o mayor a 10");
  }

/* 
if (condition) {
block of code to be executed if the condition is true - se ejecuta si se cumple mi condición
} */

// (==) es equivalencia, 
// (===) debe ser del mismo tipo, hay gente que usa siempre === porsiacaso
// else = si no


// text = prompt("Introdueix el text")

if (text.length > 20) {
    console.log("Se ha cumplido mi condición!");
}

//nom = prompt("Introdueix el teu nom")

if (nom == "Omar") console.log("Hola, Omar!");
else console.log("No eres Omar... Hola, desconocido!");


if (nom == "Omar") {
    console.log("Hola, Omar!");
} else 
    console.log("No eres Omar... Hola, desconocido!");

// el estilo del prompt es por defecto del navegador, no se puede personalizar

animal = "perro"
color = "verde"

if (animal == "perro") {
    console.log("Sácalo a pasear");
} else if(animal == "gato") {
    console.log("Limpia el arenero");
} else if (animal == "perro" && color == "verde") { // aquí no llega porque la primera condicion ya es true
    console.log("Qué raro eres!");
} else if (animal == "caballo") {
    console.log("Sal a cabalgar");
} else if (animal == "pez") {
    console.log("Ponle de comer");
} else {
    console.log("Pobrecito, no tienes ni gato ni perro ni caballo ni pez");
}

if (animal == "perro" || animal == "gato") console.log("Eres una básica");
// ! if (animal == "perro" || "gato") console.log("Eres una básica"); ERROR DE CONDICIÓN

animals = ["perro", "jerbo", "caballo", "pez"]
// ! if (animal == "perro" || "gato") console.log("Eres una básica"); ERROR DE CONDICIÓN


if (animals.includes("perro") && color == "verde") console.log("Qué raro eres!");
if (animals.includes("gato")) console.log("Limpia el arenero");
if (animals.includes("perro")) console.log("Sácalo a pasear");
if (animals.includes("caballo")) console.log("Sal a cabalgar");

if (animal == "pez") console.log("Ponle de comer"); 
else console.log("Pobrecito, no tienes pez");



personas = 4

switch (personas) {
    case 1:
        console.log("No aceptamos reservas para uno");
        break;
    case 2:
        console.log("Buenas noches, parejita");
        break;
    case 3:
        console.log("Hehehe sois multitud");
        break;
    case 4:
        console.log("¿Cita doble?");
        break;
    case 5:
        console.log("¡¡Cuánta gente!!");
        break;
    default:
        console.log("Eso no es un número aceptable");
        break;
}


// * Operadores booleanos: ==, ===, <, >, <=, >=, !=, ||, &&, !

console.log(1 == "1");
console.log(1 === "1");

//user = prompt("Introdueix el teu nom d'usuari")
/*
if (!user) {
    console.log("No estas logueado!");
} else {
    console.log("Bienvenido, " + user);
}
*/
// el signo de admiración significa "no user", si hay algun valor dentro del user, "no estás logueado será falso" , entonces se ejecutará lo de abajo "bienvenido..."


// EJERCICIO: crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)

function animalico() {  // Solución de Gonzalo
    let animal = prompt("introduce un nombre de animal").trim().toLowerCase();

    if (animal == "perro") {
        console.log("🐩: tienes que sacarlo a pasear 3 veces al dia minimo media hora");
    } else if (animal == "gato") {
        console.log("🐈: ni se te ocurra bañarlo, que se rallan");
    } else if (animal == "panda") {
        console.log("🐼: Dale bambu del bueno ahi");
    } else if (animal == "orangután" || animal == "orangutan") {
        console.log("🦧: Claramente no deberias tener un Orangutan");
    } else if (animal == "dragón" || animal == "dragon") {
        console.log("🐲: Quizas deberias dejar las drogas");
    } else {
        console.log("no sé cómo se cuida ese tipo de animal, introduce otro"); // tambien podria usarse un alert()
        animalico();
    }
}

// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

// TODO: crea una función que pida dos números y un símbolo y haga la operación correspondiente (+, -, *, /, %)

// TODO: crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido "Has pedido una camiseta 👕 azul 🔵 talla XL"