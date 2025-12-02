<script setup>
import MsTableVer1 from '@/components/ms-table/MsTable-ver1.vue'

// 1. Cấu hình Cột (Rất quan trọng)
const columns = [
  { key: 'date', label: 'Ngày tạo', width: '100px', align: 'text-center', filterable: false }, // -> Ô xám
  { key: 'title', label: 'Tiêu đề', width: '250px', align: 'text-left', filterable: false }, // -> Ô xám
  {
    key: 'link',
    label: 'Link chia sẻ',
    width: '250px',
    align: 'text-left',
    type: 'link',
    filterable: true,
  },

  // Các cột số liệu (Metric)
  { key: 'views', label: 'Lượt xem', width: '100px', type: 'metric', filterable: true },
  { key: 'leads', label: 'Tiềm năng', width: '100px', type: 'metric', filterable: true },
  { key: 'opps', label: 'Cơ hội', width: '100px', type: 'metric', filterable: true },

  // Các cột đơn hàng
  { key: 'orders', label: 'ĐH trực tiếp', width: '110px', type: 'metric', filterable: true },
  { key: 'paid', label: 'ĐH TT chưa thanh toán', width: '140px', type: 'metric', filterable: true },
]

// 2. Dữ liệu bảng (Rows)
const tableData = [
  {
    date: '29/08/2025',
    title: 'Quy định về hóa đơn...',
    link: 'https://amis.misa.vn/afs/B-117',
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
]

// 3. Dữ liệu Tổng (Footer)
const summaryData = {
  views: 8,
  leads: 0,
  opps: 0,
  orders: 0,
  paid: 0,
}
</script>

<template>
  <div style="height: 100vh; padding: 20px; background-color: #f4f5f8">
    <div style="background: white; padding: 16px; border-radius: 4px; height: 600px">
      <h3 style="margin: 0 0 16px 0">Hiệu quả chia sẻ</h3>

      <ms-table-ver1 :columns="columns" :data="tableData" :summary="summaryData" />
    </div>
  </div>
</template>
