<!-- // Ejercicios Attribute Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->

<template>
    <h1 :id="idBindeado">Ejercicio 1</h1>
    <h2 :class="classEx2 ? 'styleEx2A' : 'styleEx2B'">Ejercicio 2</h2>
    <h3 :style="[style1, style2, style3]">Ejercicio 3</h3>
    <h4 :class="[var1 && 'red', var2 && 'border']">Ejercicio 4</h4>
</template>

<script setup>
import { ref, reactive } from "vue";

// Ejercicio 1
const idBindeado = ref("styleEx1");
const classEx2 = ref(true);

/* Ejercicio 3 */
const style1 = reactive({
    color: "purple",
    fontSize: "3em",
});

const style2 = reactive({
    textDecoration: "underline",
});

const style3 = reactive({
    backgroundColor: "pink",
    padding: "2rem 0 ",
});

// Ejercicio 4
const var1 = ref(true);
const var2 = ref(true);
</script>

<style scoped>
/* Ejercicio 1 */
#styleEx1 {
    color: brown;
    text-decoration: underline;
    font-style: italic;
}

/* Ejercicio 2 */
.styleEx2A {
    color: blue;
    font-size: 2em;
    text-decoration: underline;
}

.styleEx2B {
    display: none;
}

/* // Ejercicio 4 */
.red {
    color: red;
}

.border {
    border: 2px solid blue;
}
</style>
