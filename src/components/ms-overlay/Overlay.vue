<template>
  <!-- Chỉ render khi visible -->
  <teleport to="body">
    <div
      v-if="modelValue"
      class="overlay-backdrop"
      :style="{ zIndex }"
      @click="handleBackdropClick"
    >
      <!-- Nội dung overlay -->
      <div class="overlay-content" :class="contentClass" @click.stop>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: true, // click ra ngoài để tắt
  },
  zIndex: {
    type: Number,
    default: 1000,
  },
  contentClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'close'])

const handleBackdropClick = () => {
  if (!props.closable) return
  emit('update:modelValue', false)
  emit('close')
}
</script>

<style scoped>
.overlay-backdrop {
  position: fixed;
  inset: 0; /* top: 0; right: 0; bottom: 0; left: 0 */
  background: rgba(0, 0, 0, 0.4); /* nền mờ mờ */
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  background: #fff;
  border-radius: 8px;
  padding: 16px 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
