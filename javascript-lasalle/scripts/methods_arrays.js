console.log("%cMethods de arrays", "font-weight: bold");

// Ejercicio: probar los métodos de concat(), join(), pop(), push(), shif(), unshift(), flat()

animals = ["🐶", "🐱", "🐭", "🐍", "🐘"]
colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"]


console.log("------------------------------------------------");
console.log("concat");

console.log(animals, colors);

console.log(animals.concat("🐮", {nombre: "vaca"}));
console.log(animals.concat(colors)); // une o concatena a los dos arrays
console.log([animals, colors]); // crea un array de arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);

console.log(children);



console.log("------------------------------------------------");
console.log("join");

console.log(animals.join(" + "));
console.log(animals.join());

console.log(animals.join(" 🔥 "));



// son lo mismo pero x delante y x detras
//pop, push (hacen las cosas por el final)
// shift y unshift (hacen las cosas por el principio)

console.log("------------------------------------------------");
console.log("pop"); // Elimina el último elemento y lo devuelve. Va quitando los últimos elementos uno a uno. El método pop en JavaScript es una herramienta útil cuando necesitas eliminar el último elemento de un array. Este método no solo elimina el último elemento, sino que también lo devuelve, lo que te permite trabajar con él si es necesario.

elefant = animals.pop();

console.log(animals);
console.log(animals.pop()); // me devuelve el último elemento 
// elefante = animals.pop() // por lo tanto puedo llamar elefante a esta variable, ya que el elefante es el último elemento del array animals. 



console.log(animals.pop());
console.log(animals);

const frutas = ["manzana", "banana", "naranja"]; 
const ultimaFruta = frutas.pop(); 
console.log(frutas); // ["manzana", "banana"] 
console.log(ultimaFruta); // "naranja"

// En el ejemplo anterior, pop elimina naranja del array frutas y la asigna a la variable ultimaFruta.


console.log("------------------------------------------------");
console.log("push"); // Añade un elemento y devuelve la nueva lenght del array. El método push en JavaScript se utiliza para agregar uno o más elementos al final de un array. Este método cambia la longitud del array y devuelve la nueva longitud.

const colores = ["rojo", "verde", "azul"]; 
const nuevaLongitud = colores.push("amarillo"); 
console.log(colores); // ["rojo", "verde", "azul", "amarillo"] 
console.log(nuevaLongitud); // 4

// En este ejemplo, push agrega «amarillo» al final del array colores y devuelve la nueva longitud, que es 4.

animals.push(elefant)
console.log(animals);
console.log(animals.push("🐍"));
console.log(animals);


console.log("------------------------------------------------");
console.log("flat");

// shift() y unshift() hacen lo mismo que pop() y push() pero en el principio del array

console.log("------------------------------------------------");
console.log("shift"); // removes the first element from an array and returns that removed element. This method modifies the original array.

let arr = [1, 2, 3];
let removedElement = arr.shift(); 

console.log(removedElement); // 1

// El siguiente código muestra el contenido del array miPescado antes y después de eliminar el primer elemento. También muestra el elemento eliminado:
var miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

console.log("miPescado antes: " + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log("miPescado después: " + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log("Elemento eliminado: " + eliminado);
// "Elemento eliminado: ángel"


console.log("------------------------------------------------");
console.log("unshift");// adds one or more elements to the beginning of an array and returns the new length of the array. This method also modifies the original array. El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

let arrz = [2, 3];
let newLength = arrz.unshift(1); // newLength = 3, arr = [1, 2, 3]


const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]



console.log("------------------------------------------------");
console.log("flat");

// flat() une en un único array el array y sus subsarrays. Puedes ponner en el paréntesis los niveles que quieres bajar

array = [1, 2, [3, 4, 5], [[6, 7], 8]]
console.log(array.flat()) // "aplana" un nivel
console.log(array.flat().flat()); // "aplana" dos niveles

console.log(array.flat(2));  // "aplana" hasta la profundidad que le digamos (puede ser Infinity)

console.log(array.flat(Infinity)); // "aplana" hasta la profundidad que le digamos


// indexOf() y lastIndexOf() son com els de strings, retornen la primera o la última posició de l'element buscat

// includes() també funciona igual que el de strings (true o false) en función si lo incluye o no lo incluye


console.log("------------------------------------------------");
console.log("sort");

// toSorted() y toReversed() devuelven el array ordenado o invertido (respectivamente). No modifica el array original. (invierten el array original, no en orden alfabético)

numbers = ["One", "Two", "Three", "Four", "Five"]

numbers.toSorted()
console.log(numbers); // me devuelve el mismo array porque numbers.toSorted() no modifica el array original
console.log(numbers.toSorted());// me lo ordena alfabéticamente (si no le digo más) ['Five', 'Four', 'One', 'Three', 'Two']. 

// sort() y reverse() modifican el array para ordenarlo o invertirlo (respectivamente).
numbers.sort()
console.log(numbers);


animals.sort() // las strings se ordenan "alfabéticamente" (número de unicode)
console.log(animals);


// arrayOriginal.reverse() > Invierte el orden de elementos del array. ARRAY ORIGINAL CAMBIA (MUTA)

// arrayOriginal.toReversed() > Devuelve una copia del array, con el orden de los elementos invertido. ARRAY ORIGINAL SEGURO (NO MUTA)

// arrayOriginal.sort() > Ordena los elementos del array bajo un criterio de ordenación alfabética.  ARRAY ORIGINAL CAMBIA (MUTA)

// arrayOriginal.sort(criterio) > Idem, pero bajo un criterio de ordenación indicado por  criterio. ARRAY ORIGINAL CAMBIA (MUTA)

// arrayOriginal.toSorted() > Devuelve una copia del array, con los elementos ordenados. ARRAY ORIGINAL SEGURO (NO MUTA)

// arrayOriginal.toSorted(criterio) > Idem, pero ordenado por el criterio establecido por parámetro. ARRAY ORIGINAL SEGURO (NO MUTA)

