// Loops 1
// Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.

let result = 0;

for (let i = 0; i <= 100; i++) {
  result += i;
}
console.log(`El total de la suma de los numero del 1 al 100 es de: ${result}`);

// Loops 2
// Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.

const arrayNumbers = [5, 10, 4, 26, 100, 200, 0.6, 4000, -400];

// Correcion de clase array, pero no se debe hacer de este modo, hay que declarar la variable del mismo tipo del que se va a usar para no tener errores futuros.
let mayorNumber = "";
let minorNumber = "";

for (let i = 0; i <= arrayNumbers.length; i++) {
  //body
  //comparativa para ver el número mayor
  if (arrayNumbers[i] > mayorNumber) {
    mayorNumber = arrayNumbers[i];
  }
  //comparativa para ver el número menor
  if (arrayNumbers[i] < minorNumber) {
    minorNumber = arrayNumbers[i];
  }
}

console.log(`EL número menor es el ${minorNumber}`);
console.log(`El número mayor es el ${mayorNumber}`);

//Ejercicio correcto

let min = arrayNumbers[0]; //directamente comparará la primera posición del array
let max = arrayNumbers[0]; //directamente comparará la primera posición del array

for (let i = 0; i <= arrayNumbers.length; i++) {
  //compara cada una de las posicones con el valor actual de la variable max(que es una posición del array)
  if (arrayNumbers[i] > max) {
    //si el valor actual es mayor que el valor guardado en la variable max se guarda el valor actual y se actualiza la variable max
    max = arrayNumbers[i];
  } else if (arrayNumbers[i] < min) {
    //si no se cumple la primera condicion del if, se compara si el valor actual de la array es menor que el último valor guardado en la variable min (que es una posiión del array principal)
    //si se cumple esta condición, se le asigna el valor a la variable min
    min = arrayNumbers[i];
  }
}

console.log(`EL número menor es el ${min}`);
console.log(`El número mayor es el ${max}`);

// Loops 3
// Utiliza un bucle while para imprimir los números pares del 2 al 20.

let num = 2;

while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Solucion de clase 01

let num2 = 2;
while (num2 <= 20) {
  console.log(num2);
  num2 += 2;
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

console.log(`El numero es ${count}`);
