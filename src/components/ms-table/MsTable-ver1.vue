<script setup>
import MsButton from '../ms-button/MsButton.vue'
const props = defineProps({
  // Header
  columns: {
    type: Array,
    default: () => [],
    // Item structure: { key, label, width, align, filterable, type }
  },
  // Row
  data: {
    type: Array,
    default: () => [],
  },
  summary: {
    type: Object,
    default: () => null,
  },
})
//  Khởi tạo emit
const emit = defineEmits(['open-detail'])
function handleClick(col, row) {
  // const payload = { column: col, row: row }
  emit('open-detail', {
    column: col,
    row: row,
  })
  // console.log(payload.column)
  // console.log(row)
  // debugger
}
// set Icon
const getIconClass = (key) => {
  const map = {
    views: 'icon-view',
    leads: 'icon-lead',
    opps: 'icon-lead',
    orders: 'icon-view',
    paid: 'icon-view',
  }
  return map[key] || ''
}
</script>

<template>
  <div class="table-container">
    <div class="table-scroll-area">
      <table class="ms-table">
        <thead>
          <tr>
            <!--  Set up có filterable là rowspan là 1 -->
            <th
              v-for="(col, idx) in columns"
              :key="idx"
              :style="{ width: col.width || 'auto' }"
              :rowspan="col.filterable ? 1 : 2"
              :class="col.filterable ? 'header-title-filter' : 'header-title'"
            >
              <!-- Không có filter -->
              <template v-if="!col.filterable">
                <div
                  style="
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 10px;
                  "
                >
                  {{ col.label }}
                  <i class="icon-sort">⇅</i>
                </div>
              </template>

              <!-- Có filter -->
              <template v-else>
                <div
                  style="
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #f0f2f4;
                  "
                >
                  <div style="display: flex; justify-content: space-between; gap: 5px">
                    {{ col.label }}
                    <i class="icon-sort">⇅</i>
                  </div>
                </div>
                <!-- <i class="icon-sort">⇅</i> -->
              </template>
            </th>
          </tr>

          <!--Vòng for chạy các ô filter -->
          <tr>
            <th
              v-for="(col, idx) in columns.filter((c) => c.filterable)"
              :key="'filter-' + idx"
              class="header-filter"
            >
              <!-- <ms-button icon="icon-filter" /> -->
              <!-- {{ idx }} -->
              <div class="filter-icon-wrapper">
                <div class="icon-filter" style="width: 10px; height: 10px"></div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <td
              v-for="(col, colIndex) in columns"
              :key="colIndex"
              :style="{ width: col.width || 'auto' }"
              :class="col.align || 'text-left'"
            >
              <div v-if="col.type === 'link'" class="cell-link-group display-flex">
                <a :href="row[col.key]" class="cell-link">{{ row[col.key] }}</a>
                <div
                  class="cell-link-actions display-flex justify-content-flex-end"
                  style="gap: 15px"
                >
                  <div class="icon-copy"></div>
                  <div class="icon-share active" style="width: 20px; height: 20px"></div>
                </div>
              </div>
              <!--  -->
              <div
                v-else-if="col.type === 'metric'"
                class="cell-metric"
                @click="handleClick(col, row)"
              >
                <div :class="getIconClass(col.key)"></div>
                <span class="metric-value">{{ row[col.key] }}</span>
              </div>
              <!--  Text -->
              <div v-else class="cell-title">
                {{ row[col.key] }}
              </div>
            </td>
          </tr>
        </tbody>

        <!-- Footer -->
        <tfoot v-if="summary">
          <tr class="summary-row">
            <td
              v-for="(col, index) in columns"
              :key="'sum-' + index"
              :class="col.align || 'text-left'"
            >
              <span v-if="index === 0" class="font-bold">Tổng</span>

              <div v-else-if="col.type === 'metric'" class="cell-metric">
                <i :class="getIconClass(col.key)"></i>
                <span class="font-bold">{{ summary[col.key] || 0 }}</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="misa-paginationisa-pagination">
      <!-- Select page size -->
      <div class="page-size-box">
        <select v-model="pageSize" class="page-size-select">
          <option v-for="size in [10, 20, 50]" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>

      <!-- Navigation -->
      <div class="page-nav">
        <span class="nav-btn disabled">«</span>
        <span class="nav-btn disabled">‹</span>

        <span class="page-range">Từ 1 đến {{ data.length }}</span>

        <span class="nav-btn disabled">›</span>
        <span class="nav-btn disabled">»</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Demo icon bằng màu */
.icon-copy {
  background: #e0e0e0;
}
.cell-title {
  /* Ẩn content nếu dài quá  */
  overflow: hidden;
  white-space: nowrap;

  text-overflow: ellipsis;
  display: block;
  min-width: 0;
  /* padding-left: 10px; */
}
/* --- LAYOUT --- */
.table-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-family: Arial, sans-serif;
  font-size: 13px;
  /* padding-left: 100px; */
}
.table-scroll-area {
  flex: 1;
  overflow: auto;
}
.ms-table {
  width: 100%;
  border-collapse: collapse;
  color: #1f1f1f;
  table-layout: fixed;
}

td {
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 10px;
  min-width: 0;
  /* white-space: nowrap; */
}
th {
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
/* --- HEADER STYLES --- */
thead {
  position: sticky;
  top: 0;
  /* z-index: 10; */
  background: #fff;
}

/* 1. Ô gộp (Ngày tạo, Tiêu đề) */
/* .header-merged {
  background-color: red;
  background: red;
  font-weight: 700;
  vertical-align: middle; /* Căn giữa dọc */
/* z-index: 11;
  border-bottom: 1px solid #e0e0e0; Viền dưới khép kín */
/* } */

/*Ô tiêu đề thường */
.header-title {
  background-color: #f0f2f4;
  height: 34px;
  font-weight: 700;
  /* border-bottom: 1px solid #ccc; */
}

/* 3. Ô Filter */
.header-filter {
  background-color: #fff;
  height: 30px;
  /* padding: 4px; */
}
.filter-box {
  display: flex;
  align-items: center;
  border: 1px solid #d0d0d0;
  height: 30px;
  padding: 0 4px;
  background: #fff;
}
.filter-icon-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 0.5px gray solid;
  opacity: 0.4;
  width: 30px;
  padding: 4px;
  cursor: pointer;
}
.filter-op {
  font-size: 11px;
  margin-right: 4px;
  color: #666;
}
.ms-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 12px;
}
.icon-sort {
  font-size: 10px;
  color: #999;
  margin-left: 4px;
  cursor: pointer;
  font-style: normal;
}

/* --- BODY STYLES --- */
td {
  height: 40px;
}
tr:hover td {
  background-color: #f2f9ff;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.font-bold {
  font-weight: 700;
}

/* Link */
.cell-link-group {
  display: flex;
  align-items: center;
  padding-left: 10px;
  /* width: 100%; */
  gap: 8px;
}

.cell-link {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: black;
  text-decoration: none;
  font-weight: 500;
}
.cell-link-actions {
  display: flex;
  align-items: center;
  padding-right: 10px;
  gap: 10px;
  flex-shrink: 0; /* Quan trọng để icon không co khi link dài */
}
.hover-actions {
  display: none;
  gap: 6px;
}
tr:hover .hover-actions {
  display: flex;
} /* Chỉ hiện icon khi hover dòng */
.action-icon {
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fff;
}

/* Metric */
.cell-metric {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
}
.metric-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
}

/* Footer */
/* Pagination Wrapper */
.misa-pagination {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #e0e0e0;
  background: #fff;
  padding: 0 16px;
  gap: 12px;
  font-size: 13px;
  color: #1f1f1f;
}

/* Select box size */
.page-size-box select {
  height: 30px;
  padding: 0 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 13px;
  background: #fff;
  cursor: pointer;
  outline: none;
}

.page-size-box select:hover {
  border-color: #999;
}

/* Navigation buttons */
.page-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn {
  font-size: 16px;
  padding: 2px 4px;
  color: #555;
  cursor: pointer;
  user-select: none;
}

.nav-btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-range {
  margin: 0 6px;
  font-weight: 500;
}
</style>
