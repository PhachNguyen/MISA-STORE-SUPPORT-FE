<template>
  <aside class="sidebar">
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <div class="icon-shopping"></div>
          <span class="label">Hỗ trợ mua mới</span>
        </li>

        <li class="menu-item">
          <div class="icon-convert"></div>
          <span class="label">Hỗ trợ chuyển đổi</span>
        </li>

        <li class="menu-item">
          <!-- <span class="icon menu-order"></span> -->
          <div class="icon-convert"></div>
          <span class="label">Tra cứu đơn hàng</span>
        </li>

        <li class="menu-item">
          <!-- <span class="icon menu-promo"></span> -->
          <div class="icon-promotion"></div>
          <span class="label">Tra cứu ưu đãi</span>
        </li>

        <li class="menu-item active">
          <!-- <span class="icon menu-link"></span> -->
          <div class="icon-convert"></div>
          <span class="label">Liên kết bán hàng</span>
        </li>

        <li class="menu-item">
          <!-- <span class="icon menu-demo"></span> -->
          <div class="icon-copy"></div>
          <span class="label">Tạo dữ liệu demo</span>
        </li>
        <!-- <i class="pi pi-copy"></i> -->
      </ul>
    </nav>
  </aside>
</template>

<script setup></script>

<style scoped>
/* SIDEBAR CONTAINER */
.sidebar {
  width: 240px;
  /* height: 100vh; */
  background: #fff;
  border-right: 1px solid #e5e7eb;
  padding-top: 16px;
  box-sizing: border-box;
  margin-right: 10px;
}

/* MENU LIST */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* EACH ITEM */
.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  border-left: 4px solid transparent;
  color: #4a5568;
  transition: 0.2s;
  font-size: 14px;
}

.menu-item:hover {
  background: #f6fafb;
  color: #2f855a;
}

/* ACTIVE ITEM */
.menu-item.active {
  background: #e8f7ed;
  border-left-color: #1f9e43;
  color: #1f9e43;
  font-weight: 600;
}

.label {
  font-size: 14px;
  font-weight: 700;
}
/*  */
</style>
