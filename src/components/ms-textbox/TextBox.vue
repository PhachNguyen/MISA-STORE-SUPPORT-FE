<template>
  <div class="text-box-wrapper display-flex flex-column">
    <div class="title" v-if="props.label">
      <!-- <div class="icon-infor-error"></div> -->
      <span class="label" :title="props.label">{{ props.label }}</span>
      <span v-if="props.required" class="required">*</span>
    </div>

    <div class="input-container">
      <!-- Blur: envent khi người dùng ra khỏi ô input -->
      <input
        type="text"
        :class="['input', statusClass]"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :value="props.modelValue"
        @input="updateValue($event.target.value)"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <div v-if="props.isLoading" class="icon-box icon-loading">
        <!-- <i class="fas fa-circle-notch fa-spin"></i> -->
      </div>

      <div v-else-if="hasError" class="icon-box" title="Lỗi">
        <div class="icon-infor-error"></div>
      </div>

      <div v-else-if="props.isValid" class="icon-box icon-valid">
        <i class="fas fa-check-circle"></i>
      </div>
    </div>

    <div v-if="hasError" class="error-text">
      {{ props.errorText }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,

  // --- CÁC PROP TRẠNG THÁI MỚI ---
  errorText: { type: String, default: '' }, // Có text lỗi -> State Error
  isLoading: { type: Boolean, default: false }, // Đang call API -> State Verifying
  isValid: { type: Boolean, default: false }, // Dữ liệu đúng -> State Valid
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

// Kiểm tra có lỗi không trả về boolean
const hasError = computed(() => props.errorText && props.errorText.length > 0)

// Tính toán Class cho Input dựa trên trạng thái
const statusClass = computed(() => {
  if (props.isLoading) return 'input--loading' // Ưu tiên 1
  if (hasError.value) return 'input--error' // Ưu tiên 2
  if (props.isValid) return 'input--valid' // Ưu tiên 3
  return ''
})

function updateValue(value) {
  emit('update:modelValue', value)
}
function handleBlur(event) {
  emit('blur', event)
}
function handleFocus(event) {
  emit('focus', event)
}
</script>

<style scoped>
.text-box-wrapper {
  margin-bottom: 16px;
  width: 100%;
}
.title {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.label {
  font-weight: 600;
  font-size: 14px;
  color: #111;
}
.required {
  color: red;
  margin-left: 4px;
}

/* Container */
.input-container {
  position: relative;
  width: 100%;
}

/* Input cơ bản */
.input {
  height: 36px;
  width: 100%;
  padding: 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  transition: all 0.2s;
}

/* Hover & Focus mặc định (khi không có lỗi/loading) */
.input:hover:not(:disabled):not(.input--error):not(.input--valid) {
  border-color: #2ca01c;
}
.input:focus:not(.input--error):not(.input--valid) {
  border-color: #2ca01c;
}

/* --- 1. VERIFYING (LOADING) --- */
.input.input--loading {
  border-color: #2ca01c; /* Viền xanh */
  padding-right: 36px;
  background-color: #f2f9f3; /* Nền xanh rất nhạt (tuỳ chọn) */
}
.icon-loading {
  color: #2ca01c;
}

/* --- 2. ERROR --- */
.input.input--error {
  border-color: #e61d1d;
  padding-right: 36px;
}
/* .icon-error {
  color: #e61d1d;
} */
.error-text {
  margin-top: 4px;
  font-size: 12px;
  color: #e61d1d;
}

/* --- 3. VALID (SUCCESS) --- */
.input.input--valid {
  border-color: #2ca01c; /* Viền xanh */
  padding-right: 36px;
}
.icon-valid {
  color: #2ca01c; /* Icon xanh */
}

/*Vị trí icon*/
.icon-box {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-size: 16px;
}
</style>
