<template>
  <div className="tweet">
    <img
      src="src"
      className="profile"
      alt="alt"
    />

    <div className="body">
      <div className="top">
        <span className="user">
          <span className="name">{{name}}</span>
          <span className="handle">{{handle}}</span>
        </span>

        <span className="timestamp">{{timestamp}}</span>
      </div>

      <p className="message">
        {{message}}
      </p>

      <div className="actions">
        <!-- Font Awesome icons -->
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  message: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  handle: {
    type: String,
  },
  name: {
    type: String,
  },
  src: {
    type: String,   
  },
  alt: {
    type: String,
  }



});




</script>


<style scoped>
a {
  color: #42b983;
}
</style>
