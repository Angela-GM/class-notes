<!-- HTML -->
<template>
    <!-- <h1>Name Band</h1> -->
    <h1>{{ bandName }}</h1>
    
</template>

<!-- JS -->
<script setup>
import {ref, reactive} from "vue";

// Define el prop
const props = defineProps({
    bandName: {
        type: String,

    },
})


</script>

<!-- CSS -->
<style scoped>

</style>
