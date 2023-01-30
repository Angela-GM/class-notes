<script setup></script>

<template>

    <!-- Nav -->
    <nav>
      <img src="./assets/Ironhack_logo.svg" alt="Logo de Ironhack" />
      <img src="./assets/Burger_menu.svg" alt="icono burger menu" />
    </nav>

  <!-- Main -->
  <main>
    <img src="./assets/Vue_logo.svg" alt="Vue logo" />
    <h1>Welcome to Vue.js</h1>
    <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
    <input type="button" name="btn-awesome" id="btn-awesome" value="Awesome!" />
  </main>

  <section>
    <!-- article 1 -->
    <article>
      <img src="./assets/USP-1.svg" alt="icon1" />
      <h3>Performant</h3>
      <p>
        Truly reactive, compiler-optimized rendering system that rarely requires
        manual optimization.
      </p>
    </article>
    <!-- Article 2 -->
    <article>
      <img src="./assets/USP-2.svg" alt="icon2" />
      <h3>Approachable</h3>
      <p>
        Builds on top of standard HTML, CSS and JavaScript with intuitive API
        and world-class documentation.
      </p>
    </article>
    <!-- Article 3 -->
    <article>
      <img src="./assets/USP-3.svg" alt="icon3" />
      <h3>Versatile</h3>
      <p>
        A rich, incrementally adoptable ecosystem that scales between a library
        and a full-featured framework.
      </p>
    </article>
  </section>
</template>

<style scoped>
/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');


*{
  color: #2B2F30;
  font-family: 'Inter', sans-serif;
  /* margin: 0;
  padding: 0; */
  /* box-sizing: border-box; */
}
h1 {
  font-weight: 800;
  font-size: 3rem;
}
h3 {
  font-weight: 700;
}
p {
  font-weight: 400;
}
/* nav */
 nav {
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
}

/* Main */
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 65px;
}
main p {
  font-weight: 800;
  font-size: 1rem;
  width: 35vw;
  text-align: center;
}
#btn-awesome {
  font-weight: 800;
  color: white;
  background-color: #34495E;
  border-radius: 13px;
  padding: 0.5rem 1.3rem;
  border: none;
}


/* Section */
section {
  display: flex;
  justify-content:space-around;
  align-items: center;
  background-color: #39B983;
  padding: 4rem;
  margin: none;

}

section article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: none;

  width: 20vw;

}


/* Media Queries */
/* @media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }


} */





</style>
