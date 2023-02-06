<!-- HTML -->
<template>
  <section>
    <BandImage />

    <BandName band-name="Apocalyptica"/>

    <Song />

    <SongInfo />
  </section>
</template>

<!-- JS -->
<script setup>
import { ref, reactive } from "vue";
import BandName from "../components/BandName.vue";
import BandImage from "../components/BandImage.vue";
import Song from "../components/Song.vue";
import SongInfo from "../components/SongInfo.vue";

</script>

<!-- CSS -->
<style scoped>
</style>