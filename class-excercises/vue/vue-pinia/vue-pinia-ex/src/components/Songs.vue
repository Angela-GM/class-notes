<script setup>
// JS
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useSongsStore} from "../stores/songs"

const mySongsVar = ref(useSongsStore().mySongs);
const submitBtn = () => {
    useSongsStore().submitSong;
    // useSongsStore().inputValue = "";
    useSongsStore().submitSong();

};





</script>


<template>
    <!-- HTML -->


    <h1>My Songs Store</h1>
    <div v-if="mySongsVar.length!== 0">
        <ul v-for="(song, index) in mySongsVar" :key="index">
            <li>{{ song }}</li>
        </ul>
    </div>
    <div v-else>
        <p>Todavía no hay canciones en la store</p>
    </div>

    <div>
        <input v-model="useSongsStore().inputValue" type="text" placeholder="Añade una canción">
        <button @click="submitBtn">Submit</button>
        <button @click="useSongsStore().restSongs">Borrar canciones</button>
    </div>
    



    
   
    
</template>

<style scoped>
/* CSS */


</style>