<!-- HTML HERE -->
<template>
  <div v-if="countryInfo">
    <img
    :src="`https://flagcdn.com/80x60/${countryInfo.alpha2Code.toLowerCase()}.png`"
    :alt="`${countryInfo.name.common}`"
  />
  <h1>{{ countryInfo.name.common }}</h1>

  <p>{{ countryInfo.capital[0] }}</p>
  <p>{{ countryInfo.area }} km<sup>2</sup></p>
  <p v-if="(countryInfo.borders.length) === 0" >Este país no tiene una frontera, es una isla</p>

  <ul v-else v-for="(borderCountry, index) in countryInfo.borders" :key="index">
    <RouterLink :to="`/country/${borderCountry}`">{{
      borderCountry
    }}</RouterLink>
  </ul>
  
  
  </div>



  
</template>
<!-- JS HERE -->
<script setup>
import { watch, ref, onMounted, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

// data property to will be used to store info from the API and then push
const countryInfo = ref(null);

// Constant to use the route from the vue-router inside of this specific SFC - SIngle fIle COmponent
const route = useRoute();

// Function that will handle the fetching of info from api in order to provide visibolity of each country. - BIGGEST/HEAVY/HIERACHICAL FUNCTION INSIDE THIS FILE
const getCountryByAlphaCode = async () => {
  // variable to get the current route from the app
  const alpha3Code = route.params.alpha3Code;
  console.log(alpha3Code);

  // variable to call async the api endpoint pointing to the specific country via its alpha3code
  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
  );

  // variable to store info from api and cleanUp it's JSON format with json() method.
  const finalResponse = await response.json();
  console.log(finalResponse);

  countryInfo.value = finalResponse;
  // Asignar los valores correspondientes de la info del API a la variable reactiva que nos hemos definido arriba :)

  return { countryInfo };
};

onMounted(() => {
  getCountryByAlphaCode();
});

// Usar un computed function para tener visbilidad o basicamente tener accesso a la ruta que nos da el programa para ejecutar en 1ra instancia el famoso alpha3Code
// computed(() => return )
const countryCode = computed(() => {
  return route.params.alpha3Code;
});

//Our Spy our watch() monitors for any change within our component, this instance we are spying for the computed function stored in the variable countryCode on line 83. We monitor if we recieve a new alpha3Code via the computed function and we re-execute the function getCountryByAlphaCode. The argument newCountryCode is not being used in this function because we are just calling a function inside with the help of our spy/watcher.
// newcCountryCode argument is not used here, we are leaving to provide an understandment that we are spying for the computed function above
watch(countryCode, (newCountryCode) => {
  getCountryByAlphaCode();
});
</script>
<!-- CSS HERE -->
<style scoped></style>
