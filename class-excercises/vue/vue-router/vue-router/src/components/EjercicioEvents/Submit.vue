<script setup>
// // Ej. 2: Creamos tres componentes: General.vue, Input.vue y Submit.vue. General debe enseñar en un <h1> una variable reactiva con vuestro nombre. Input debe contener un input type text y Submit.vue debe ser un botón. En el script de General vamos a crear la función changeName(), la cual va a aceptar un argumento y cambiará el valor de la variable reactiva por el de dicho argumento. Después tendréis que crear la lógica correspondiente para que al darle al botón de Submit podamos coger el valor inputado en Input y cambiar el <h1> de General por dicho valor.
 const emit =   defineEmits(["confirm"]);
 defineProps([buttonText]);
    </script>
<template>
    <button @click="$emit(confirm)">Click me!</button>
    
</template>
<style scoped></style>