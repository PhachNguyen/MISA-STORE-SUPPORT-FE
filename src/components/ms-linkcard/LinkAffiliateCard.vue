<template>
  <div class="list-container display-flex flex-column">
    <div
      v-for="(item, index) in listData"
      :key="index"
      class="item-card display-flex align-items-center"
    >
      <div class="item-image">
        <img :src="item.image" alt="Affiliate image" />
      </div>

      <div class="item-info">
        <div class="item-title">{{ item.title }}</div>
        <a :href="item.link" class="item-link" target="_blank">
          {{ item.link }}
        </a>
        <div class="item-desc">{{ item.desc }}</div>
      </div>

      <div class="wrapper-card display-flex flex-column justify-content-space-between">
        <div class="item-actions">
          <ms-button label="Sao chép" type="primary" icon="icon-copy" />

          <ms-button icon="icon-share active" type="share" @click="openSharePopup(item.link)" />

          <ms-button icon="icon-delete" type="delete" />
        </div>
        <div class="item-date">29/08/2025</div>
      </div>
    </div>

    <popup-share-link
      v-if="showPopup"
      :is-visible="showPopup"
      :link="currentShareLink"
      @close="showPopup = false"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import MsButton from '../ms-button/MsButton.vue'
// Import cái Popup vừa tạo (nhớ sửa đường dẫn cho đúng thư mục của bạn)
import PopupShareLink from '@/views/ms-popup/PopupShareLink.vue'

const props = defineProps({
  listData: {
    type: Array,
    default: () => [],
  },
})

// --- Logic cho Popup Share ---
const showPopup = ref(false) // Biến tắt/bật popup
const currentShareLink = ref('') // Biến lưu link của item đang được bấm

const openSharePopup = (link) => {
  currentShareLink.value = link // Lưu link của dòng được bấm
  showPopup.value = true // Mở popup lên
}
</script>
<style scoped>
.list-container {
  gap: 16px;
}

/* Card wrapper */
.item-card {
  gap: 20px;
  padding: 14px 18px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}
.wrapper-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px; /* khoảng cách đều */
}
.item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.item-date {
  font-size: 12px;
  color: #999;
}
/* IMAGE */
.item-image {
  width: 140px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}
.icon-copy {
  background: red;
}
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* TEXT */
.item-info {
  flex: 1;
}
.item-title {
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
}
.item-link {
  font-size: 13px;
  color: #0075ff;
  display: block;
  margin-bottom: 6px;
}
.item-desc {
  font-size: 13px;
  color: #555;
}

/* ACTION */
.item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
