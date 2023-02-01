<!-- Ejercicios -->
<!-- // Ejercicios Iterating Elements
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.
// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").
// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list. -->


<!-- HTML HERE -->
<template>
  <section>
    <!-- Ej.1 -->
    <h1>My favorite Movies</h1>
    <ol>
      <li v-for="(movie, index) in topMovies" key="index">
        {{ movie }} - {{ index }}
      </li>
    </ol>
  </section>

  <!-- Ej.2 -->

  <hr />

  <section>
    <ul>
        <li v-for="(item, key) in objectEj2">{{key}}: {{ item }}</li>
    </ul>


  </section>

  <hr>
  <!-- Ej.3 -->

  <section>
    
    <div v-for="student in students">
        <h2>{{ student.name }}</h2>
        <p v-show="student.age >= 18 ">I can go for a few drinks with {{student.name}} after class</p>
    <p v-show="student.age < 18 ">NAME is still too young, they'll have to go home tonight</p>
    <h5 >Favorites array method</h5>
    <ul>
        <li>{{ student.favoriteLanguages }}</li>
    </ul>
    <hr>

    </div>
    




  </section>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// Ej.1
const topMovies = reactive([
  "Mononoke Hime",
  "Fight Club",
  "Kill Bill",
  "Big Fish",
  "Wall-e",
]);

// Ej.2
const objectEj2 = reactive({
  favoriteFood: "Pizza",
  favoriteDrink: "Café con leche vegetal",
  favoriteSport: "Mountain Bike",
  favoriteCountry: "Japon",
  favoriteArrayMethod: "slice()",
});

// Ej.3
const students = reactive([
    {
        name: 'Angela',
        age: 40,
        favoriteLanguages: 'slice()'
    },
    {
        name: 'Cris',
        age: 32,
        favoriteLanguages: 'sort()'
    },
    {
        name: 'Ester',
        age: 32,
        favoriteLanguages: 'length'
    }
])



</script>


<!-- CSS HERE -->
<style scoped>
hr {
    margin: 1rem 0;
}

</style>
