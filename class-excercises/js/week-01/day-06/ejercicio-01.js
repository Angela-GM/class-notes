//Operators 1
// Declara una variable sin asignarle ningún valor. Después, en otra línea, asígnale un valor numérico. Finalmente, haz una reasignación para que a dicha variable se le sume 1. Haz esta reasignación de tres maneras distintas. Recuerda usar console.logs cada vez que quieras comprobar tu progreso.


let var1; //Declaración de variable
var1 = 3; //Inicialicación de variable

// Primera variación
var1 = var1 + 1;
console.log(var1);

// Segunda variación
var1++;
console.log(var1);

// Tercera variación
var1 += 1;
console.log(var1);




// Operators 2

// Declara dos variable, una con el valor 3 (number) y la otra con el valor "3" (string). 
let num1 = 3;
let num2 = "3";

//Haz un console.log que compare si las dos son iguales y devuelva verdadero. 
console.log(num1 == num2);

//Haz otro que las compare igual y devuelva falso. 
console.log(num1 === num2);

//Haz lo mismo pero comprobando si NO son iguales.
console.log(num1 != num2);

//Haz un console.log que compruebe si la primera es mayor o igual que 7.
console.log(num1 >= 7);

//Finalmente, haz un console.log que compruebe si las dos variables son estrictamente iguales O si la primera variable es menor o igual a 3.
console.log(num1 === num2 || num1 <= 3);