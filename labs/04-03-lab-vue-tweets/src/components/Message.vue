<template>
  <p className="message">{{ userMessage }}</p>
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  userMessage: String,
});
</script>

<style scoped></style>
