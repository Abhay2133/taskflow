<template lang="">
    <button class="text-base text-center h-[40px] px-5 bg-[#111] {{class}}" style="{{style}}">
        <slot></slot>
    </button>
</template>
<script>
export default {
  props:{
    class: String,
    style: Object
  },

}
</script>