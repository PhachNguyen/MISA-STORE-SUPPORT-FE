<template>
  <div class="page-content">
    <div class="card-section-create-link">
      <div v-if="!isCreated" class="form-container display-flex">
        <div class="label-group" style="width: 50%; padding-top: 5px">
          <div class="title">Tạo link chia sẻ</div>
          <div class="sub-title">
            Link chia sẻ được tự động gắn mã nhân viên để ghi nhận doanh số khi có đơn hàng.
          </div>

          <text-box
            label="Link bài viết/trang"
            placeholder="Vui lòng dán link bài viết/landing page,.. mà bạn muốn chia sẻ tại đây"
            v-model="formData.link"
            :error-text="errors.link"
            @focus="resetState('link')"
            required
          ></text-box>

          <text-box
            label="Tiêu đề bài viết"
            placeholder="Tiêu đề"
            :error-text="errors.title"
            @focus="resetState('title')"
            v-model="formData.title"
            required
          />

          <text-box
            label="Mã nhân viên"
            placeholder="B-1170"
            sub_label="(được tự động gắn link chia sẻ để ghi nhận doanh số)"
            disabled
            v-model="formData.staffCode"
          />

          <div class="display-flex justify-content-center" style="margin-top: 20px">
            <ms-button label="Tạo link chia sẻ" @click="handleCreateLink"></ms-button>
          </div>
        </div>

        <div class="image"></div>
      </div>

      <SuccessLink
        v-else
        :generated-link="currentGeneratedLink"
        @create-new="resetForm"
        @copy="showToast('success', 'Đã sao chép liên kết vào bộ nhớ tạm!')"
      />
    </div>

    <div class="card-section-list-link">
      <div class="link-share-header">
        <span class="title">Chọn nhanh link chia sẻ</span>
        <div class="tabs-link-share display-flex">
          <div class="tab-item active">Link đã tạo</div>
          <div class="tab-item">Landing page</div>
          <div class="tab-item">Bài viết mới nhất</div>
          <div class="tab-item">Bài viết được đọc nhiều nhất</div>
        </div>
      </div>

      <div class="filter-bar display-flex">
        <search placeholder="Tìm kiếm theo nội dung bài chia sẻ" width="350px" />
        <m-s-date />
      </div>

      <link-affiliate-card :list-data="listLinks" />
    </div>

    <ms-toast
      v-if="toast.show"
      :type="toast.type"
      :label="toast.label"
      @close="toast.show = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Import components
import TextBox from '@/components/ms-textbox/TextBox.vue'
import MsButton from '@/components/ms-button/MsButton.vue'
import Search from '@/components/ms-search/Search.vue'
import MSDate from '@/components/ms-date/MSDate.vue'
import LinkAffiliateCard from '@/components/ms-linkcard/LinkAffiliateCard.vue'
import MsToast from '@/components/ms-toast/MsToast.vue'
import SuccessLink from '@/views/SuccessLink.vue'
import DefaultImage from '@/assets/images/ms-image-link-2.webp'

const isCreated = ref(false) // Biến quyết định hiển thị Form hay Success
const currentGeneratedLink = ref('') // Lưu link vừa tạo để hiển thị lên màn hình Success

// Dữ liệu form tạo link
const formData = ref({
  link: '',
  title: '',
  staffCode: 'B-1170',
})

// Dữ liệu Toast thông báo
const toast = ref({
  show: false,
  type: 'success',
  label: '',
})
// Error
const errors = ref({
  link: '',
  title: '',
})
//  Validate form
const validate = () => {
  // Validate link
  if (!formData.value.link) {
    errors.value.link = 'Link bài viết/trang không được để trống'
    // showToast('warning', 'Link bài viết/trang không được để trống!')
    // isValid = false
  } else {
    errors.value.link = ''
  }
  // Validate title
  if (!formData.value.title) {
    errors.value.title = 'Tiêu đề bài viết không được để trống'
    showToast('warning', 'Tiêu đề bài viết không được để trống!')
    // isValid = false
  } else {
    errors.value.title = ''
  }
  // return isValid
}
//  Khi người dùng focus vào ô input domain, reset trạng thái
const resetState = (field) => {
  errors[field] = ''
}
// Dữ liệu danh sách (Khởi tạo rỗng, sẽ load khi mount)
const listLinks = ref([])

// load dữ liệu khi component được mount
onMounted(() => {
  loadData()
})

//  load dữ liệu từ LocalStorage
const loadData = () => {
  const data = localStorage.getItem('listLinks')
  if (data) {
    listLinks.value = JSON.parse(data)
  } else {
    // Dữ liệu mẫu nếu chưa có gì
    listLinks.value = []
  }
}

// Hàm xử lý tạo link
const handleCreateLink = () => {
  //  Validate
  // if (!formData.value.link || !formData.value.title) {
  //   showToast('warning', 'Vui lòng nhập đầy đủ thông tin!')
  //   return
  // }
  validate()
  // Tạo object lưu trữ
  const newLinkItem = {
    id: Date.now(),
    title: formData.value.title,
    link: formData.value.link,
    desc: 'Link chia sẻ được tạo tự động',
    date: new Date().toLocaleDateString('vi-VN'),
    image: DefaultImage, // Hoặc ảnh mặc định
  }

  // Lưu vào LocalStorage
  const currentList = JSON.parse(localStorage.getItem('listLinks')) || []
  currentList.unshift(newLinkItem) // Thêm lên đầu
  localStorage.setItem('listLinks', JSON.stringify(currentList))

  // Cập nhật giao diện danh sách bên dưới ngay lập tức
  listLinks.value = currentList
  isCreated.value = true

  //  Hiện Toast thông báo
  showToast('success', 'Tạo link chia sẻ thành công!')
}

// Reset form
const resetForm = () => {
  isCreated.value = false
  formData.value.link = ''
  formData.value.title = ''
}

// hiển thị Toast
const showToast = (type, label) => {
  toast.value = { show: true, type, label }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}
</script>

<style scoped>
.page-content {
  background: #f2f2f2;
  height: calc(100vh - 100px);
  overflow: auto;
}

/*  */
.card-section-create-link {
  background: white;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-height: 400px; /* Chiều cao tối thiểu để tránh bị giật khi chuyển view */
}

/* Class wrapper riêng cho phần Form để dùng display flex */
.form-container {
  gap: 20px;
}

.image {
  flex: 1;
  background-image: url('@/assets/images/image.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card-section-list-link {
  background: white;
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.title {
  color: #111;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
}
.sub-title {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.display-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}

/* Filter bar styles */
.filter-bar {
  gap: 12px;
  margin-bottom: 20px;
  align-items: center;
}

/* Tabs styles */
.link-share-header {
  margin-bottom: 16px;
}
.tabs-link-share {
  margin-top: 12px;
  gap: 10px;
}
.tab-item {
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  color: #555;
  transition: all 0.2s;
  background-color: #f5f5f5;
}
.tab-item.active {
  background-color: #e5f3e8;
  color: #2ca01c;
}
.tab-item:hover:not(.active) {
  background-color: #ebebeb;
}
</style>
