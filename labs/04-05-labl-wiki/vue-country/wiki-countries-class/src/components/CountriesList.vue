<!-- HTML HERE -->
<template>
  <div class="row">
    <div class="col-sm-4">
      <RouterLink
     
        v-for="(country, index) in countries"
        :key="index"
        :to="`/country/${country.alpha3Code}`"
      >
      <img
    :src="`https://flagcdn.com/60x45/${country.alpha2Code.toLowerCase()}.png`"
    :alt="`${ country.name.common }`"
  />
        <p>{{ country.name.common }}</p>

      </RouterLink>
    </div>
    <div class="col-sm-8">
      <RouterView />
    </div>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

// Variable para guardar la info de los paises
const countries = ref(null);

// Function to call country api
const fetchCountries = async () => {
  // variable to call fetch method in order to store info in a variable
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  // variable to store info from api and cleanup it with the famous json()
  const finalResponse = await response.json();
  // lets log and check
  console.log(finalResponse);
  // variable to store a sort countries from A to Z method chained to the finalResponse variable.
  const sortedCountries = finalResponse.sort((paramOne, paramTwo) => {
    return paramOne.name.common.localeCompare(paramTwo.name.common);
  });
  console.log(sortedCountries);

  countries.value = sortedCountries;
};

onMounted(() => {
  fetchCountries();
});
</script>
<!-- CSS HERE -->
<style scoped></style>
