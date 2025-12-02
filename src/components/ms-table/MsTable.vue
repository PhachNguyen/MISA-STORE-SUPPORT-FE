<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr class="header-row-title">
          <th
            v-for="(col, index) in columns"
            :key="'title-' + index"
            :style="{ minWidth: col.width }"
          >
            <div class="th-content">
              {{ col.label }}
              <span class="sort-icon">⇅</span>
            </div>
          </th>
        </tr>

        <tr class="header-row-filter">
          <th v-for="(col, index) in columns" :key="'filter-' + index">
            <div v-if="col.filterable" class="filter-container">
              <!-- <span class="filter-operator">=</span> -->
              <div class="icon-menu"></div>
              <!-- <input type="text" class="filter-input" placeholder="" /> -->
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(col, colIndex) in columns" :key="colIndex" :class="col.align">
            {{ row[col.prop] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  overflow: auto; /* Để table cuộn ngang được nếu nhiều cột */
  max-height: 500px; /* Chiều cao cố định để cuộn dọc */
  border: 1px solid #e0e0e0;
}

table {
  width: 100%;
  border-collapse: collapse; /* Quan trọng: Gộp đường viền lại cho mỏng đẹp */
  background: #fff;
  font-family: Arial, sans-serif;
  font-size: 13px;
}

/* --- STYLING HEADER --- */
thead {
  position: sticky; /* Ghim header lên đầu khi cuộn dọc */
  top: 0;
  z-index: 10;
  background-color: #f0f0f0; /* Màu nền xám giống ảnh */
}

th,
td {
  border: 1px solid #e0e0e0; /* Viền kẻ ô */
  padding: 8px 10px;
  text-align: left;
}

/* Hàng 1: Title */
.header-row-title th {
  background-color: #eceef1;
  font-weight: 700;
  color: #111;
  height: 34px;
}

.th-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Hàng 2: Filter */
.header-row-filter th {
  background-color: #fff; /* Nền trắng cho ô nhập liệu */
  padding: 4px;
}

.filter-container {
  display: flex;
  align-items: center;
  /* border: 1px solid #ddd; */
  border-radius: 2px;
  padding: 0 4px;
  background: #fff;
  height: 100%;
}

.filter-operator {
  color: #666;
  font-size: 12px;
  margin-right: 4px;
  cursor: pointer;
}

.filter-input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 12px;
  padding: 4px 0;
}

/* --- STYLING BODY --- */
tbody tr:hover {
  background-color: #f2f9ff; /* Hover màu xanh nhạt giống MISA */
}

.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
</style>
