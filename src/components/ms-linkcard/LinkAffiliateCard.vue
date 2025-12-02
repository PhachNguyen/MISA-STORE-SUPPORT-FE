<template>
  <div class="list-container display-flex flex-column">
    <div
      v-for="(item, index) in listData"
      :key="index"
      class="item-card display-flex align-items-center"
    >
      <!-- image -->
      <div class="item-image">
        <img :src="item.image" alt="Affiliate image" />
      </div>

      <!-- infor -->
      <div class="item-info">
        <div class="item-title">{{ item.title }}</div>
        <a :href="item.link" class="item-link">
          {{ item.link }}
        </a>
        <div class="item-desc">{{ item.desc }}</div>
      </div>

      <div class="wrapper-card display-flex flex-column justify-content-space-between">
        <!-- ACTION BUTTON -->
        <div class="item-actions">
          <ms-button label="Sao chép" type="primary" icon="icon-copy" />

          <ms-button icon="icon-share active" type="share" />
          <ms-button icon="icon-delete" type="delete" />
        </div>
        <!--  Date -->
        <div class="item-date">29/08/2025</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MsButton from '../ms-button/MsButton.vue'
const props = defineProps({
  listData: {
    type: Array,
    default: () => [],
  },
})
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
