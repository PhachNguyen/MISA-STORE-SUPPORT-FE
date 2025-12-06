<template>
  <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <div class="popup-header">
        <div class="popup-title">Chia sẻ link</div>
        <div class="btn-close" @click="closePopup">
          <i class="fas fa-times"></i>
        </div>
      </div>

      <div class="social-list display-flex">
        <div v-for="(item, index) in socialItems" :key="index" class="social-item">
          <div class="social-icon">
            <img :src="item.icon" :alt="item.name" />
          </div>
          <div class="social-name">{{ item.name }}</div>
        </div>
      </div>

      <div class="copy-link-box display-flex align-items-center">
        <div class="link-text">{{ props.link }}</div>
        <div class="btn-copy display-flex align-items-center" @click="handleCopy">
          <i class="far fa-copy"></i> <span>Sao chép</span>
        </div>
      </div>

      <div class="qr-section">
        <img
          :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${props.link}`"
          alt="QR Code"
          class="qr-image"
        />
      </div>

      <div class="download-action display-flex justify-content-center align-items-center">
        <i class="fas fa-download"></i>
        <span class="download-text">Tải xuống</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- Props & Emits ---
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: 'https://amis.misa.vn/afs/B-1170/29739...',
  },
})

const emit = defineEmits(['close', 'copy'])

// --- Dữ liệu giả lập các icon (Bạn cần thay ảnh thật vào assets) ---
// Vì tôi không có file ảnh của bạn, tôi dùng link placeholder,
// bạn hãy thay bằng đường dẫn: new URL('@/assets/icons/zalo.svg', import.meta.url).href
const socialItems = ref([
  { name: 'Zalo', icon: 'https://cdn-icons-png.flaticon.com/512/3670/3670057.png' },
  { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' },
  { name: 'Threads', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png' }, // Demo icon
  { name: 'X', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png' },
  { name: 'Email', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png' },
])

// --- Hàm xử lý ---
const closePopup = () => {
  emit('close')
}

const handleCopy = () => {
  // Copy vào clipboard
  navigator.clipboard.writeText(props.link)
  // Emit ra ngoài để hiện Toast thông báo thành công
  emit('copy')
}
</script>

<style scoped>
/* Font icon */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

/* --- Layout chính --- */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Nền tối mờ */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  width: 450px;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.2s ease-out;
  position: relative;
}

/* --- Header --- */
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.popup-title {
  font-size: 20px;
  font-weight: 700;
  color: #111;
}

.btn-close {
  cursor: pointer;
  font-size: 20px;
  color: #666;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-close:hover {
  color: #111;
}

/* --- Social List --- */
.social-list {
  justify-content: space-between;
  margin-bottom: 24px;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 8px;
}

.social-icon img {
  width: 40px;
  height: 40px;
  border-radius: 8px; /* Bo góc icon */
  object-fit: cover;
}

.social-name {
  font-size: 13px;
  color: #111;
}

/* --- Copy Link Box --- */
.copy-link-box {
  background-color: #f2f2f2; /* Màu xám nhạt giống MISA */
  border-radius: 4px;
  padding: 10px 12px;
  justify-content: space-between;
  margin-bottom: 24px;
  border: 1px solid transparent;
}
.copy-link-box:hover {
  border-color: #dcdcdc;
}

.link-text {
  color: #111;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Cắt chữ nếu dài quá */
  max-width: 280px;
  margin-right: 10px;
}

.btn-copy {
  cursor: pointer;
  color: #2ca01c; /* Màu xanh MISA */
  font-weight: 500;
  font-size: 14px;
  gap: 6px;
  white-space: nowrap;
}
.btn-copy:hover {
  color: #1e7e12;
}

/* --- QR Code --- */
.qr-section {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.qr-image {
  width: 140px;
  height: 140px;
}

/* --- Download Action --- */
.download-action {
  gap: 8px;
  color: #2ca01c;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.download-action:hover {
  color: #1e7e12;
}

/* Utilities */
.display-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-center {
  justify-content: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
