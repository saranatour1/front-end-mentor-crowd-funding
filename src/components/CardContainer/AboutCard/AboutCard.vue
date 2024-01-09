<script setup>
const options = [{ title: 'Bamboo Stand', sideText: 'Pledge $25 or more', descreption: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", inStock: 101 }
  , { title: "Black Edition Stand", sideText: 'Pledge $75 or more', descreption: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", inStock: 64 },
{ title: "Mahogany Special Edition", sideText: "Pledge $200 or more", descreption: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", inStock: 0 }
];

</script>

<template>
  <div
    class=" max-2xs:w-[20.438rem]  max-2xs:h-[103.438rem] w-[45.625rem] h-[74.813rem] rounded-lg bg-white border border-[#0000000d] flex flex-col justify-start max-2xs:p-6 p-12 ">
    <h3 class=" font-Commissioner max-2xs:text-lg text-[20px] font-bold  leading-normal mb-6">About this project</h3>

    <p class="  text-base max-2xs:text-sm text-[#7A7A7A] max-2xs:leading-[24px] leading-[30px] font-normal">The
      Mastercraft Bamboo Monitor Riser is a sturdy and
      stylish platform that elevates your screen to a more
      comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you
      more comfortable while at work, helping you stay focused on the task at hand.
    </p>

    <p
      class=" text-base max-2xs:text-sm text-[#7A7A7A] max-2xs:leading-[24px] leading-[30px] font-normal max-2xs:mt-1 mt-2">
      Featuring artisan craftsmanship, the simplicity of
      design creates extra desk space below your computer to allow
      notepads, pens, and USB sticks to be stored under the stand.</p>

    <div class=" mt-8 flex flex-col justify-around items-center max-2xs:gap-6 gap-6">
      <div v-for="item in options"
        class="rounded-lg bg-white border border-[#0000000d] w-full h-auto max-2xs:p-6 p-[32px] "
        :class="item.inStock === 0 ? ' opacity-50' : ' opacity-100'">
        <hgroup
          class=" flex max-2xs:flex-col max-2xs:gap-2 max-2xs:justify-start max-2xs:items-start justify-between items-center ">
          <h4 class=" font-Commissioner font-bold max-2xs:text-sm text-lg leading-normal  text-black"> {{ item.title }}
          </h4>
          <p class=" text-[#3CB3AB] text-sm font-medium  font-Commissioner"> {{ item.sideText }}</p>
        </hgroup>
        <p
          class=" mt-6 font-Commissioner max-2xs:text-sm  text-[#7A7A7A] max-2xs:leading-[24px] leading-[30px] text-base font-normal">
          {{ item.descreption }}
        </p>

        <div class="flex max-2xs:flex-col justify-between gap-6 py-5">

          <p class=" inline-flex items-center justify-center w-[4.5rem] gap-2">
            <span class=" text-3xl font-Commissioner font-bold  ">{{ item.inStock }}</span>
            <span class="text-sm font-Commissioner font-normal text-[#7A7A7A]"> left</span>
          </p>

          <button class=" w-[9.813rem] h-12 rounded-full   font-Commissioner text-white text-sm font-bold"
            :class="item.inStock === 0 ? 'bg-[#2F2F2F] opacity-50 cursor-not-allowed' : 'bg-[#3CB3AB] hover:bg-[#147A73] '"
            v-text="item.inStock >0 ? 'Select Reward':'Out of Stock'">

        </button>
      </div>

    </div>
  </div>


</div></template>