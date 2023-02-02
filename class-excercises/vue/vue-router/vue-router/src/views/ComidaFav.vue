<script setup>
import { ref, reactive } from 'vue';
const showImage = ref(true);
const changeShow = () => {
    showImage.value = !showImage.value;
    console.log(showImage.value);
};

</script>

<template>
  <section>
    <h1>Pizza</h1>
    <p>
      La pizza es una preparación culinaria que consiste en un pan plano,
      habitualmente de forma circular, elaborado con harina de trigo, levadura,
      agua y sal (a veces aceite de oliva) que tradicionalmente se cubre con
      salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de
      leña. El lugar donde se venden pizzas se denomina «pizzería» y al obrador,
      «pizzero» (pizzaiolo en italiano). Aunque se considera que su origen está
      en la gastronomía italiana, particularmente la napolitana, su consumo está
      extendido a casi todos los países del mundo con diversas variantes
      locales, que incorporan distintos ingredientes para cubrir la masa. Junto
      con la hamburguesa, la pizza está considerada la comida más difundida del
      mundo, como consecuencia de la diáspora italiana que se estableció en
      América a lo largo del siglo xx principalmente en Nueva York, Buenos Aires
      o Chicago.
    </p>
    <input type="button" value="Click" @mouseenter="changeShow">
    <img v-if="showImage" class="pizza-img" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg" alt="foto de pizza">
  </section>
</template>

<style scoped>
.pizza-img {
    width: 300px;
};

h1 {
    font-size: 2rem;
};
p {
    margin: 1em 0;
};

</style>
