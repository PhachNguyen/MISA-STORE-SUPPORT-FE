<template>
  <div class="misa-date-picker">
    <div class="date-group">
      <input
        type="text"
        class="date-input text-right"
        :value="startDate"
        placeholder="Từ ngày"
        @input="$emit('update:startDate', $event.target.value)"
      />

      <span class="separator">-</span>

      <input
        type="text"
        class="date-input text-left"
        :value="endDate"
        placeholder="Đến ngày"
        @input="$emit('update:endDate', $event.target.value)"
      />
    </div>

    <div class="calendar-icon">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#666"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    </div>
  </div>
</template>

<script setup>
// Nhận props từ cha
defineProps({
  startDate: String,
  endDate: String,
})

// Định nghĩa sự kiện cập nhật dữ liệu ra ngoài
defineEmits(['update:startDate', 'update:endDate'])
</script>

<style scoped>
/* 1. KHUNG BAO NGOÀI */
.misa-date-picker {
  display: flex;
  align-items: center;
  width: 300px; /* Bạn có thể chỉnh độ rộng tùy ý */
  height: 36px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0 12px; /* Khoảng cách lề trái phải */
  box-sizing: border-box;
  transition: all 0.2s;
}

/* Hiệu ứng khi focus vào (giống MISA) */
.misa-date-picker:focus-within {
  border-color: #2ca01c;
  box-shadow: 0 0 0 2px rgba(44, 160, 28, 0.2);
}

/* 2. GROUP INPUT */
.date-group {
  display: flex;
  align-items: center;
  /* Mẹo: Cho group này flex-grow nhưng không để max-width,
     các input bên trong sẽ quyết định độ rộng */
}

/* 3. STYLE CHO INPUT */
.date-input {
  width: 90px; /* Cố định độ rộng input cho đều */
  border: none;
  outline: none;
  font-size: 14px;
  color: #1f1f1f;
  background: transparent;
  padding: 0;
}

/* KỸ THUẬT QUAN TRỌNG: CĂN CHỮ DÍNH VÀO GIỮA */
.text-right {
  text-align: right; /* Đẩy chữ "Từ ngày" sang phải */
}

.text-left {
  text-align: left; /* Đẩy chữ "Đến ngày" sang trái */
}

.separator {
  margin: 0 6px; /* Khoảng cách nhỏ quanh dấu gạch */
  color: #1f1f1f;
  font-weight: 500;
}

/* 4. ICON LỊCH (ĐẨY XA) */
.calendar-icon {
  margin-left: auto; /* Magic line: Tự động đẩy icon về sát lề phải container */
  display: flex;
  align-items: center;
  cursor: pointer;
}

.calendar-icon:hover svg {
  stroke: #2ca01c; /* Hover đổi màu xanh */
}
</style>
