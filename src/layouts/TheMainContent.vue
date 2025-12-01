<template>
  <div class="main-content display-flex flex-column flex1">
    <div class="header-main display-flex justify-content-center">
      <a-tabs
        v-model:activeKey="activeKey"
        @change="handleTabChange"
        class="custom-green-tabs"
        centered
      >
        <a-tab-pane key="/share">
          <template #tab>
            <div class="tab-label-container">
              <div class="icon-share" :class="{ active: activeKey === '/share' }"></div>
              <span class="label">Chia sẻ</span>
            </div>
          </template>
        </a-tab-pane>

        <a-tab-pane key="/sharing-efficiencyPage">
          <template #tab>
            <div class="tab-label-container">
              <div
                class="icon-sharing-efficiency"
                :class="{ active: activeKey === '/sharing-efficiencyPage' }"
              ></div>
              <span class="label">Hiệu quả chia sẻ</span>
            </div>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>

    <div class="content flex1 content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 1. Khởi tạo tab đang chọn dựa trên URL hiện tại
const activeKey = ref('/share') // Mặc định

// Hàm để xác định tab nào đang active dựa trên URL
const syncTabWithRoute = () => {
  if (route.path.includes('sharing-efficiencyPage')) {
    activeKey.value = '/sharing-efficiencyPage'
  } else {
    activeKey.value = '/share'
  }
}

// Chạy 1 lần khi load trang
onMounted(() => {
  syncTabWithRoute()
})

// 2. Theo dõi sự thay đổi URL (để nút Back/Forward trình duyệt vẫn hoạt động đúng tab)
watch(
  () => route.path,
  () => {
    syncTabWithRoute()
  },
)

// 3. Sự kiện khi người dùng bấm vào Tab -> Chuyển trang
const handleTabChange = (key) => {
  router.push(key)
}
</script>

<style scoped>
.custom-green-tabs {
  margin-bottom: 20px;
  padding: 0;
  background: white;
  width: 100%;
}
.main-content {
  background: #f2f2f2;
}

.content {
  background: #f2f2f2;

  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.tab-label-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.label {
  font-size: 14px;
  font-weight: 500;
}

/* 1. Thanh gạch chân  */
:deep(.ant-tabs-ink-bar) {
  background-color: #00a65a !important;
  height: 3px !important; /* Độ dày thanh highlight */
}

/* 2. Màu chữ khi Active */
:deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #00a65a !important;
  text-shadow: 0 0 0.25px currentColor;
}

/* 3. Màu khi Hover */
:deep(.ant-tabs-tab:hover) {
  color: #00a65a !important;
}

/* 4. Căn chỉnh Tabs ra giữa (nếu muốn giống design cũ) */
:deep(.ant-tabs-nav) {
  margin-bottom: 0 !important;
}

:deep(.ant-tabs-nav-wrap) {
  display: flex;
  justify-content: center; /* Căn giữa các tab */
}
</style>
