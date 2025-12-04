<script setup>
import { defineProps, defineEmits } from 'vue'
import MsTableVer1 from '@/components/ms-table/MsTable-ver1.vue'
import MSDate from '@/components/ms-date/MSDate.vue'
import Search from '@/components/ms-search/Search.vue'

const props = defineProps({
  modalValue: {
    type: Boolean,
    default: false,
  },
  detailData: {
    type: Object,
    default: () => null,
  },
})

const emit = defineEmits(['update:modalValue'])

const close = () => emit('update:modalValue', false)

// Cột bảng Leads (Tiềm năng)
const leadColumns = [
  { key: 'customer', label: 'Khách hàng', width: 200 },
  { key: 'position', label: 'Chức vụ', width: 150 },
  { key: 'email', label: 'Email', width: 200 },
  { key: 'phone', label: 'Số điện thoại', width: 120 },
  { key: 'company', label: 'Tên công ty', width: 250 },
  { key: 'tax', label: 'Mã số thuế', width: 120 },
  { key: 'cccd', label: 'CCCD/CMT', width: 120 },
]

// Data rỗng để test giao diện No Data
const leadsData = []
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="modalValue" class="popup-wrapper">
        <div class="overlay" @click="close"></div>

        <div class="popup-container">
          <div class="header">
            <div class="header-left">
              <span class="title">Danh sách tiềm năng</span>
              <div class="icon-refresh" title="Lấy lại dữ liệu"></div>
            </div>

            <div class="header-actions">
              <div class="icon-help" title="Giúp đỡ"></div>
              <div class="icon-close" @click="close" title="Đóng">✕</div>
            </div>
          </div>

          <div class="filters">
            <div class="search-wrapper">
              <Search placeholder="Tìm kiếm theo Tên, Email, Số điện thoại..." />
            </div>

            <div class="filter-right">
              <select class="m-select">
                <option value="">Tất cả trạng thái</option>
                <option>Đã liên hệ</option>
                <option>Chưa liên hệ</option>
                <option>Đang xử lý</option>
              </select>

              <div class="date-wrapper">
                <MSDate />
              </div>
            </div>
          </div>

          <div class="table-zone">
            <MsTableVer1 :columns="leadColumns" :data="leadsData" />

            <div v-if="leadsData.length === 0" class="no-data-box">
              <img
                src="https://crm.misa.vn/assets/images/icons/empty_state.svg"
                alt=""
                class="no-data-img"
              />
              <span class="no-data-text">Không có dữ liệu</span>
            </div>
          </div>

          <div class="footer">
            <div class="footer-left">
              Tổng số: <b>{{ leadsData.length }}</b> bản ghi
            </div>

            <div class="pagination">
              <select class="page-size-select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
              </select>

              <div class="page-range">Từ 0 đến 0</div>

              <div class="page-controls">
                <button class="btn-page disabled">‹</button>
                <button class="btn-page disabled">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
/* =========================
   ANIMATION & WRAPPER
========================= */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.popup-container {
  position: relative;
  width: 95%; /* Rộng như PopupOrder */
  max-width: 1400px;
  height: 85vh; /* Cao 85% màn hình */
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Để bo góc không bị con tràn ra */
}

/* =========================
   1. HEADER
========================= */
.header {
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #1f1f1f;
}

.icon-refresh {
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 12C4 16.4183 7.58172 20 12 20C15.5 20 18.45 17.75 19.55 14.65' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20 12C20 7.58172 16.4183 4 12 4C8.5 4 5.55 6.25 4.45 9.35' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20 8V12H24' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 16V12H0' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}
.icon-refresh:hover {
  opacity: 1;
  transform: rotate(45deg);
  transition: 0.3s;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-help {
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}

.icon-close {
  font-size: 22px;
  color: #666;
  cursor: pointer;
  line-height: 1;
}
.icon-close:hover {
  color: #eb3333;
}

/* =========================
   2. FILTER BAR
========================= */
.filters {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  /* border-bottom: 1px solid #e0e0e0; -> Có thể bỏ nếu muốn liền mạch với table */
}

/* SEARCH WRAPPER: Flex 1 để đẩy phần còn lại sang phải */
.search-wrapper {
  flex: 1;
}

.filter-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.m-select {
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  cursor: pointer;
  min-width: 160px;
}
.m-select:focus {
  border-color: #2ca01c;
}

/* =========================
   3. TABLE ZONE & NO DATA
========================= */
.table-zone {
  flex: 1;
  position: relative; /* Quan trọng để căn No Data */
  overflow: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.no-data-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.no-data-img {
  width: 140px;
  opacity: 0.8;
}

.no-data-text {
  font-size: 14px;
  color: #111;
}

/* =========================
   4. FOOTER
========================= */
.footer {
  height: 56px;
  padding: 0 16px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 16px;
}

.page-size-select {
  height: 32px;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  padding: 0 4px;
  outline: none;
}

.page-controls {
  display: flex;
  gap: 8px;
}

.btn-page {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  color: #666;
}
.btn-page.disabled {
  color: #ccc;
  cursor: default;
}
</style>
