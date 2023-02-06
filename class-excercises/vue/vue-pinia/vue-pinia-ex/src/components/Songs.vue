<script setup>
// JS
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useSongsStore} from "../stores/songs"

const mySongsVar = ref(useSongsStore().mySongs);




</script>


<template>
    <!-- HTML -->


    <h1>My Songs Store</h1>
    <div v-if="mySongsVar.length!== 0">

        <ul v-for="song in mySongsVar">
            <li>{{ song }}</li>
        </ul>

    </div>
    <div v-else>
        <p>Todavía no hay canciones en la store</p>
    </div>

    <div>
        <input v-model="useSongsStore().inputValue" type="text">
        <button @click="useSongsStore().submitSong">Submit</button>
        <button @click="useSongsStore().restSongs" >Borrar canciones</button>
    </div>
    



    
   
    
</template>

<style scoped>
/* CSS */


</style>