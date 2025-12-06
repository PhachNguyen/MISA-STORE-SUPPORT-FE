<script setup>
import { computed, ref } from 'vue'

//  Định nghĩa props
const props = defineProps({
  type: {
    type: String,
    //  Set 4 type là success, error, warning, info
    default: 'success',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value),
  },
  label: {
    type: String,
    default: '',
  },
})

// // Lấy icon theo type
// function getIcon(type) {
//   const map = {
//     Success: 'icon-success',
//     Error: 'icon-error',
//     Warning: 'icon-warning',
//     Info: 'icon-info',
//   }
//   return map[type] || 'icon-toast-info'
// }
//  Dùng computed để lấy icon
const getIcon = computed(() => {
  {
    const map = {
      success: 'icon-success',
      error: 'icon-error',
      warning: 'icon-warning',
      info: 'icon-info',
    }
    return map[props.type] || 'icon-success'
  }
})
// Computed hiển thị label toast

const isVisible = ref(true)
</script>
<template>
  <div
    v-if="isVisible"
    :class="['ms-toast display-flex align-items-center', `ms-toast--${props.type}`]"
  >
    <!-- Div bọc icon -->
    <div class="icon-box">
      <div :class="getIcon"></div>
    </div>

    <!--  Title  -->
    <div class="title">
      {{ props.label }}
    </div>
    <!-- Close -->
    <div class="ms-toast-close">
      <div class="icon-close"></div>
    </div>
  </div>
</template>

<style scoped>
.ms-toast {
  display: flex;
  align-items: center;
  /* min-width: 300px;
  max-width: 450px; */
  height: 40px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  overflow: hidden; /* Để bo góc cắt phần icon */
  animation: slideInLeft 0.3s ease forwards; /* Hiệu ứng xuất hiện */
  margin-bottom: 10px;
  position: fixed; /* Ghim cố định vào màn hình */
  bottom: 20px;
  right: 20px;
  z-index: 9999; /* Set up hiển thị trên cùng */
}

/*  Icon */
.icon-box {
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

/* Icon size */

/* --- 2. Phần nội dung Text --- */
.ms-toast__content {
  flex: 1; /* Chiếm hết phần còn lại */
  padding: 0 12px; /* Padding trái phải 12px */
  display: flex;
  align-items: center;
}

/* Title */
.title {
  padding-left: 12px;
  font-size: 14px;
}
/* Nút đóng  */
.ms-toast-close {
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  color: #666;
  font-size: 16px;
  height: 100%;
  /* font-weight: 700; */
  display: flex;
  align-items: center;
  border-radius: 50%; /* Bo tròn 50% để tạo hình tròn */
  color: #666;
  transition: all 0.2s ease; /* Hiệu ứng mượt */
}
.ms-toast-close:hover {
  /* border: 1px solid #707070; Viền khi hover */
  /* background: #f2f2f2; */
}

/* SUCCESS - Xanh lá */

.ms-toast--success .icon-box {
  background-color: #00c853; /* Màu nền icon xanh */
}
.ms-toast--success {
  background-color: #c7f2de;
  border: 2px solid #00c853;
}
/* ERROR - Đỏ */

.ms-toast--error .icon-box {
  background-color: #eb5757;
}
.ms-toast--error {
  background-color: #ffe2e2;
  border: 2px solid #eb5757;
}
/* WARNING - Cam */

.ms-toast--warning .icon-box {
  background-color: #f49342;
}
.ms-toast--warning {
  background-color: #fff4e5;
  border: 2px solid #ffd8a8;
}
/* INFO  */

.ms-toast--infor .icon-box {
  background-color: #34b057;
}
.ms-toast--infor {
  background-color: #e8f2fe;
  border: 2px solid #34b057;
}
/* Animation xuất hiện */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
