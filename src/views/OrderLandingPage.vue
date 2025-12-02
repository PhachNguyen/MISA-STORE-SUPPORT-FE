<template>
  <div class="landing-container">
    <div class="content-wrapper display-flex">
      <div class="card left-card">
        <h2 class="form-title">Đăng ký nhận tư vấn</h2>

        <div class="form-group">
          <text-box label="Họ và tên" required placeholder="Nhập họ tên" />
          <text-box label="Email" placeholder="Nhập địa chỉ email" />
          <text-box label="Số điện thoại" required placeholder="Nhập số điện thoại" />
          <text-box label="Tên doanh nghiệp" placeholder="Nhập tên doanh nghiệp" />
          <text-box label="Mã nhân viên" placeholder="Nhập mã nhân viên (nếu có)" />
        </div>

        <div class="form-footer">
          <ms-button label="Gửi thông tin" class="btn-full-width" />
        </div>
      </div>

      <div class="card right-card">
        <h2 class="form-title">Đặt đơn hàng</h2>

        <div class="section-group">
          <h3 class="section-title">Thông tin sản phẩm</h3>

          <div class="input-wrapper mb-15">
            <label class="custom-label">Chọn sản phẩm <span class="required">*</span></label>
            <select class="custom-select">
              <option>-- Chọn sản phẩm --</option>
              <option>MISA AMIS CRM</option>
              <option>MISA eShop</option>
            </select>
          </div>

          <div class="input-wrapper mb-15">
            <label class="custom-label">Tiền sản phẩm</label>
            <div class="disabled-box">Tiền sản phẩm sẽ được lấy theo sản phẩm được chọn</div>
          </div>
        </div>

        <div class="section-group">
          <h3 class="section-title">Người mua hàng</h3>
          <text-box label="Họ và tên" required placeholder="Nhập họ tên người mua" />
          <text-box label="Email" placeholder="Nhập email người mua" />
          <text-box label="Số điện thoại" required placeholder="Nhập số điện thoại người mua" />
          <text-box label="Chức vụ" placeholder="Nhập chức vụ người mua" />
          <text-box
            label="Mã nhân viên"
            placeholder="Nhập mã nhân viên sẽ được tính là đơn hàng sau chăm sóc"
          />
        </div>

        <div class="section-group">
          <h3 class="section-title">Công ty cấp GPSD</h3>
          <text-box label="Tên công ty" required placeholder="Nhập tên công ty" />
          <text-box label="MST / CCCD" required placeholder="Nhập mã số thuế hoặc CCCD" />
          <text-box label="Địa chỉ" required placeholder="Nhập địa chỉ công ty" />
        </div>

        <div class="form-footer">
          <ms-button label="Đặt đơn hàng" class="btn-full-width" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextBox from '@/components/ms-textbox/TextBox.vue'
import MsButton from '@/components/ms-button/MsButton.vue'
</script>

<style scoped>
/* 1. Layout tổng */
.landing-container {
  min-height: 100vh;
  background-color: #f0f2f5; /* Màu nền xám xanh nhạt */
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  gap: 24px; /* Khoảng cách giữa 2 cột */
  width: 100%;
  max-width: 1000px; /* Giới hạn chiều rộng để giống hình */
  align-items: flex-start; /* Để 2 cột không bị kéo giãn chiều cao bằng nhau */
}

/* 2. Style cho Card (Khung trắng) */
.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.left-card {
  width: 40%; /* Cột trái nhỏ hơn */
}

.right-card {
  width: 60%; /* Cột phải to hơn */
}

/* 3. Typography & Titles */
.form-title {
  color: #0075ff; /* Màu xanh dương tiêu đề chính */
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase; /* Hoặc bỏ nếu muốn thường */
}

.section-title {
  color: #2ca01c; /* Màu xanh lá cho các mục con bên phải */
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 10px;
}

/* 4. Custom Select & Disabled Box (Vì chưa có component) */
.mb-15 {
  margin-bottom: 15px;
}

.custom-label {
  display: block;
  font-weight: 600;
  color: #212121;
  margin-bottom: 8px;
  font-size: 14px;
}
.required {
  color: red;
  margin-left: 4px;
}

.custom-select {
  width: 100%;
  height: 36px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
}

.disabled-box {
  width: 100%;
  height: 36px;
  background-color: #e9e9e9; /* Màu nền xám input disabled */
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #666;
  font-size: 14px;
}

/* 5. Button Full Width */
:deep(.ms-button) {
  width: 100%; /* Nút bấm dài full */
  justify-content: center;
  height: 40px;
  background-color: #0075ff; /* Màu xanh dương nút bấm */
  font-size: 16px;
  font-weight: 600;
}
:deep(.ms-button:hover) {
  background-color: #0063d1;
}

/* Responsive cho Mobile */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column; /* Xếp chồng lên nhau khi màn hình nhỏ */
  }
  .left-card,
  .right-card {
    width: 100%;
  }
}
</style>
