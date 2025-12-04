<!-- PopupLeads.vue -->
<script setup>
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

// Cột bảng Leads
const leadColumns = [
  { key: 'customer', label: 'Khách hàng', filterable: true },
  { key: 'position', label: 'Chức vụ/Vai trò', filterable: true },
  { key: 'email', label: 'Email', filterable: true },
  { key: 'phone', label: 'Số điện thoại', filterable: true },
  { key: 'company', label: 'Tên công ty', filterable: true },
  { key: 'tax', label: 'Mã số thuế', filterable: true },
  { key: 'cccd', label: 'CCCD/CMT', filterable: true },
]

// Data rỗng (tạm)
const leadsData = []
</script>

<template>
  <teleport to="body">
    <!-- Overlay -->
    <div class="overlay" :class="{ show: modalValue }" @click.self="close"></div>

    <!-- Popup -->
    <div class="popup" :class="{ show: modalValue }">
      <!-- HEADER -->
      <div class="popup-header">
        <div class="left display-flex">
          <span class="title">Tiềm năng</span>
          <div class="icon-refresh"></div>
        </div>

        <span class="close-btn" @click="close">✖</span>
      </div>

      <!-- FILTER BAR -->
      <div class="popup-filters">
        <Search placeholder="Tìm kiếm theo KH, email, SĐT, ..." />

        <MSDate />

        <div class="dropdown">
          <select>
            <option value="">Tất cả tình trạng</option>
            <option>Đã liên hệ</option>
            <option>Chưa liên hệ</option>
            <option>Đang xử lý</option>
          </select>
        </div>
      </div>

      <!-- TABLE -->
      <div class="table-wrapper">
        <ms-table-ver1 :columns="leadColumns" :data="leadsData" />
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <span>Tổng số: {{ leadsData.length }} bản ghi</span>

        <div class="pagination">
          <select>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>

          <span> Từ 0 đến 0 </span>
          <span class="btn disabled">‹</span>
          <span class="btn disabled">›</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
/* Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: 0.25s;
}
.overlay.show {
  opacity: 1;
  pointer-events: auto;
}

/* Popup */
.popup {
  position: fixed;
  background: white;
  width: 90%;
  max-width: 1200px;
  height: 80%;
  border-radius: 6px;
  inset: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-30px);
  pointer-events: none;
  transition: 0.25s;
}
.popup.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Header */
.popup-header {
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}
.left {
  align-items: center;
  gap: 6px;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
.icon-refresh {
  width: 16px;
  height: 16px;
  background: url('/icons/refresh.svg') no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}
.close-btn {
  cursor: pointer;
  font-size: 20px;
}

/* Filter bar */
.popup-filters {
  padding: 10px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
}
.dropdown select {
  height: 36px;
  border: 1px solid #d0d0d0;
  padding: 0 8px;
  border-radius: 4px;
}

/* Table */
.table-wrapper {
  flex: 1;
  overflow: auto;
  background: #fff;
}

/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  font-size: 13px;
  border-top: 1px solid #e0e0e0;
  background: #fff;
}
.pagination {
  display: flex;
  align-items: center;
  gap: 12px;
}
.pagination select {
  height: 30px;
}
.btn {
  opacity: 0.5;
  cursor: not-allowed;
  user-select: none;
}
</style>
