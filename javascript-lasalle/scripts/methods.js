console.log("Mètodes arrays i strings");

text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "

// TODO: provar metodos trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()
// ! els mètodes d'strings no modifiquen la string, en generen una de nova ⚠

console.log(text.trim());

console.log(text.padStart(100,'A'));

console.log(text.replace("l'Omar",'la Roselly'));

console.log(text.replaceAll('string','strong'));

words = text.split(' ');
console.log(words[2]);

chars = text.split(' ');
console.log(chars[5]);

result = text.split('')
console.log(result);

words = text.split(' ');
console.log(words);

// TODO: gestionar dades així amb bucles i condicionals

data0 = "NOM Omar"
data1 = "COG Olmedo"
data2 = "AGE 33"

data = "NOM Omar COG Olmedo AGE 33"