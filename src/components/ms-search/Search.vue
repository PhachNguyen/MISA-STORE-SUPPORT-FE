<template>
  <div class="ms-search-wrapper" :style="{ width: width }">
    <div class="icon-search"></div>

    <input
      type="text"
      class="ms-input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Tìm kiếm...',
  },
  width: {
    type: String,
    default: '240px',
  },
})

// Định nghĩa sự kiện bắn ra (Emits)
const emit = defineEmits(['update:modelValue'])

// Hàm cập nhật dữ liệu khi người dùng gõ
const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.ms-search-wrapper {
  position: relative;
  /* display: flex;
  align-items: center; */
}

.icon-search {
  position: absolute;
  left: 10px; /* Căn trái 10px */
  top: 50%;
  transform: translateY(-50%); /* Căn giữa theo chiều dọc */
  pointer-events: none; /* Để click vào icon vẫn focus vào input */
  display: flex;
}

.ms-input {
  width: 100%;
  height: 36px;
  padding: 0 10px 0 36px;
  font-size: 14px;
  color: #1f1f1f;

  /* Style viền */
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #fff;
  outline: none; /* Bỏ viền xanh mặc định của trình duyệt */
  transition: border-color 0.2s;
}

/* Placeholder color */
.ms-input::placeholder {
  color: #999;
  font-style: normal; /* Nếu muốn nghiêng thì để italic */
}

/* Hiệu ứng khi Focus (Bấm chuột vào) */
.ms-input:focus {
  border-color: #2ca01c; /* Màu xanh lá chuẩn MISA */
}

/* Hiệu ứng khi Hover (Di chuột qua) */
.ms-input:hover {
  border-color: #bbbbbb; /* Đậm hơn chút khi hover */
}
/* Ưu tiên border xanh khi đang focus kể cả hover */
.ms-input:focus:hover {
  border-color: #2ca01c;
}
</style>
