<script setup>
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';

</script>

<script>
    import bookMarkSvg from '../../../assets/icon-bookmark.svg';
    import BookMarkButton from '../BookMarkButton/BookMarkButton.vue';
    export default {
		data:()=>({
			logo: bookMarkSvg,
		
		})
	}
</script>

<template>
  
  <div class=" max-[375px]:w-[20.438rem] max-[375px]:h-[16.8125rem] w-[45.625rem] h-[16.813rem] relative z-10 mx-auto -mt-14 mb-4 rounded-lg bg-white border border-[#0000000d] flex flex-col justify-start items-center">
    <img src="../../../assets/logo-mastercraft.svg" alt="logo" class=" -translate-y-1/2 w-12 h-12">
    <h3 class="text-center text-2xl  max-[375px]:text-xl font-bold mx-6 font-Commissioner leading-[24px] break-words text-black">Mastercraft Bamboo Monitor Riser</h3>
    <p class=" font-Commissioner text-grayish text-sm mx-6 text-center font-normal leading-[24px] mt-4">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
    <div class=" flex  mx-6 max-[375px]:w-[17.438rem]  items-center justify-between mt-6 mb-12 w-[39.625rem] ">
      <ButtonComponent class=" text-white bg-cyan text-center text-md font-bold font-Commissioner px-10 py-4 rounded-[33.5px] hover:bg-[#147A73]" content="Back this project"/>
      
      <BookMarkButton class="max-[375px]:bg-transparent  max-[375px]:w-14 max-[375px]:h-14 flex items-center justify-between w-[10.813rem] bg-other-grayish rounded-full  " v-bind:content="logo" text="Bookmark"/>
    </div>
  </div>
</template>
