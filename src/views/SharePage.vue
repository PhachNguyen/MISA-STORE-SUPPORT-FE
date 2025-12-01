<template>
  <div class="content">
    <div class="card-section-create-link display-flex">
      <div class="label-group" style="width: 50%">
        <div class="title">Tạo link chia sẻ</div>
        <div class="sub-title">
          Link chia sẻ được tự động mà gán nhãn viên để ghi nhận doanh số ghi có đơn hàng
        </div>
        <text-box
          label="Link bài viết/trang"
          placeholder="Vui lòng dán link bài viết/landing page,.. mà bạn muốn chia sẻ tại đây"
          required=""
        ></text-box>
        <text-box label="Tiêu đề bài viết " placeholder="Tiêu đề" required="" />
        <text-box
          label="Mã nhân viên"
          placeholder="B-1170"
          sub_label="(được tự động gắn link chia sẻ để ghi nhận doanh số)"
          disabled
        />
        <div class="display-flex justify-content-center">
          <ms-button label="Tạo link chia sẻ "></ms-button>
        </div>
      </div>

      <div class="image"></div>
      <!-- <div><img src="../assets/images/image.png" alt="" /></div> -->
    </div>
    <div class="card-section-list-link">
      <!-- <div class="divied"></div> -->
      <div class="link-share">
        <span class="title">Chọn nhanh link chia sẻ</span>
        <div class="tabs-link-share display-flex">
          <span class="title-link-share active"> Link đã tạo</span>
          <span class="title-link-share">Landing page</span>
          <span class="title-link-share">Bài viết mới nhất</span>
          <span class="title-link-share">Bài viết được đọc nhiều nhất </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//  Định nghĩa
import TextBox from '@/components/ms-textbox/TextBox.vue'
import MsButton from '@/components/ms-button/MsButton.vue'
</script>

<style scoped>
.content {
  background: #f2f2f2;

  padding-top: 0px;
  padding-right: 0px;
  padding-left: 0px;
  padding-bottom: 0px;
}
.label-wrapper {
  background: white;
}
.card-section-create-link {
  margin-bottom: 10px;
  padding: 20px;
  background: white;
}
.title {
  color: #212121;
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 15px;
}
.sub-title {
  color: #666666;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Link share */
.link-share {
  /* margin-top: 30px; */
  /* background: red; */
}
.tabs-link-share {
  margin-top: 15px;
  border: 1px gray solid;
  /* gap: 20px; */
  width: 40%;
}
.title-link-share {
  /* margin-right: 25px; */
  gap: 20px;
  /* font-size: 12px; */
  font-weight: 600px;
  padding: 5px;
}
.title-link-share.active {
  color: #34b057;
  font-weight: 600;
  background: #eaf7ee;
}
.card-section-list-link {
  background: white;
  padding: 20px;
}
</style>
