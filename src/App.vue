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
        <div class="md:px-10 py-3 flex flex-col gap-2">
          <!-- Table Header -->
          <div class="flex w-full text-[#ffffff33]">
            <div class="flex-1 pl-8">Name</div>
            <div class="md:w-[400px]">Progress</div>
          </div>
          <!-- Tasklist List -->
          <div
            class="flex bg-[#222] h-[40px] rounded items-center px-5 text-[#aaa] text-base"
          >
            <div class="ml-3 flex-1">TaskName</div>
            <div class="w-[330px]">Progress</div>
            <div class="flex w-[30px] mx-[10px] justify-center rounded-sm hover:bg-[#111] active:translate-y-1 transition">
              <img src="/dots.png" height="20" width="20" class="rotate-90 " />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
