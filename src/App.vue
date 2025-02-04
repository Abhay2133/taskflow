<script lang="ts" setup>
import ButtonUI from "./components/ButtonUI.vue";
</script>

<template>
  <div class="flex flex-col min-h-full bg-red-500">
    <header class="px-5 bg-[#181818]">
      <h1
        class="h-[50px] text-2xl flex items-center m-0 text-white font-semibold"
      >
        TaskFlow
      </h1>
    </header>
    <main class="bg-[#222] flex-1 flex flex-col p-3">
      <!-- Container -->
      <div
        class="max-w-[1024px] flex-1 w-full mx-auto rounded-lg bg-[#333] border border-[#444]"
      >
        <!-- container header -->
        <div
          class="h-[60px] px-5 text-[#aaa] border-b border-[#444] flex items-center"
        >
          <div class="text-xl">Tasklists</div>
          <div class="flex-1"></div>
          <ButtonUI>Create New</ButtonUI>
        </div>
        <!-- Container body -->
        <div>Do Some Workout</div>
      </div>
    </main>
  </div>
</template>
