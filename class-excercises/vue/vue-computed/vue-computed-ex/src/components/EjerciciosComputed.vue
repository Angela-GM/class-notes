<!-- HTML HERE -->
<template>
  <!-- Ejercicio 1 -->
  <h1>{{ myName }}</h1>
  <!-- Form -->
  <!-- Name -->
  <form class="form">
    <div>
      <label for="name">Name:</label>
      <input v-model="name
      " type="text" name="name" autocomplete="off" />
    </div>
    <!-- last name -->
    <div>
      <label for="lastName">Last Name:</label>
      <input v-model="lastName
      " type="text" name="lastName" autocomplete="off" />
    </div>
    <div>
        <input type="submit" value="submit">
    </div>
  </form>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive, computed } from "vue";

// Ejercicios Computed Properties

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1>. Este debe leer una variable computada myName que, a su vez, lea dos variable reactivas name y lastName. Les daréis un valor default a cada una con vuestro nombre y vuestro apellido. Debajo del h1 creamos un pequeño form con dos inputs, uno que sobreescriba name y el otro lastName. Si todo está bien vinculado, cuando modifiquéis el input el h1 debería modificarse a la vez, incluso antes de hacer submit.

//definir las dos varialbes reactivas
const name = ref("Angela");
const lastName = ref("Garcia");

const myName = computed({
  get() {
    return `${name.value} ${lastName.value}`;
  },
  set(value) {
    const newName = value.split("");
    name.value = newName[0];
    lastName.value = newName[1];
  },
});

// Ej.2 - Hard: Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas.

// Después creamos un formulario con inputs para introducir un title, un year y una opción múltiple de servicios de streaming. Cuando hagamos submit del formulario deberíamos crear un objeto con toda la info inputada por el user y añadirlo a myWatchlist. En caso de que esta nueva serie o película se pueda ver en Netflix, la lista de watchOnNetflix también debería actualizarse al momento.
</script>
<!-- CSS HERE -->
<style scoped>
.form {
  width: 30%;
}
.form div {
  display: flex;
  flex-direction: column;
}
</style>
