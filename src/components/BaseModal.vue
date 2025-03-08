<template>
    <Teleport to="body">
        <div class="z-50 backdrop-blur-lg h-svh w-full fixed flex justify-center items-center" :class="modalClass">
            <div class="bg-grey-800 rounded-sm bg-gray-950 max-w-[500px] w-full text-gray-100 flex flex-col">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
defineProps({
    modalClass: {
        type: String,
        default: ""
    }
})
console.log("HELLO")
</script>