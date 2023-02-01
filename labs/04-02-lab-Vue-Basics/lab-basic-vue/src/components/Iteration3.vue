<!-- HTML HERE -->
<template>

<p v-if="condition">Este texto sólo aparece si la condición es verdadera</p>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
const condition = ref(true);
</script>
<!-- CSS HERE -->
<style scoped></style>