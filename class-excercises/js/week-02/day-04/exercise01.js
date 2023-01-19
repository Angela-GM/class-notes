//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
let newP = document.createElement("p"); //creo una variable  SELLECIONANDO un tag <p></p>

let containerDiv = document.getElementById("insert-p");
// let containerDiv = document.querySelector("#insert-p")//selecciono el elmento con la id="insert-p" y lo guardo en la variable
containerDiv.appendChild(newP); //con appendChild le añado como hijo la p que está guardada en la varibale newP

// 2º - Crea un <div id="nested"></div> desde código

const divElement = document.createElement("div");
// divElement.setAttribute("id", "nested"); metodo de clase
divElement.id = "nested";

divElement.innerText = "esto es un div";

document.body.appendChild(divElement);

// 3º - Crea contenido de texto del elemento <p></p> creado para introducir el siguiente texto: "Programming is my great"

newP.innerText = "Programming is my great"; // añado texto a la <p>

//4º - Crea una función que cambie el contenido del texto de un <p></p> en función a una variable string.

let myString = (newString) => {
  newP.innerText = newString;
};

myString("Nuevo mensaje a través de una función");

//
//
//
//
//
//
// Block 002

// 1º - Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.

//seleccionar el elemnto div de color verde
const divGreen = document.querySelector("#greenElement");
// console.log(divGreen);
//seleccionar el boton
const btnColor = document.querySelector("#btnColor");
// console.log(btnColor);

const fChangeColor = () => {
  divGreen.classList.add("color-red");
};

btnColor.addEventListener("click", fChangeColor);

// 2º - Crea un elemento <div></div> y asignale una clase "green-box" que haga que sea una caja de 100px de alto y ancho de color verde.

let selectElementDiv = document.querySelector("#insert-p");
const createElementDiv = document.createElement("div");
createElementDiv.className = "green-box";
createElementDiv.style.width = "100px";
createElementDiv.style.height = "100px";
createElementDiv.style.backgroundColor = "#008000";

selectElementDiv.appendChild(createElementDiv);

console.log(createElementDiv);

// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.

//NO ME SALE----------------------------->
let selectElementDivBlue = document.querySelector(".remove-class");
console.log(selectElementDivBlue);

selectElementDivBlue.classList.remove("remove-test");

// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

let crearElementP = document.createElement("p");
let onChildElement = document.querySelector("div");
onChildElement.appendChild(crearElementP);
console.log(onChildElement);
let buttonTwo = document.querySelector("#btn2");

const innerTextP = () => {
  crearElementP.innerText = "Texto insertado";
};

buttonTwo.addEventListener("click", innerTextP);

// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.

// Create a button element
let button = document.createElement("button");
//Introducir texto al boton
button.innerText = "Create table";
console.log(button);

// Add the button to the document
document.body.appendChild(button); //selecciono odonde quiero crear un hijo, y indico que elemento quiero crear

// Add an event listener to the button
button.addEventListener("click", () => {
  //body de la funcion
  // Create a table element
  let table = document.createElement("table");

  // Create 3 rows
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");
    // Create 3 cells in each row
    for (let i = 0; i < 3; i++) {
      let col = document.createElement("td");
      row.appendChild(col);
    }
    // Add the row to the table
    table.appendChild(row);
  }

  // Add the table to the document
  document.body.appendChild(table);
});
