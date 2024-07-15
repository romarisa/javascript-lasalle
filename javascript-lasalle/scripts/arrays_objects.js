console.log("Aquest és el JS d'arrays");

data = ["Dog", "😻", 23, true, "💩" ];

dog = "🐶";
cat = "🐱";
racoon = "🦝";
pig = "🐷";
koala = "🐨";
poop = "💩";

animals = [dog, cat, racoon, pig, koala, koala, koala];

console.log(animals);

animals[5] = racoon;

console.log(animals);

console.log(data[1]); // podem accedir als elements d'un array usant el seu INDEX

console.log(`L'array data conté ${data.length} elements`); // length és una PROPIETAT dels arrays

// ----------------------------------------------------------------

alumnne = {
    nom: "gozalo",
    cognom: "pino",
    edat: 42,
    hobbie: "🎨",
    animals: [dog, animals[4]]
}

console.log(alumne);

alumne.edat = 46;   // escriptura d'una propietat d'un objecte
edatGonzalo = alumne.edat;  // lectura d'una propietat d'un objecte

alumne.hobbie = "🪘";
edatGonzalo = alumne.edat;

console.log(`El ${alumne.nom} ${alumne.cognom} té ${alumne.edat} anys i li agrada ${alumne.hobbie}`);

profe = {};

console.log(profe);

profe.nom = "Omar"
profe.edat = 33

console.log(profe);

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

// EXERCISE

signs = ["⭐️","🌛","🪐",8,"🌘"];

saturn = "🪐";

console.log(signs);

person = {
    name: "usagi",
    lastname: "tsukino",
    age: 16,
    schoolHours:8,
    zodiacSign: [saturn, signs[1]]
}

console.log(person)

console.log(`${person.name} ${person.lastname} is ${person.age} years old and her zodiacal sign is ${person.zodiacalSign}`);

console.log(`${person.age}"+${person.schoolHours}`);


// ctl + cmd + space = emoji