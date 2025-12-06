<script setup>
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'
import TheMainContent from './layouts/TheMainContent.vue'
</script>

<template>
  <div class="container display-flex flex-column">
    <TheHeader />
    <div class="wrapper display-flex flex1">
      <the-sidebar />
      <TheMainContent />
    </div>
  </div>
</template>

<style>
Reset css *,
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-size: 13px;
  overflow: hidden;
}

.container {
  width: 100%;
  /* overflow-y: auto; */
  /*  Lỗi fix sau */
  /*  Chiếm hết chiều cao màn hình  */
  height: 100vh;
  background-color: #f2f2f2;
  /* margin: 0 auto;
    padding: 20px; */
}
.wrapper {
  overflow-y: hidden;
  margin: 10px;
  /*  Set up cho header position fixed */
  padding-top: 45px;

  /* width: 90%; */
}
</style>
