<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue';
import Watches from './components/Watches.vue';
import ParentComponent from './components/EjercicioEvents/ParentComponent.vue';
import ChildComponent from './components/EjercicioEvents/ChildComponent.vue';
import General from './components/EjercicioEvents/General.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/comida">Comida Favorita</RouterLink>
        <RouterLink to="/banda">Banda de Musica</RouterLink>
        

      </nav>
    </div>
  </header>

  <RouterView />
  <Button>Este boton es un slot</Button> -->

  <!-- <Watches /> -->
  <!-- <ParentComponent></ParentComponent> -->
  <General></General>


</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


