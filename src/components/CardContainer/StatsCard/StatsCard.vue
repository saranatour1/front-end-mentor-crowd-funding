<script setup>
const text = [
  ["$89,914", "of $100,000 backed"],
  ["5,007", "total backers"],
  ["56", "days left"],
];
</script>

<template>
  <div
    class="max-2xs:w-[20.438rem] max-2xs:h-[25.75rem] w-[45.625rem] h-[13.25rem] rounded-lg bg-white border border-[#0000000d] flex flex-col justify-start p-12"
    id="main"
  >
    <div id="stats" class="flex w-[32.063rem] gap-10 last:border-r-0">
      <div
        v-for="[number, item] in text"
        class="flex flex-col justify-between items-start border-r-2 pr-12 last:border-r-0 max-2xs:pr-0"
        id="child"
      >
        <h3 class="font-bold text-3xl font-Commissioner">{{ number }}</h3>
        <p class="font-Commissioner text-[#7A7A7A] text-sm font-normal">{{ item }}</p>
      </div>
    </div>

    <div
      class="flex items-center justify-center relative w-[39.625rem] max-2xs:w-[17.438rem] h-3 max-2xs:mt-10 rounded-full"
    >
      <div class="w-[31.8rem] max-2xs:w-[13.625rem] h-full bg-[#3CB3AB] rounded-full absolute top-10 left-0"></div>
      <div class="bg-[#2F2F2F] opacity-5 w-full h-3 rounded-full absolute top-10 left-0 z-0"></div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 375px) {
  #child {
    border-right: 0;
    padding-right: 0;
  }

  #main {
    padding: 33px;
    /* width: 275px; */
    height: 412px;
  }

  #stats {
    flex-direction: column;
    align-items: center;
    width: 275px;
    /* gap: 0px; */
  }
}
</style>
