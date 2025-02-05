<script setup lang="ts">
import { RouterLink } from "vue-router";
import ButtonUI from "./ButtonUI.vue";
</script>


<template>
  <!-- Container -->
  <div
    class="max-w-[1024px] flex-1 w-full mx-auto rounded-lg bg-[#282828] border border-[#333]"
  >
    <!-- container header -->
    <div
      class="h-[60px] px-5 text-[#ccc] border-b border-[#333] flex items-center"
    >
      <div class="text-xl">Tasklists</div>
      <div class="flex-1"></div>
      <RouterLink to="/new"><ButtonUI>Create New</ButtonUI></RouterLink>
    </div>
    <!-- Container body -->
    <div></div>
    <!-- Placeholder -->
    <div class="text-center pt-16 text-[#666] text-xl">Tasklists will appear here !</div>
  </div>
</template>
