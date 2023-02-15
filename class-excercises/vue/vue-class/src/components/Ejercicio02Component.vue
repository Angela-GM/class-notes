<!-- HTML HERE -->
<template>

    <div v-for="movie in myWatchlist">
      <h1>{{ movie.title }}</h1>
      <h2>Año: {{ movie.year }}</h2>
      <h2>Disponibles en:</h2>
      <ul>
        <li v-for="item in movie.whereToWatch" >{{ item }}</li>
      </ul>
      <hr>
    </div>
  
  
    <h2>Estas son los titulos que se pueden ver en Netflix</h2>
    <div>
      <p>{{ watchOnNetflix }}</p>
    </div>
  
  
  
    </template>
    <!-- JS HERE -->
    <script setup>
    import { ref, reactive, computed } from "vue";
    
    // Ejercicios Computed Properties
  
    
    // Ej.2 - Hard: Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas.
  
  
      const myWatchlist = reactive([{
        title: "The last of Us",
        year: 2023,
        whereToWatch: ['HBO']
      },{
        title: "Stranger Things",
        year: 2016,
        whereToWatch: ['Netflix']
      },
      {
        title: "Kung Fu Panda",
        year: 1008,
        whereToWatch: ['Netflix', 'Amazon Prime Video']
      },
      {
        title: "Wednesday",
        year: 2022,
        whereToWatch: ['Netflix']
      },
      {
        title: "Mononoke Hime",
        year: 1997,
        whereToWatch: ['Netflix']
      }]);

  

    
    // Después creamos un formulario con inputs para introducir un title, un year y una opción múltiple de servicios de streaming. Cuando hagamos submit del formulario deberíamos crear un objeto con toda la info inputada por el user y añadirlo a myWatchlist. En caso de que esta nueva serie o película se pueda ver en Netflix, la lista de watchOnNetflix también debería actualizarse al momento.
    </script>
    <!-- CSS HERE -->


    <style scoped>


  
    </style>
    