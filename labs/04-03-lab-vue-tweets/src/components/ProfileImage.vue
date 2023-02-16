<template>
  <div>
    <img :src="imageURL" className="profile" alt="profile" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  imageURL: String,
});
</script>

<style scoped></style>
