// Loops 1
// Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.

let result;

for (let i = 0; i <= 100; i++) {
  result = +i;
  console.log(result);
}

// Loops 2
// Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.

let arrayNumbers = [5, 10, 4, 26, 100, 200];
let min = arrayNumbers[0];
let max = arrayNumbers[0];

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] > max) {
    max = arrayNumbers[i];
  } else if (arrayNumbers[i] < min) {
    min = arrayNumbers[i];
  }
}

console.log(`EL número menor es el ${min}`);
console.log(`El número mayor es el ${max}`);

// Loops 3
// Utiliza un bucle while para imprimir los números pares del 2 al 20.

let num = 1;

while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Loops 4
// Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

let numeroAdivinar = 4;
let numeroIngresado = 0;

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
do {
  numeroIngresado = arrayNum[count];
  count++;
} while (numeroIngresado !== numeroAdivinar);

console.log(count);
