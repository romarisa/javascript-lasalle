console.log("Exercicis2 DOM");

let li = document.querySelectorAll('#ingredientes li');
li.forEach(ingrediente => ingrediente.style.color = 'pink');


let parrafos = document.querySelectorAll('p');
parrafos.forEach(p => p.style.color = 'blue'); //Como el resultado que queda guardado en párrafos es un array de JavaScript, para utilizarlo debemos recorrerlo. Esto lo podemos realizar con un for. 

let parrafoPrimero = document.querySelector("#section1 p.primero");
parrafoPrimero.style.color = "green";
//En este ejemplos se usael método querySelector() para localizar elementos. Este método usa como argumento un selector similar a los que se usan al definir estilos por CSS, opr ejemplo: un .nombre_clase (punto segido de un nombre), almohadilla seguido del id (#id) o una etiqueta html (p, dov...). En general este argumento admite todos los selectores usados en CSS, incluyento combinaciones 'p .code' se refiere al elemento con class code dentro del párrafo.
//En todos los casos devuelve el primer elemento que responde a ese argumento.En el ejemplo al poner querySelector(".texto") se selecciona el primer elemento con class="texto".


let primerBoton = document.querySelector("#section5 button.btn1");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

primerBoton.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

let segundoBoton = document.querySelector("#section6 button.btn2");
segundoBoton.addEventListener("click", () => alert("Hello!"));