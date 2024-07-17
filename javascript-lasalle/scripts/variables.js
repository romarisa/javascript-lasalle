userName = "Omar"; // userName es una variable que tiene dentro una String
userSurname = "Olmedo";
userTitle = `Professor`; // una String con backticks es un template literal
espacio = " ";


console.log(userName);

console.log("lo que sea"); // "lo que sea" es unn tipo de dato que estoy guardando dentro de mi variables
console.log(userName.repeat(3)); //OmarOmarOmar

//¿Cómo unir los tres strings?

console.log("Hola" + " " + userTitle + "." +  " " + "¿Cómo estás" + " " + userName +  " " + userSurname + "?"); // Hola Professor. ¿Cómo estás Omar Olmedo?

console.log(userTitle, userName, userSurname); // Professor Omar Olmedo

console.log(userName + espacio + userSurname); // Omar Olmedo

console.log(`Hola ${userName}, que cuentas${userSurname}`); // Hola Omar, que cuentasOlmedo (lee los espacios)

console.log(`¿Qué tal estás, ${userName} ${userSurname}?`);

userAge = 33; // Number
userExperience = 10; // Number
userHasHair = false; // Boolean

userName = "Pablo"; // cambiará a todos los logs por detrás de este
userSurname = "Rodríguez"; // cambiará a todos los logs por detrás de este

console.log(userName + userAge);
console.log(userAge + userExperience);

userExperience = "diez"; // si dos variables tienen el mismo valor, la variable que está más abajo es la que se queda
console.log(userAge + userExperience);

console.log("Edad: " + userAge, "\nAños de experiencia: " + userExperience); // dentro de un string \n es un salto de línea

a = 1;
b = 2;

c = a; //c es 1 o cualquier valor que tenga a
a = b; // a tiene valor b=2 o cualquier valor que tenga b
b = c; // b tiene valor de c, y c tiene valor de a, que es 1


console.log(a, b); //2, 1