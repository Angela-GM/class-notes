<!-- HTML HERE -->
<template>
    <!-- ex02 - part 001 -->
    <div>
      <p>La iteracion 001 tiene resutlado de {{ 2 + 2 }}</p>
      <p>{{ 2 + 2 }}</p>
    </div>
    <hr />
    <!-- ex02 - part 002 -->
    <div>
      <!-- funcion con keyword return + {} -->
      <h1>{{ stringChainOne() }}</h1>
      <!-- funcion sin keyword return + {} -->
      <h1>{{ stringChainTwo() }}</h1>
      <!-- funcion que contiene una variable reactive con el metodo ref() dentro del script que define un string que contiene un texto -->
      <h1>{{ stringChainThree() }}</h1>
    </div>
  </template>
  <!-- JS HERE -->
  <script setup>
  import { ref, reactive } from "vue";
  
  // ex02 - part 002
  const stringChainOne = () => {
    return "I like the red hot chilli peppers to go snowboarding!";
  };
  const stringChainTwo = () => "I like the Gang Starr to go snowboarding!";
  const stringChainThree = () => {
    const myCoolString = ref("I like the arctic monkeys to go snowboarding!");
    return myCoolString.value;
  };
  </script>
  <!-- CSS HERE -->
  <style scoped></style>