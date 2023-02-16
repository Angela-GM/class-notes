<script setup>
import { ref, reactive } from "vue";
// importar los componentes
import ProfileImage from "./ProfileImage.vue";
import User from "./User.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import Action from "./Action.vue";
// definiir props para poder traernos los datos
defineProps({
  userName: String,
  userImage: String,
  userHandle: String,
  userTimestamp: String,
  userMessage: String,
});
</script>

<template>
  <!-- Iteración 2 -->
  <!-- <div className="tweet">
    <img :src="userImage" className="profile" alt="profile" />

    <div className="body">
      <div className="top">
        <span className="user">
          <span className="name">{{ userName }}</span>
          <span className="handle">@{{ userName }}</span>
        </span>

        <span className="timestamp">{{ userTimestamp }}</span>
      </div>

      <p className="message">{{ userMessage }}</p>

      <div className="actions"> -->
  <!-- Font Awesome icons -->
  <!-- <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div> -->

  <!-- <i class="fas fa-ellipsis-h"></i>
  </div> -->
  <!-- Iteración 3, varios componentes -->
  <div className="tweet">
    <ProfileImage :image-u-r-l="userImage" />

    <div className="body">
      <div className="top">
        <User :user-name="userName" :user-handle="userHandle" />

        <Timestamp :user-timestamp="userTimestamp" />
      </div>

      <Message :user-message="userMessage" />
      <Action />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
