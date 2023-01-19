// ---------------- EJERCICIOS ----------------

// Ej. 1
// Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs:
let stringToLog = "    JavaScript is fun! ";
console.log(stringToLog.length); // 23
console.log(stringToLog.trim()); // 'JavaScript is fun!'
console.log(stringToLog.toLocaleLowerCase().trim().split("s")); // ['java', 'cript i', ' fun!']
console.log(stringToLog.trim().toLocaleUpperCase()); // 'JAVASCRIPT IS FUN!'
console.log(stringToLog.charAt(18)); // 'f'
console.log(stringToLog.trim().indexOf("c")); // 5
console.log(stringToLog.trim().lastIndexOf("u")); // 15
console.log(stringToLog.trim().replace("JavaScript", "CSS")); // 'CSS is fun!'

// Ej. 2 Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.
const original = "Hello world!";
let stringToChange = "Hello world!";

// stringToChange = stringToChange.slice(0, 5);
// console.log(stringToChange.endsWith("o")); // true

// stringToChange = stringToChange.substring(5, 11);
// console.log(stringToChange.charAt(3)); // 'r'

// stringToChange = stringToChange.toLowerCase();
// console.log(stringToChange.includes("hello")); // true

// stringToChange = stringToChange.substring(0, 6);
// console.log(stringToChange.lastIndexOf("o")); // 4

// stringToChange = stringToChange.split(0, 8);
// console.log(stringToChange.indexOf("w")); // -1

// ---------------- EJERCICIOS ----------------

/*Ejercicio 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. 
Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?
*/

console.log((3100 / 30).toFixed(0));

/*Ejercicio 2
En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000ff sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff. 
*/

/*
Ejemplo de color -> #0000ff -> 00 -> R : 00 -> G : ff -> B => RGB.
*/
let colorR = 0;
let colorG = 0;
let colorB = 255;

colorR += 33;
colorG += 66;
colorB += 55;

colorB -= 255;

console.log(colorR, colorG, colorB);

colorR = colorR.toString(16);
colorG = colorG.toString(16);
colorB = colorB.toString(16);

console.log(colorR, colorG, colorB);

let newColor = "#" + colorR + colorG + colorB;

console.log(newColor);
