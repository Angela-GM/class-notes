<!-- HTML -->
<template>
      <p>Song Info</p>
      <p>{{ songInfo }}</p>
    
</template>

<!-- JS -->
<script setup>
import {ref, reactive} from "vue";
const props = defineProps (
      {
            songInfo: {
                  type: String,
            }
      }
)


</script>

<!-- CSS -->
<style scoped>

</style>