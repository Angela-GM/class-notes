<!-- HTML HERE -->
<template>
  <!-- Formulario -->
  <div class="formulario">
    <form @submit.prevent="handleSubmit">
        <!-- Name -->
      <div id="applicantName">
        <label for="name">Enter name:</label>
        <input type="text" id="name" autocomplete="off" v-model="formValues.name" />
      </div>
      <!-- Age -->
      <div id="applicantAge">
        <label for="age">Enter age:</label>
        <input type="number" id="age" min="0" v-model="formValues.age" />
      </div>
      <!-- Date of Birth -->
      <div id="applicantDob">
        <label for="dob">Select your date of birth</label>
        <input type="date" id="dob" min="0" v-model="formValues.dateOfBirth" />
      </div>
      <!-- Button -->
      <div id="submit-form-button">
        <input type="submit" value="Submit Form Data" />
      </div>
    </form>
  </div>

  <!-- Este div nos dara el resultado en pantalla de nuestros datos
  <div>
    <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
  </div> -->
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// Ejercicios Two Way Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.

const formValues = reactive({
  name: "",
  age: "",
  dateOfBirth: "",
});

// Una vez le demos a submit deberíamos encargarnos de imprimir en una alerta un texto con el nombre que le hayáis inputado, un texto con la edad y un texto con vuestra date de birth.

const handleSubmit = () => {
  console.log(formValues);
  alert(`Tu nombre es ${formValues.name}, tienes ${formValues.age} años y naciste el ${formValues.dateOfBirth}.

    `);
};

// approach 1 - guardan cada dato en su variable propia name, age y dob
// approach 2 - guardan los 3 datos dentro de 1 variable que sea un objeto :)
</script>
<!-- CSS HERE -->

<style scoped>
pre {
  font-size: 18px;
}
div {
  display: flex;
  flex-direction: column;
}
input {
    padding: 0.7em 0.1em;
}
</style>
