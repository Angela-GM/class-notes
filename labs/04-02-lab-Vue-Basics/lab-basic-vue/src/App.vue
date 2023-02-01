<script setup>
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import IterationTwo from "./components/Iteration2.vue";
import IterationThree from "./components/Iteration3.vue";
import IterationFour from "./components/Iteration4.vue";
import IterationFive from "./components/Iteracion5.vue";
</script>

<template>
  <NavComponent />
  <!-- Iteraciones aca: -->
  <IterationTwo />
  <IterationThree />
  <IterationFour />
  <IterationFive />
  
  <!-- final de iteraciones -->
  <FooterComponent />
  
</template>

<style scoped></style>
