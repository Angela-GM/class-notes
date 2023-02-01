<!-- HTML HERE -->
<template>
    <header>
      <nav>
        <!-- logo -->
        <a href=""
          ><img :src="logoOfSite.imgRoute" :alt="logoOfSite.imgAltText"
        /></a>
        <!-- navigation -->
        <ul>
          <li><a href="" v-text="navigation[0].navText"></a></li>
          <li>
            <a
              :target="navigation[1].navLinkOpenNewTab"
              :href="navigation[1].navRoute"
              v-text="navigation[1].navText"
            ></a>
          </li>
        </ul>
        <!-- buton de login -->
        <button v-text="buttonText"></button>
      </nav>
    </header>
  </template>
  <!-- JS HERE -->
  <script setup>
  import { ref, reactive } from "vue";
  
  const logoOfSite = reactive({
    imgRoute:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    imgAltText: "A cool logo showcasing the Google Company",
  });
  
  const navigation = reactive([
    {
      navRoute: "/",
      navText: "Home",
    },
    {
      navRoute: "https://next.ironhack.com/fr/en/career",
      navText: "Contact - Pablo",
      navLinkOpenNewTab: "_blank",
    },
  ]);
  
  const buttonText = ref("Click Me");
  </script>
  <!-- CSS HERE -->
  <style scoped>
  a,
  a img {
    width: 50%;
  }
  
  nav {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(182, 182, 232);
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 5rem;
  }
  </style>