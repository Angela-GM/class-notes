<script setup>
import { ref, watchEffect, watch } from "vue";
//En lugar de hacer un fetch, importamos directamente la base de datos. Así es más simple
import jsonAnswers from "./watcher.json";
const question = ref("¿Te gusta la pizza?");
const answer = ref("");
const jsonResponse = ref("");
const jsonImage = ref("");

// watches
// Watch clásico
watch(answer, async (newAnswer) => {
  console.log("El watch se ha activado");
  if (answer.value.toLocaleLowerCase() === "yes") {
    //console.log("Comprobamos que entramos");
    jsonResponse.value =
      jsonAnswers[1].answer + ", you like pizza! and Pizza likes you <3";
    jsonImage.value = jsonAnswers[1].image;
  } else if (answer.value.toLocaleLowerCase() === "no") {
    //console.log("No te gusta la pizza");
    jsonResponse.value =
      jsonAnswers[0].answer +
      ", no way. You are just kidding me. Wanna some pizza?";
    jsonImage.value = jsonAnswers[0].image;
  } else {
    //console.log("No estamos entrando");
    jsonResponse.value = "Waiting for a correct response.";
    jsonImage.value = "";
  }
});
</script>

<template>
    <h1>{{ question }}</h1>
    <input v-model="answer" type="text" maxlength="3" />
    <div v-if="jsonResponse">{{ jsonResponse }}</div>
    <div v-if="jsonImage"><img :src="jsonImage" alt="" /></div>
  </template>
<!-- Crea un componente que haga lo siguiente:
1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
2- De la respuesta en función a un JSON que debes crear
3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
4- Junto a la contestación, debe aparecer una imagen divertida -->



<style scoped>
h1 {
  margin-top: 3em;
}
form {
  display: flex;
  flex-direction: column;
  width: 40%;
}

label {
  margin: 2em 0 1em 0;
}
</style>