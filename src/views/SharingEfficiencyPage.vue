<script setup>
import MsTableVer1 from '@/components/ms-table/MsTable-ver1.vue'
import MSDate from '@/components/ms-date/MSDate.vue'
import Search from '@/components/ms-search/Search.vue'
import Overlay from '@/components/ms-overlay/Overlay.vue'
import LeadModal from './ms-popup/LeadModal.vue'
import OrderModal from './ms-popup/OrderModal.vue'
import { ref, watch } from 'vue'
// 1. Cấu hình Cột (Rất quan trọng)
const columns = [
  { key: 'date', label: 'Ngày tạo', width: '100px', align: 'text-center', filterable: false }, // -> Ô xám
  { key: 'title', label: 'Tiêu đề', width: '100px', align: 'text-left', filterable: false }, // -> Ô xám
  {
    key: 'link',
    label: 'Link chia sẻ',
    width: '255px',
    align: 'text-left',
    type: 'link',
    filterable: false,
  },

  // Các cột số liệu (Metric)
  { key: 'views', label: 'Lượt xem', width: '100px', type: 'metric', filterable: true },
  { key: 'leads', label: 'Tiềm năng', width: '100px', type: 'metric', filterable: true },
  { key: 'opps', label: 'Cơ hội', width: '100px', type: 'metric', filterable: true },

  // Các cột đơn hàng
  { key: 'orders', label: 'ĐH trực tiếp', width: '110px', type: 'metric', filterable: true },
  { key: 'orders', label: 'ĐH trực tiếp', width: '110px', type: 'metric', filterable: true },
  { key: 'orders', label: 'ĐH trực tiếp', width: '110px', type: 'metric', filterable: true },
  { key: 'paid', label: 'ĐH TT chưa thanh toán', width: '200px', type: 'metric', filterable: true },
  { key: 'orders', label: 'ĐH trực tiếp', width: '110px', type: 'metric', filterable: true },
  { key: 'orders', label: 'ĐH trực tiếp', width: '110px', type: 'metric', filterable: true },
]
// Data
// Ép kiểu
const tableData = JSON.parse(localStorage.getItem('tableData'))
// Show modal
const showModal = ref(false)
const showLeadsPopup = ref(null)
const selectedDetail = ref(null)
// Order
const showOrderPopup = ref(false)
// EVENT: Nhận open-detail từ table
const handleOpenDetail = ({ column, row }) => {
  if (column.key === 'opps' || column.key === 'paid') {
    selectedDetail.value = { column, row }
    showLeadsPopup.value = true
  }
  if (column.key === 'orders') {
    // debugger
    console.log(row)
    console.log(showOrderPopup.value)
    showOrderPopup.value = true
    console.log(showOrderPopup.value)
  }
  // console.log('Column:', column)
  // console.log('Row:', row)

  showModal.value = true
}
// 3. Dữ liệu Tổng (Footer)
const summaryData = {
  views: 8,
  leads: 0,
  opps: 0,
  orders: 0,
  paid: 0,
}
// const test = () => {
//   console.log('test')
// }
</script>

<template>
  <div class="container đisplay-flex flex-column flex1">
    <div class="content-wrapper display-flex align-items-center">
      <span class="label">Hiệu quả chia sẻ</span>
      <i class="fa-solid fa-rotate-right refresh"></i>
    </div>
    <div class="display-flex justify-content-space-between" style="margin-bottom: 20px">
      <div class="display-flex justify-content-space-between" style="gap: 20px">
        <search label="Tìm kiếm theo tiêu đề" />
        <m-s-date />
      </div>
      <div class="title">Đồng bộ dữ liệu từ CRM</div>
    </div>
    <ms-table-ver1
      :columns="columns"
      :data="tableData"
      :summary="summaryData"
      @open-detail="handleOpenDetail"
    />

    <div class="footer">
      <div class="footer-left">
        Tổng số: <b>{{ tableData.length }}</b> link chia sẻ
      </div>

      <div class="footer-right">
        <div class="page-size-wrapper">
          <select class="page-size-select">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <div class="page-range">Từ 1 đến {{ tableData.length }}</div>

        <div class="page-controls">
          <div class="icon-btn disabled" title="Trang trước">
            <i class="arrow-left"></i>
          </div>
          <div class="icon-btn disabled" title="Trang sau">
            <i class="arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <Overlay v-model:modalValue="showModal" />
    <LeadModal v-model:modalValue="showLeadsPopup" :detailData="selectedDetail" />
    <order-modal v-model:modalValue="showOrderPopup" />
  </div>
</template>
<style scoped>
.container {
  background: white;
  padding: 0px 10px;
  overflow: auto;
  /*  Set height tối đa là 100vh */
  /* min-height: 100vh; */
  /* width: 90%; */
  /* gap: 100px; */
}
.content-wrapper {
  gap: 10px;
  padding: 10px;
}
.label {
  font-size: 18px;

  font-weight: 600;
}
.title {
  padding: 10px;
  border: 0.5px solid #e0e0e0;
  color: #3fbf85;
  font-weight: 600;
  background: #e4f8ed;
}
.refresh {
  color: gray;
  cursor: pointer;
}
/* =========================
   FOOTER STYLES
========================= */
.footer {
  /* Sticky: Giữ footer luôn ở đáy khi cuộn bảng */
  position: sticky;
  bottom: 0;
  /* z-index: 10; */

  height: 56px;
  padding: 0 16px;
  background: #fff;
  border-top: 1px solid #e0e0e0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 13px;
  color: #111;
}

/* Bên trái */
.footer-left b {
  font-weight: 700;
}

/* Bên phải */
.footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Dropdown Select */
.page-size-select {
  height: 32px;
  padding: 0 4px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  min-width: 50px;
  color: #1f1f1f;
}
.page-size-select:focus {
  border-color: #2ca01c; /* Xanh MISA */
}

/* Text Range */
.page-range {
  font-weight: 500;
}

/* Nút Next/Prev */
.page-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s;
}

.icon-btn:not(.disabled):hover {
  background-color: #f0f0f0;
}

/* Vẽ mũi tên bằng CSS */
.arrow-left,
.arrow-right {
  border: solid #666;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
}

.arrow-left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.arrow-right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Trạng thái Disabled */
.icon-btn.disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
