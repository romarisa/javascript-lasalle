console.log("Aquest és el JS d'arrays");

// caso 1: contiene text, text, number, boleean
data = ["Dog", "😻", 23, true];
console.log(data); 

// caso 2: aquí los varores (los emojis son textos, por eso van entre comillas)
dog = "🐶";
cat = "🐱";
racoon = "🦝";
pig = "🐷";
koala = "🐨";
poop = "💩";

animals = [dog, cat, racoon, pig, koala, koala, koala]; //contiene el contenido de las variables, no el nombre de las variables

//cuando creamos un array, el array esta creando un objeto complejo con el contenido de la variable

console.log(animals);

animals[5] = racoon; // estoy cambiando el koala en la posición 6 de mi variable animals

console.log(animals);

// podem accedir als elements d'un array usant el seu INDEX (concatenando strings)
console.log(data[1]); 

// length és una PROPIETAT dels arrays (interpolando strings)
console.log(`L'array data conté ${data.length} elements`); 

// ----------------------------------------------------------------

// Este es un objeto (los arrays tb son objetos) . Tiene un conjunto de parámetros que tienen una etiqueta. Cada uno de estos parámetros tiene un valor. El objeto no es un conjunto ordenado de valores, pero sus etiquetas estánn ordenadas alfabéticamente.

alumne = { 
    nom: "gozalo",
    cognom: "pino",
    edat: 42,
    hobbie: "🎨",
    animals: [koala, animals[1]]
}

console.log(alumne);

console.log(`El ${alumne.nom} ${alumne.cognom} té ${alumne.edat} anys i li agrada ${alumne.hobbie}`);

alumne.edat = 46;   // Escriptura d'una propietat d'un objecte. 
// estoy actualizando este dato, accediendo a esta propiedad. Estoy guardando el 46 dentro de alumne.edat . Siempre se guarda lo que está a la derecha, dentro de lo que está a la izquierda

edatGonzalo = alumne.edat;  // lectura d'una propietat d'un objecte

console.log(alumne, edatGonzalo);

console.log(`El ${alumne.nom} ${alumne.cognom} té ${alumne.edat} anys i li agrada ${alumne.hobbie}`);

profe = {}; // es un objeto vacío. le estoy diciendo a la máquina que deje un espacio para las propiedades que le voy a poner . tb puede ser let profe = {}, pero siempre he de colocar las llaves, si no, se ejecutará como undefined (significa que está inicializada pero no tiene nada dentro aún)

console.log(profe);

//aquí ya le estoy asignando las propiedades
profe.nom = "Omar"
profe.edat = 33

console.log(profe);

// es decir, puedo definir las propiedades como el ejemplo de "alumne" (con sus etiquetas dentro) o definirlo vacío, y después lo relleno, según la conveniencia de hará de una forma u otra

// ejemplo de arrays de objetos, tb veremos obbjetos que dentro tendrán arrays que dentro tendrán objetos

alumnes = [
    alumne,
    {
        nom: "Pablo",
        cognom: "Perez",
        edat: 19,
        hobbie: ""
    }
]

console.log(alumnes);

console.log("-------ejercicio de objetos de arrays-------");

// pokemones = ["charmander", "bulbasaur", "pidgeot", "pikachu", "vulpix"];

// TODO: crear un array con 5 objetos dentro que tengan las mismas 4 propiedades

pokemon = [
    {
        nombre: "charmander",
        tipo: "🔥",
        caracteristicas: ["ternura", "lealtad"],
        categoria: "dragon",
        nivel: 4,
    },
    {
        nombre: "bulbasaur",
        tipo: "planta",
        caracteristicas: ["fidelidad", "lealtad"],
        categoria: "semilla",
        nivel: 3,
    },
    {
        nombre: "pidgeot",
        tipo: "🌪",
        caracteristicas: ["protección", "lealtad"],
        categoria: "ave",
        nivel: 5,
    },
    {
        nombre: "pikachu",
        tipo: "⚡️",
        caracteristicas: ["lealtad", "lealtad"],
        categoria: "raton",
        nivel: 2,
    },
    {
        nombre: "vulpix",
        tipo: "🔥",
        caracteristicas: ["audacidad", "lealtad"],
        categoria: "zorro",
        nivel: 4,
    },
]

console.log("ejercio 1");
// crear un array con 5 objetos dentro que tengan las mismas 4 propiedades

console.log(pokemon);

console.log("------------------------------------------------");


console.log("ejercio 2");
// crear un array que contenga una lista de una de las propiedades de los objetos

nombres = [pokemon[1].nombre] // estoy creando un array de nombres

nombres = [pokemon[0].nombre, pokemon[1].nombre, pokemon[2].nombre, pokemon[3].nombre, pokemon[4].nombre] // luego hay que aplicar esto para cada objeto

console.log(nombres);

console.log("------------------------------------------------");


console.log("ejercio 3");
// crear una variable que contenga la suma de una propiedad numérica

nivelTotal = pokemon[0].nivel + pokemon[1].nivel + pokemon[2].nivel + pokemon[3].nivel + pokemon[4].nivel;

console.log("Nivel total de los pokemon :" + nivelTotal);

console.log("------------------------------------------------");


console.log("ejercio 4");
// mostrar por consola una frase que resuma las propiedades de cada objeto

console.log(`mi pokemon favorito es ${pokemon[0].nombre} (tipo ${pokemon[0].tipo}) y su poder principal es el ${pokemon[0].tipo}, además tiene ${pokemon[0].caracteristicas.length} características`);

console.log(`mi pokemon favorito es ${pokemon[1].nombre} (tipo ${pokemon[1].tipo}) y su poder principal es la ${pokemon[1].tipo}, además tiene ${pokemon[1].caracteristicas.length} características`);

console.log(`mi pokemon favorito es ${pokemon[2].nombre} (tipo ${pokemon[2].tipo}) y su poder principal es la ${pokemon[2].tipo}, además tiene ${pokemon[2].caracteristicas.length} características`);

console.log(`mi pokemon favorito es ${pokemon[3].nombre} (tipo ${pokemon[3].tipo}) y su poder principal es la ${pokemon[3].tipo}, además tiene ${pokemon[3].caracteristicas.length} características`);

console.log(`mi pokemon favorito es ${pokemon[4].nombre} (tipo ${pokemon[4].tipo}) y su poder principal es la ${pokemon[4].tipo}, además tiene ${pokemon[4].caracteristicas.length} características`);

console.log("------------------------------------------------");


console.log("ejercio 5");
// buscar una manera de mostrar por consola todos los objetos en forma de tabla

console.table(pokemon);

// ctl + cmd + space = emoji