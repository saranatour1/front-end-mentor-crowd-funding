<script setup>
import BookMarkIcon from "./BookMarkIcon.vue";
import { ref } from "vue";
const clicked = ref(false);
defineProps({
  class: String,
  content: String,
  text: String,
});

const bookMarked = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <button v-bind:class="clicked && 'bg-[#f3f8f8]'" :class="class" @click="bookMarked">
    <BookMarkIcon v-bind:active="clicked" />
    <p
      class="max-[375px]:hidden font-Commissioner text-grayish font-bold text-base mr-4"
      :class="clicked && 'text-[#147A73]'"
    >
      {{ clicked ? "Bookmarked" : text }}
    </p>
  </button>
</template>
