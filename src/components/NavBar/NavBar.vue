<script setup>
import { ref } from 'vue';
	const navBarOptions = ['About', 'Discover', 'Get Started'];
	const isOpen = ref(false);

	const openOrCloseNav = () => {
		isOpen.value = !isOpen.value;
	}
</script>

<script>
import img1 from '../../assets/icon-hamburger.svg';
import img2 from '../../assets/icon-close-menu.svg'
	export default {
		data:()=>({
			logo: img1,
			logo2:img2,
		})
	}
</script>

<template>
  <nav
    class="flex h-5 justify-around items-center mt-8 absolute top-0 left-0 z-10 w-full gap-[34.4rem] max-[375px]:gap-0"
  >
    <h3
      class="font-Commissioner w-32 h-5 text-2xl font-bold leading-4 tracking-tighter text-white"
    >
      Crowdfund
    </h3>
    <div id="nav" class="flex gap-8">
      <a
        class="max-[375px]:hidden font-Commissioner text-md text-white cursor-pointer hover:border-b-2 font-medium"
        v-for="item in  navBarOptions"
        >{{ item }}</a
      >
    </div>

    <img
      :src="isOpen ? logo2 : logo"
      class="min-[375px]:hidden md:hidden lg:hidden"
      role="button"
      @click="openOrCloseNav"
      data-modal-target="default-modal"
      data-modal-toggle="default-modal"
    />
  </nav>

  <nav
    v-if="isOpen"
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    :class="!isOpen && 'hidden'"
    class="md:hidden lg:hidden min-[375px]:hidden overflow-y-auto overflow-x-hidden fixed top-20 right-0 left-0 z-50 mx-auto md:inset-0 h-[calc(100%-1rem)] max-h-full w-full"
  >
    <div
      class="flex flex-col justify-around h-52 max-h-full bg-white rounded-md transition-all w-11/12 mx-auto"
    >
      <a
        v-if="isOpen"
        v-for="item in navBarOptions"
        class="indent-5 font-Commissioner text-sm w-full h-full flex items-center justify-start border-opacity-5 font-medium"
        >{{
					item }}</a
      >
    </div>
  </nav>
</template>

<style scoped>
#nav > a {
  transition: border-bottom 0.3s ease-in-out;
  border-bottom: 1px solid transparent;
}

#nav > a:hover {
  border-bottom: 1px solid white;
}

#default-modal a:not(a:last-of-type) {
  border-bottom: 1px solid rgba(46, 46, 46, 0.103);
}
</style>
