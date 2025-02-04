<script lang="ts" setup>
import ButtonUI from "./components/ButtonUI.vue";
</script>

<template>
  <div class="flex flex-col min-h-full">
    <header class="px-5 bg-[#181818]">
      <h1
        class="h-[50px] text-2xl flex items-center m-0 text-white font-semibold"
      >
        TaskFlow
      </h1>
    </header>
    <RouterView/>
  </div>
</template>
