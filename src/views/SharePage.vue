<template>
  <div class="page-content">
    <div class="card-section-create-link display-flex">
      <div class="label-group" style="width: 50%">
        <div class="title">Tạo link chia sẻ</div>
        <div class="sub-title">
          Link chia sẻ được tự động gắn mã nhân viên để ghi nhận doanh số khi có đơn hàng.
        </div>
        <text-box
          label="Link bài viết/trang"
          placeholder="Vui lòng dán link bài viết/landing page,.. mà bạn muốn chia sẻ tại đây"
          required
        ></text-box>
        <text-box label="Tiêu đề bài viết" placeholder="Tiêu đề" required />
        <text-box
          label="Mã nhân viên"
          placeholder="B-1170"
          sub_label="(được tự động gắn link chia sẻ để ghi nhận doanh số)"
          disabled
        />
        <div class="display-flex justify-content-center" style="margin-top: 20px">
          <ms-button label="Tạo link chia sẻ"></ms-button>
        </div>
      </div>
      <div class="image"></div>
    </div>

    <div class="card-section-list-link">
      <div class="link-share-header">
        <span class="title">Chọn nhanh link chia sẻ</span>
        <div class="tabs-link-share display-flex">
          <div class="tab-item active">Link đã tạo</div>
          <div class="tab-item">Landing page</div>
          <div class="tab-item">Bài viết mới nhất</div>
          <div class="tab-item">Bài viết được đọc nhiều nhất</div>
        </div>
      </div>

      <div class="filter-bar display-flex">
        <search placeholder="Tìm kiếm theo nội dung bài chia sẻ" width="350px" />
        <m-s-date />
      </div>
      <link-affiliate-card :list-data="listData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Import các component của bạn
import TextBox from '@/components/ms-textbox/TextBox.vue'
import MsButton from '@/components/ms-button/MsButton.vue'
import Search from '@/components/ms-search/Search.vue'
import MSDate from '@/components/ms-date/MSDate.vue'
import LinkAffiliateCard from '@/components/ms-linkcard/LinkAffiliateCard.vue'
// Mock Data (Dữ liệu giả để hiển thị)
const listData = ref([
  {
    image: '../assets/images/ms-image-link-2.webp',
    title: 'Giải Pháp Quản Lý Bán Hàng Cho Doanh nghiệp',
    link: '/landing-page-don-hang',
    desc: 'Khai thác triệt để data khách hàng, quản lý toàn diện đội sales. AMIS CRM - Thương hiệu quốc gia Việt Nam 2024 > Dùng thử miễn phí full tính năng',
    date: 'Hôm nay',
    isNew: true,
  },
  {
    image:
      'https://media.istockphoto.com/id/1199723562/vector/invoice-flat-design-icon-blue-and-yellow-colors.jpg?s=612x612&w=0&k=20&c=p47nBwz-Vcy0O-Q1xT6IFr5tqQ2K5H2YtVwQxX7hX9M=',
    title: 'Quy định về hóa đơn từ 5 triệu trở lên phải thanh toán không dùng tiền mặt',
    link: 'https://amis.misa.vn/afs/B-1170/25134/quy-dinh-moi-ve-hoa-don/',
    desc: 'Căn cứ theo luật thuế GTGT 2024 và Nghị định 181/2025/NĐ-CP thì các hóa đơn từ 05 triệu trở lên sẽ phải thanh toán chuyển khoản.',
    date: '29/08/2025',
    isNew: false,
  },
])
</script>

<style scoped>
.page-content {
  background: #f4f5f8;
  /* padding: 20px; */
  min-height: 100vh;
}

.card-section-create-link,
.card-section-list-link {
  background: white;
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.title {
  color: #111;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
}
.sub-title {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

/* --- Tabs --- */
.link-share-header {
  margin-bottom: 16px;
}

.tabs-link-share {
  margin-top: 12px;
  gap: 10px;
}

.tab-item {
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  color: #555;
  transition: all 0.2s;
  background-color: #f5f5f5; /* Màu tab chưa chọn */
}

.tab-item.active {
  background-color: #e5f3e8; /* Màu nền xanh nhạt */
  color: #2ca01c; /* Chữ xanh MISA */
}

.tab-item:hover:not(.active) {
  background-color: #ebebeb;
}

/* --- Filter Bar --- */
.filter-bar {
  gap: 12px;
  margin-bottom: 20px;
  align-items: center;
}

.item-card {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
  gap: 20px;
  background: #fff;
}

/* 1. Ảnh */
.item-image {
  width: 140px;
  height: 80px;
  flex-shrink: 0;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tag-new {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ff6a00; /* Màu cam tag Mới */
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  font-weight: bold;
}

/* 2. Nội dung text */
.item-content {
  flex-grow: 1;
}
.item-title {
  font-weight: 700;
  color: #111;
  font-size: 15px;
  margin-bottom: 4px;
}
.item-link {
  color: #0075ff;
  text-decoration: none;
  font-size: 13px;
  display: block;
  margin-bottom: 6px;
}
.item-link:hover {
  text-decoration: underline;
}

.item-desc {
  color: #555;
  font-size: 13px;
  line-height: 1.4;
}

/* 3. Actions */
.item-actions {
  min-width: 150px;
  align-items: flex-end;
  justify-content: space-between;
}

.action-top {
  gap: 8px;
}

/* Button Styles */
.btn-copy {
  background-color: #00b63e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 12px;
  height: 32px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
.btn-copy:hover {
  background-color: #009933;
}

.btn-icon {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-icon:hover {
  background-color: #f5f5f5;
}

.btn-delete:hover {
  color: red;
  border-color: #ffcccc;
  background-color: #fff0f0;
}

.item-date {
  font-size: 12px;
  color: #999;
}
</style>
