<script setup>
import MsTableVer1 from '@/components/ms-table/MsTable-ver1.vue'
import MSDate from '@/components/ms-date/MSDate.vue'
import Search from '@/components/ms-search/Search.vue'
import Overlay from '@/components/ms-overlay/Overlay.vue'
import LeadModal from './ms-popup/LeadModal.vue'
import OrderModal from './ms-popup/OrderModal.vue'
import { ref } from 'vue'
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
  { key: 'paid', label: 'ĐH TT chưa thanh toán', width: '200px', type: 'metric', filterable: true },
]
// Show modal
const showModal = ref(false)
const showLeadsPopup = ref(null)
const selectedDetail = ref(null)
// Order
const showOrderPopup = ref(false)
// EVENT: Nhận open-detail từ table
const handleOpenDetail = ({ column, row }) => {
  if (column.key === 'leads') {
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
// 2. Dữ liệu bảng (Rows)
const tableData = [
  {
    date: '29/08/2025',
    title: 'Quy định về hóa đơn...',
    link: 'https://www.google.com/search?q=link+d%C3%A0i&rlz=1C1CHBD_viVN1044VN1044&oq=link+d%C3%A0i+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE1MzFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
    views: 2,
    leads: 0,
    opps: 0,
    orders: 0,
    paid: 0,
  },
  {
    date: '29/08/2025',
    title: 'Luật thuế giá trị gia tăng',
    link: 'https://amis.misa.vn/afs/B-117',
    views: 1,
    leads: 0,
    opps: 0,
    orders: 0,
    paid: 0,
  },
  {
    date: '13/03/2025',
    title: 'Giải pháp chữ ký số',
    link: 'https://share.misa.vn/afs/B-117',
    views: 4,
    leads: 0,
    opps: 0,
    orders: 0,
    paid: 0,
  },
  {
    date: '13/03/2025',
    title: 'Giải pháp chữ ký số',
    link: 'https://share.misa.vn/afs/B-117',
    views: 4,
    leads: 0,
    opps: 0,
    orders: 0,
    paid: 0,
  },
]

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
  <div class="container đisplay-flex flex-column">
    <div class="content-wrapper display-flex align-items-center">
      <span class="label">Hiệu quả chia sẻ</span>
      <i class="fa-solid fa-rotate-right refresh"></i>
    </div>
    <div class="display-flex justify-content-space-between">
      <div class="display-flex">
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
    <!-- OVERLAY -->
    <Overlay v-model:modalValue="showModal" />
    <LeadModal v-model:modalValue="showLeadsPopup" :detailData="selectedDetail" />
    <order-modal v-model:modalValue="showOrderPopup" />
  </div>
</template>
<style scoped>
.container {
  background: white;
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
</style>
