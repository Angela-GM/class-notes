// Conditionals 1
// <= 5 - Gratis
// < 15 - tienes un 20%
// >= 15 y <=60 - pagan regular
// si el usuario +60 - tiene 40%

// let age = parseInt(prompt("¿Que edad tiene?"));

// if (age <= 5) {
//   console.log("Su entrada es gratis");
// } else if (age > 5 && age < 15) {
//   console.log("Tiene un 20% de descuento");
// } else if (age >= 15 && age <= 60) {
//   console.log("No tienen ningún descuento");
// } else if (age > 60) {
//   console.log("Tiene un 40% de descuento");
// } else {
//   console.log("Debe introducir un número válido");
// }

// Version Switch

// switch (true) {
//   case age <= 5:
//     console.log("Su entrada es gratis");
//     break;
//   case age > 5 && age < 15:
//     console.log("Tiene un 20% de descuento");
//     break;
//   case age >= 15 && age <= 60:
//     console.log("No tienen ningún descuento");
//     break;
//   case age > 60:
//     console.log("Tiene un 40% de descuento");
//     break;
//   default:
//     console.log("Debe introducir un número válido");
//     break;
// }

// ------------------------
// ------------------------

// Conditionals 2
// Vamos a crear un switch statement para loguear distintos resultados segun los prompts que entre el usuario. Primero le daremos la opción de entrar su name, que nos guardaremos en una variable. Después le permitiremos entrar una action, que también guardaremos en una variable. Nos encargaremos de esta action y, según lo que el usuario entre, haremos console log de alguna cosa u otra.
// Si el usuario entra "greet", lo que vamos a loguear es "Hello, [name]!". Si el usuario entra "say bye", vamos a loguear "Bye bye, [name]!". Si el usuario entra "ask" loguearemos "How are you today, [name]?". Si entra "scream" vamos a loguear "AHHHHHHHH!!!!!!!". Si entra "rest" vamos a loguear "I'm signing off now.". En caso de que la action no sea ninguna de las anteriores, lo que loguearemos será: "I don't know how to do that yet, I'm just a little program :(".

let nameUser = prompt("What's your name? ");
let action = prompt(`what type of action would you like to choose from: 
- greet
- say bye
- ask
- scream
- rest
`);

switch (action) {
  case "greet":
    console.log(`Hello, ${nameUser}!`);
    break;
  case "say bye":
    console.log(`Bye bye, ${nameUser}!`);
    break;
  case "ask":
    console.log(`How are you today, ${nameUser}?`);
    break;
  case "scream":
    console.log(`AHHHHHHHH!!!!!!!`);
    break;
  case "rest":
    console.log(`I'm signing off now.`);
    break;
  default:
    console.log(
      `I don't know how to do that yet, I'm just a little program :(`
    );
    break;
}
