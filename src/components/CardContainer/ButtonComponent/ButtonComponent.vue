<script setup>
import AboutModal from '../AboutModal/AboutModal.vue';
import { ref } from 'vue';
	const clicked = ref(false);
	defineProps({
		class: String,
		content:String,
	})

const openModal =()=>{
	clicked.value =!clicked.value;
}
</script>

<template>
	<button v-if="!content.includes('.svg')" data-modal-target="default-modal" data-modal-toggle="default-modal" :class="class" @click="openModal">
		{{ content }} 
	</button>
	<AboutModal v-bind:active="clicked" @click="openModal"/>
</template>