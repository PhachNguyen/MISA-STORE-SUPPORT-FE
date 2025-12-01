<template>
  <div class="text-box-wrapper display-flex flex-column">
    <div class="title">
      <span class="label">{{ props.label }}</span>
      <span v-if="props.required" class="required">*</span>
      <span v-if="props.sub_label" class="sub-label"> {{ props.sub_label }}</span>
    </div>
    <div>
      <input
        type="text"
        class="input"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  sub_label: {
    type: String,
    default: '',
  },
  required: Boolean,
  disabled: Boolean,
})
</script>

<style scoped>
.text-box-wrapper {
  gap: 10px;
  margin-bottom: 15px;
}
/* .title{
  gap:10
} */
.label {
  color: #212121;
  font-weight: 600;
}
.input {
  height: 36px;
  width: 100%;
  padding: 0 12px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
}
.required {
  color: red;
  margin-left: 3px;
}
.sub-label {
  color: #666666;
  font-weight: 600;
  margin-left: 2px;
}
.input:disabled {
  background-color: #ebebe4; /* Hoặc #f5f5f5 - Màu xám giống ảnh */
  color: #555; /* Màu chữ đậm hơn placeholder */
  cursor: not-allowed; /* Chuột hiện dấu cấm */
  border-color: #dcdcdc;
}
</style>
