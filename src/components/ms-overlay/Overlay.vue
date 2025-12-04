<script setup>
//  Định nghĩa props
const props = defineProps({
  modalValue: {
    type: Boolean,
    default: false,
  },
})
//  Định nghĩa emit
const emit = defineEmits(['update:modalValue'])

//  Function close
const close = () => emit('update:modalValue', false)
</script>
<template>
  <div class="overlay" id="overlay" :class="{ show: modalValue }" @click="close"></div>
</template>
<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: #818283;
  /* Set up là none  */
  display: none;
  z-index: 1000;
  /* Làm mờ nền  */
  backdrop-filter: blur(2px);
  pointer-events: none;
  /*  độ ẩn trong suốt */
  opacity: 0;
  /* Làm hiệu ứng mượt */
  transition: opacity 0.3s ease;
}
/* Hiển thị overlay */
.overlay.show {
  display: block;
  z-index: 1000;
}
</style>
>
