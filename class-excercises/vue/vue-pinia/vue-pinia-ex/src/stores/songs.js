import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useSongsStore = defineStore("songs", () => {
  //variable que guarda el array de canciones
  let mySongs = reactive([]);

  //funcion que inserta el valor del input dentro del array de mySongs
  let inputValue = ref("");

  //funcion que inserta el valor del input dentro del array de mySongs
  const submitSong = () => {
    mySongs.push(inputValue.value);
  };

  //funcion para borrar todos los datos de mySongs array
  const restSongs = () => {
    mySongs.splice(0, mySongs.length);
  };

  return { mySongs, inputValue, submitSong, restSongs };
});
