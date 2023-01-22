// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");

  // crear dos variables, y una para apuntar al precio y otra para cantidad
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Paso 2 y 3, guardar en la variable subtotalPrice el resultado del valor de price * el valor de quantity, hay que tener en cuenta de añadir el metodo Number() para que el string se conviernta en un tipo number y poder realizar la operación matematica
  const subtotalPrice = Number(price.innerText) * Number(quantity.value);

  // Paso 4 selecciona el elemnto que debería contener el subtotal
  const subtotalElement = product.querySelector(".subtotal span");

  // Paso 5: introducir el valor del subtotalPrice calculado dentro del elemento subtotalElement
  subtotalElement.innerText = subtotalPrice;
  // y return par aque la variable devuelva el valor del subtotal calculado
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // Seleccionar todas la filas de producto con la clase "product"
  const singleProduct = document.getElementsByClassName("product");

  // console.log(singleProduct);
  // updateSubtotal(singleProduct);
  // console.log(singleProduct);
  // end of test

  // ITERATION 2

  // crear un for que recorra el array de productFileElements y pasar la funcion anterior updateSubtotal
  let total = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    total += updateSubtotal(singleProduct[i]);
  }

  // ITERATION 3
  const elementTotal = document.querySelector("#total-value span");
  elementTotal.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const row = target.parentNode.parentNode;
  const tablaElement = document.querySelector("tbody");
  tablaElement.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // apuntar al precio unitario
  const price = document.querySelector("#input-price").value;
  // apuntar al nombre
  const nameProduct = document.querySelector("#input-name").value;

  //Estructura html de la fila
  const tablaElement = document.querySelector("tbody");

  const fila = `<tr class="product">
<td class="name">
  <span>${nameProduct}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;

  tablaElement.innerHTML += fila;

  const removeProductBtn = document.querySelectorAll(".btn-remove");
  removeProductBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
  calculateAll();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const removeProductBtn = document.querySelectorAll(".btn-remove");
  removeProductBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
