<template>
  <header class="header">
    <div class="left display-flex align-items-center">
      <div class="icon-menu"></div>
      <div class="icon-menu"></div>
      <span class="title-header">MISA Store Support</span>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  height: 45px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  /* position: fixed; */
}

/* GROUP LEFT */
.left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-header {
  font-weight: 700;
  font-size: 18px;
  /* font-family:inherit; */
  color: #2d3748;
}
</style>
