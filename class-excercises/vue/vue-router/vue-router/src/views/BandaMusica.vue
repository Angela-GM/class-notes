<script setup>
import { ref, reactive } from 'vue';
const showImage = ref(true);
const changeShow = () => {
    showImage.value = !showImage.value;
    console.log(showImage.value);
};
const TayrloDavisImage = ref("https://i1.sndcdn.com/artworks-000101775728-xdcc3x-t500x500.jpg");



</script>

<template>
  <section>
    <h1>Taylor Davis</h1>
    <p>
      Taylor Davis es una violinista y compositora estadounidense conocida por
      su música clásica y videojuegos en línea. Ella es popular por su
      interpretación en violín de bandas sonoras de videojuegos y películas, y
      ha publicado varios álbumes y videos en YouTube que han ganado millones de
      visitas.
    </p>

     <input type="button" value="Click" @click="changeShow">
    <img v-if="showImage" :src="TayrloDavisImage" alt="foto de Taylor Davis">

   
  </section>
</template>

<style scoped>

h1 {
    font-size: 2rem;
}

p {
    margin: 1em 0;
}
</style>
