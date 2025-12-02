<script setup>
const props = defineProps({
  type: {
    type: String,
    //  Chia làm 4 loại
    default: 'primary', // Primary và secondary delete và share
  },
  label: {
    type: String,
    default: '',
  },
  // Icon
  icon: {
    type: String,
    default: '',
  },
  positionIcon: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

// const emit = defineEmits(['click', 'collapse'])

// function handleClick() {
//   if (props.type === 'collapse') emit('collapse')
//   emit('click')
// }
</script>

<template>
  <!-- Gán class chung  -->
  <div
    :class="[
      'ms-btn display-flex justify-content-center align-items-center flex-row',
      `ms-btn--${props.type}`,
    ]"
  >
    <!-- Icon bên trái -->
    <!--  Trường  hợp icon nằm bên trái  -->
    <div v-if="props.icon && props.positionIcon === 'left'" :class="props.icon"></div>

    <!-- Text -->
    <span v-if="props.label" class="ms-btn-label">{{ props.label }}</span>

    <!-- Icon bên phải -->
    <div
      v-if="props.icon && props.positionIcon === 'right'"
      :class="['icon-copy', props.icon]"
    ></div>
  </div>
  <!-- Div icon  -->
</template>

<style scoped>
.ms-btn {
  min-width: 80px;
  height: 36px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  background-color: transparent;
}
.icon {
  background: red;
}
.ms-btn--primary {
  background-color: #34b057;
  /* width: 128px; */

  /* padding: 8px 12px; */
  /* padding: 15px 15px; */
  /* gap: 8px; */
  /* margin-left: 15px; */
  cursor: pointer;
}
/* Primary */
.ms-btn--primary:hover {
  background: #02b936;
}
.ms-btn--primary:active {
  background: #198f3b;
}
.ms-btn--primary .ms-btn-label {
  /* padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px; */
  /* padding: 0 16px; */
  border-top-width: 0, 8;
  /* background-color: #2680EB; */
  /* padding-left: 8px; */
  font-size: 14px;
  color: white;
  font-weight: 500;
  /* width: 100%;
    height: 100%; */
}
/* .divider {
  width: 0.1px;
  height: 36px;
  background: black;

  margin: 0 6px;
} */

/* .ms-btn--save {
  background: #2196f3;
  color: white;
} */
/* Share */
.ms-btn--share {
  background: #e3f8ec;
  /* padding: 16px; */
}

/* Delete */
.ms-btn--delete {
  border: 1px #34b057 solid;
  background: white;
  color: white;
}
</style>
