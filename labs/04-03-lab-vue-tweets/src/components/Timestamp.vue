<template>
  <span className="timestamp">{{ userTimestamp }}</span>
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  userTimestamp: String,
});
</script>

<style scoped></style>
