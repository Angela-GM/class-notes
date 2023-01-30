<!-- Html -->
<template>
    <div>
        <p>Mi nombre es Angela, tengo 40 años y vivo en Tarragona</p>
    </div>

    <!-- HTML puesto con interpolación de texto - mejor conocido como claudators de bigote -->
    <!-- Usando datos primitivos -->
    <section>
        <div>
            <p>Mi nombre es {{ myName }}, tengo {{ age }} años y vivo en {{ countryOfLive }}</p>
        </div>

        <!-- Usando datos no primitivos -->
        <div>
            <p>Mi nombre es {{ myInfo.myName }}, tengo {{ myInfo.age }} años y vivo en {{ myInfo.countryOfLive }}</p>
        </div>

        <!-- Null value -->
        <div>
            <p>
                {{ nullValue }}
            </p>
        </div>
    </section>

    <!-- Ejemplo de reactividad + interpolacion + funciones -->
    <section>
        <div class="counter">
            <h2>{{ counter.tittle }}</h2>
            <div><button @click="decreaserCounter">-</button>
                <p>{{ counter.count }}</p>
                <button @click="increaseCounter">+</button>
            </div>


        </div>
    </section>

    <!-- Ejercicio 1 -->
    <section>
        <p>Mi nombre es {{ datos.name }}, tengo {{ datos.age }} años y nací el {{ datos.dob }}.</p>
        <p>Mis hobbies son la {{ datos.hobbies[0] }}, los {{ datos.hobbies[1] }} y {{ datos.hobbies[2] }}.</p>
        <p>Estudié primaria en {{ datos.educacion.primaria }}, secundaria en {{ datos.educacion.secundaria }} y la universidad en {{ datos.educacion.universidad }}.</p>
        <p>Uno de mis grupos favoritos de musica es {{ datos.grupoFavorito }}</p>

        <p>Mi pelicula favorita es {{ peliculaFav }} y la he visto como mínimo unas {{ countViews }} veces.</p>
        <p>Mi comida favorita es la {{ comidaFav }}.</p>

        </section>


</template>

<!-- JS -->
<script setup>
// Si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tnemos que activar reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabjar de una manera reactiva
//un metodo se llama ref() para datos primitivos
//un metodo se llama reactive() para objetos, arrays, etc. datos no primitivos

//PASOS 
//1er paso
import { ref, reactive } from "vue";

//2do paso
// Declaramos el tipo de dato reactivo mediante el metodo ref o reactive
//Tipos de datos PRIMITIVOS
const myName = ref("Angela");
const countryOfLive = ref("Tarragona");
const age = ref(40);
const nullValue = ref(null);

//Tipos de datos NO PRIMITIVOS
const myInfo = reactive({
    myName: "Angela",
    countryOfLive: "Tarragona",
    age: 40
});

// EJEMPLO FUNCIONA - CONTADOR
const counter = reactive({
    count: 0,
    tittle: "My counter",
})

const increaseCounter = () => {
    counter.count++;
}

const decreaserCounter = () => {
    counter.count--;
};

// EJERCICIO 001
// Van a crear 4 variables
// 3 de ellas seran ref()
// 1 de ellas sera reactive()
// reactive === quiero que se creen un objeto con las siguientes keys/claves, ["name", ageNUMERO, "dob", hobbies[ARRAY], educacion{objeto, 3 claves[primaria, secundaria, unviserdiad]}, "Su grupo favorito de musica"]
// ref ==== pelicula preferida
// ref === # cantidad de veces que se han visto esta pelicula
// ref === comida preferida

const datos = reactive({
    name: "Angela",
    age: 40,
    dob: "12 de Diciembre de 1982",
    hobbies: ["lectura", "videojuegos", "descansar"],
    educacion: {
        primaria: "CEiP Bonavista",
        secundaria: "IES Vidal i Barraquer",
        universidad: "UOC",
    },
    grupoFavorito: "Taylor Davis",
})

const peliculaFav = ref("Mononoke Hime");
const countViews = ref(20);
const comidaFav = ref("Pizza");



</script>

<!-- CSS -->
<style scoped>

</style>
