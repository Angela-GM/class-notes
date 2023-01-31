<template>
    <!-- Usando el directivo v-text -->
    <p v-text="favoritoBand"></p>



    <!-- Usando la interpolación de texto -->
    <p>{{ favoritoBand }}</p>

</template>


<script setup>
import { ref } from "vue";

// Dato primitivo
let favoritoBand = ref("Una de mis bandas favoritas es Apocalyptica");


</script>






<style scoped>

</style>