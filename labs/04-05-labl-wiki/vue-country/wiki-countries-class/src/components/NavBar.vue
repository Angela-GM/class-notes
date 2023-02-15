<!-- HTML HERE -->
<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <!-- <a class="text-white" href="/">Wiki Countries - hard refresh</a> -->
    <RouterLink class="text-white" to="/">WIki Countries</RouterLink>

    <a href="" class="text-white">Built by Angela</a>
  </nav>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>
