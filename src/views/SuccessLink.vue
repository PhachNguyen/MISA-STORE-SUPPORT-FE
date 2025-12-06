<template>
  <div class="success-container">
    <div class="success-content">
      <div class="left-section">
        <div class="icon-success-wrapper">
          <i class="fas fa-check"></i>
        </div>

        <div class="title">Tạo link chia sẻ thành công</div>

        <div class="description">
          Vui lòng <b>sao chép</b> link dưới đây để <b>chia sẻ</b> đến khách hàng và
          <b>được ghi nhận doanh số</b> khi phát sinh đơn hàng với sản phẩm bạn phụ trách bán.
        </div>

        <div class="link-box">
          <input type="text" :value="props.generatedLink" readonly />
          <div class="copy-btn" @click="handleCopy" title="Sao chép">
            <i class="far fa-copy"></i>
          </div>
        </div>

        <div class="actions">
          <ms-button label="Chia sẻ" class="btn-share" />
        </div>

        <div class="create-new-text" @click="$emit('create-new')">Tạo link chia sẻ mới</div>
      </div>

      <div class="right-section">
        <div class="qr-code-box" ref="qrCodeContainer">
          <a-qrcode :value="props.generatedLink" :size="160" error-level="H" :bordered="false" />
        </div>

        <div class="download-qr" @click="downloadQRCode">
          <i class="fas fa-download"></i>
          <span>Tải xuống</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MsButton from '@/components/ms-button/MsButton.vue'

// Nhận link từ trang cha truyền vào
const props = defineProps({
  generatedLink: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['create-new', 'copy'])
const qrCodeContainer = ref(null)

// 1. Hàm Copy Link
const handleCopy = () => {
  navigator.clipboard.writeText(props.generatedLink)
  emit('copy')
}

// 2. Hàm Tải xuống QR Code (Xử lý riêng cho Antdv)
const downloadQRCode = () => {
  // Tìm thẻ canvas bên trong div .qr-code-box
  const canvas = qrCodeContainer.value?.querySelector('canvas')

  if (!canvas) {
    alert('Chưa tạo được mã QR!')
    return
  }

  // Chuyển canvas thành URL ảnh
  const url = canvas.toDataURL('image/png')

  // Tạo thẻ a ảo để tải
  const a = document.createElement('a')
  a.download = 'MISA_QRCode.png'
  a.href = url
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<style scoped>
/* --- GIỮ NGUYÊN CSS CŨ VÀ CẬP NHẬT PHẦN QR --- */

.success-container {
  background: #fff;
  border-radius: 4px;
  padding: 40px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.success-content {
  display: flex;
  gap: 60px;
  max-width: 900px;
  width: 100%;
}

/* LEFT SECTION */
.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-success-wrapper {
  width: 48px;
  height: 48px;
  background-color: #2ca01c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 10px rgba(44, 160, 28, 0.3);
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin-bottom: 12px;
}

.description {
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
  line-height: 1.5;
  max-width: 500px;
}

.link-box {
  display: flex;
  align-items: center;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 24px;
  border: 1px solid #e0e0e0;
}

.link-box input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #111;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.copy-btn {
  cursor: pointer;
  color: #2ca01c;
  font-size: 18px;
  padding: 4px;
  transition: 0.2s;
}
.copy-btn:hover {
  transform: scale(1.1);
}

.create-new-text {
  margin-top: 20px;
  color: #2ca01c;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
}
.create-new-text:hover {
  text-decoration: underline;
}

/* RIGHT SECTION (QR) */
.right-section {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
}

.qr-code-box {
  margin-bottom: 12px;
  /* Có thể thêm border hoặc shadow nếu thích */
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.download-qr {
  color: #2ca01c;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}
.download-qr:hover {
  text-decoration: underline;
}
</style>
