


<script setup>
import { ref } from 'vue';
defineProps({
	active: Boolean,
})

const emit = defineEmits(['inFocus', 'click'])

const closeModal = () => {
	emit('click')
}

const options = [{ title: 'Pledge with no reward', descreption: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.' }, { title: 'Bamboo Stand', sideText: 'Pledge $25 or more', descreption: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", inStock: 101 }
	, { title: "Black Edition Stand", sideText: 'Pledge $75 or more', descreption: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", inStock: 64 },
{ title: "Mahogany Special Edition", sideText: "Pledge $200 or more", descreption: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", inStock: 0 }
];

const selected = ref(null);

const success = ref(false);

const setSelected = (index) => {
	selected.value = index;
}

const pledge = ref(0);

const checkPledge = (e) => {
	e.preventDefault();
	if (!pledge.value || pledge.value === 0) {
		console.log("Please add a pledge value to continue")
	} else {
		success.value = true;
		closeModal();
	}
};

const closeSuccessModal = () => {
	success.value = false;
	pledge.value = 0;
	selected.value = null;
}

</script>

<template>
	<!-- Main modal -->
	<div id="default-modal" tabindex="-1" aria-hidden="true" :class="active ? '' : 'hidden'"
		class="overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-black/50 mx-auto">
		<div class="relative  w-full max-w-2xl max-h-full  flex justify-center items-start ">
			<!-- Modal content -->
			<div
				class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[45.625rem] h-[56.563rem] min-h-auto max-2xs:w-[20.438rem] max-2xs:min-h-[84.938rem]">
				<!-- Modal header -->
				<div
					class="flex items-center w-[40.625rem] pt-6 justify-between max-2xs:w-[17.5rem] mx-auto max-2xs:pt-8  rounded-t dark:border-gray-600 ">
					<h3
						class=" text-2xl font-bold text-gray-900 dark:text-white  font-Commissioner max-2xs:text-lg leading-normal pt-1">
						Back this project
					</h3>
					<button type="button"
						class="text-gray-400 bg-transparent
						 hover:bg-gray-200
						  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white  "
						data-modal-hide="default-modal" @click="closeModal">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M15.0708 3.75738L12.2424 0.928955L7.99978 5.1716L3.75714 0.928955L0.928711 3.75738L5.17135 8.00002L0.928711 12.2427L3.75714 15.0711L7.99978 10.8285L12.2424 15.0711L15.0708 12.2427L10.8282 8.00002L15.0708 3.75738Z"
								fill="black" />
						</svg>
						<span class="sr-only">Close modal</span>
					</button>


				</div>

				<div class=" pl-12 max-2xs:w-[17.5rem] max-2xs:pl-0 mx-auto">
					<p
						class=" font-Commissioner font-normal text-[#7A7A7A] text-base mt-4 mb-8 leading-[30px] max-2xs:text-sm max-2xs:leading-[24px]">
						Want to support us
						in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>

					<div class="flex flex-col gap-6 max-2xs:w-[17.5rem] ">
						<div @click="setSelected(idx)" v-for="item, idx in options"
							class=" w-[39.625rem] min-h-[9.813rem] h-auto max-2xs:w-full max-2xs:h-auto max-2xs:min-h-[15.125rem]  rounded-lg bg-white border last:mb-4"
							:class="item.inStock === 0 ? 'opacity-60 ' : '' + (selected === idx ? ' border border-[#3CB3AB]' : ' border border-[#0000000d]')">
							<div class=" flex flex-col gap-6  pl-7 pt-8 max-2xs:p-6 ">

								<div class="flex gap-4">
									<!--RADIO-->
									<div class="h-6 w-6 rounded-full flex justify-center  items-center border border-[#0000000d] p-1 hover:border-[#3CB3AB] hover:cursor-pointer"
										:class="item.inStock === 0 && 'cursor-not-allowed'">
										<div class="  w-3 h-3 rounded-full"
											:class="selected === idx && item.inStock != 0 ? 'bg-[#3CB3AB]' : 'bg-transparent'">
										</div>
									</div>

									<!-- heading -->

									<h4 class="flex justify-between pr-7 max-2xs:p-0 font-Commissioner w-full">
										<p class="flex max-2xs:flex-col justify-between gap-4 max-2xs:gap-2 ">
											<span
												class=" text-black hover:text-[#3CB3AB] hover:cursor-pointer font-bold text-base">
												{{ item.title }}
											</span>

											<span class=" font-Commissioner text-[#3CB3AB] text-base font-bold"
												v-if="item.sideText">
												{{ item.sideText }}
											</span>
										</p>
										<p class=" max-2xs:hidden font-Commissioner  text-[#7A7A7A] text-sm"
											v-if="item.inStock || item.inStock === 0">
											<span class=" text-black font-bold text-lg">{{ item.inStock }}</span> left
										</p>
									</h4>
								</div>




								<p class=" mt-4 max-2xs:mt-0 text-[#7A7A7A] text-base">{{ item.descreption }}</p>

								<p class=" 2xs:hidden font-Commissioner  text-[#7A7A7A] text-sm"
									v-if="item.inStock || item.inStock === 0">
									<span class=" text-black font-bold text-lg ">{{ item.inStock }}</span> left
								</p>
							</div>

							<div class="h-full self-end border-t mt-8 max-2xs:mt-6"
								v-if="selected === idx && item.inStock !== 0">
								<div class=" p-7 flex  max-2xs:flex-col max-2xs:gap-4 justify-between items-center">
									<p class=" font-Commissioner font-normal text-base text-[#7A7A7A]  leading-[28px] ">
										Enter your pledge
									</p>

									<form class="flex justify-between items-center gap-4" @submit.prevent="checkPledge">

										<div role="button"
											class=" w-[6.25rem] h-12 border hover:border-[#3CB3AB] focus-visible:border-[#3CB3AB] active:border-[#3CB3AB] focus:border-[#3CB3AB] rounded-full flex justify-center items-center gap-1">
											<span class=" font-Commissioner  opacity-25 font-bold ">$</span>
											<input type="number"
												class=" w-8 outline-none border-none caret-[#3CB3AB] font-Commissioner text-sm font-bold"
												v-model="pledge">
										</div>

										<button type="submit"
											class="font-Commissioner font-bold text-white flex items-center justify-center text-base  rounded-full w-[6.688rem]  h-12 bg-[#3CB3AB] hover:bg-[#147A73]">
											Continue
										</button>
									</form>
								</div>

							</div>


						</div>

					</div>


				</div>

			</div>
		</div>
	</div>

	<div v-if="success" tabindex="-1" aria-hidden="true" :class="success ? '' : 'hidden'"
		class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/50">
		<div class="relative  w-full max-w-2xl max-h-full mx-auto flex justify-center items-center ">
			<!-- Modal content -->
			<div
				class="relative p-12 bg-white rounded-lg shadow dark:bg-gray-700 w-[33.75rem] h-auto min-h-[28.063rem] flex flex-col justify-around items-center max-2xs:w-[20.438rem]  max-2xs:px-6 max-2xs:pt-8">

				<svg xmlns="http://www.w3.org/2000/svg" class=" max-2xs:w-16 max-2xs:h-16" width="90" height="90"
					viewBox="0 0 90 90" fill="none">
					<circle cx="45" cy="45" r="45" fill="#3CB3AB" />
					<path d="M28 44.8753L39.2633 56.1387L61.402 34" stroke="white" stroke-width="5" />
				</svg>

				<h3 class=" font-Commissioner font-bold text-2xl text-center leading-normal max-2xs:text-lg">
					Thanks for your support!
				</h3>
				<p
					class=" text-center font-Commissioner text-[#7A7A7A] font-normal leading-[30px] text-base max-2xs:leading-[24px]">
					Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will
					get an email once our campaign is completed.
				</p>

				<button
					class=" w-[6.688rem] h-12 flex items-center text-sm justify-center text-white bg-[#3CB3AB] hover:bg-[#147A73] rounded-full"
					@click="closeSuccessModal">
					Got it!
				</button>



			</div>
		</div>
	</div>
</template>

<style scoped>input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	/* display: none; <- Crashes Chrome on hover */
	-webkit-appearance: none;
	margin: 0;
	/* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
	-moz-appearance: textfield;
	/* Firefox */
}</style>