// TODO: crea una función que al ejecutarla pida un animal por el prompt y te dé las instrucciones para cuidarlo (con un emoji del animal correspondiente)

function cuidaTuPokemon() {
    let pokemones = prompt("Introduce tu pokemon").trim().toLowerCase();

    if (pokemones == "pikachu") {
        console.log("saca a pikachu de la pokebola🔴");
    } else if (pokemones == "charmander") { 
        console.log("a charmander le gustan las fogatas🔥");
    } else if  (pokemones == "psyduck") {
        console.log("lleva a psyduch al lago💦");
    } else if (pokemones == "toguepi") {
        console.log("carga a tu toguepi en brazos👩🏻‍🍼");
    } else {
        console.log("no tienes pokemones😞");  
    }
}

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

