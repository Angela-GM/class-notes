// Functions
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.
//console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));

let user = "Laia";
let age = 78;
let livesIn = {
  livesInCity: false,
  livesInTown: true,
};

let miFuncion = livesIn.livesInCity
  ? () => console.log(`${user} tiene ${age} años y vive en la ciudad`)
  : () => console.log(`${user} tiene ${age} años y vive en un pueblo`);

miFuncion();

// JS Arrays Methods

// 1. map() pasa por cada uno de los elementos de un array
// 2. filter() filtra elementos de un array
// 3. sort() Este metodo se utiliza par aordenar los elementos el array en orden ascendent o descendente >>>> mirar por internet como funciona
// 4. forEach() ayuda a realizar un bucle sobre un array ejecuentado una funcion de devolucion de llamada para cada elemento de un array.
// 5. concat() Se utilizar para fusionar dos o mas arrays y devuelve una nueva array sin cambiar las arrays existentes.
// 6. every() comprueba cada elemento de la matriz que pasa la condicion, devolviendo true o false según corresponda.

// let nombreDeVariable = array.every((number) => {
//   return number > 5;
// }); //comprueba si todos los elementos de un array son mayor que 5, si es cierto retorna el valor true, si no false

// 7. some() comprueba si al menos un elemento de la matriz que pasa la condicion, devolviendo true o false
// 8. includes() comprueba si un array incluye el elemento que pasa la condicion
// 9. join() devuelve un nuevo string concatenado todos los elementos del array separados por el separador especificado
//10 .push() añadir uno o mas elementos al final de un array
//11. pop() elimina el último elemento de un array y devuelve ese elemento
//12. shift() elimina uno elemento al incio de un array
//13. unshift() añade uno o mas elmentos al inicio de un array
//14. slice() devuelve un nuevo array con los elmentos especificados de inicio a fin
