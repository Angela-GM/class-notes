<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import MyFirstComponent from './components/0-My-FirstComponent.vue'
// import TextDirective from './components/1-TextDirective.vue'
// import BindDirective from './components/3-BindDirectiveEx.vue';
// import CondicionalDirectives from "./components/4-CondicionalDirectives.vue";
// import IterativeDirective from './components/05-IterativeDirective.vue';
import FormDirective from './components/06-FormDirective.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="Vue Class - my first component!" />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <MyFirstComponent />
    <TextDirective /> -->
    <!-- <BindDirective />
    <CondicionalDirectives /> -->
    <!-- <IterativeDirective /> -->
    <FormDirective />

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
