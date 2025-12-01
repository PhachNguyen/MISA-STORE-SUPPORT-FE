<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary', // Primary và secondary
  },
  label: {
    type: String,
    default: '',
  },
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
    <div v-if="props.icon && props.positionIcon === 'left'" :class="['icon', props.icon]"></div>

    <!-- Text -->
    <span v-if="props.label" class="ms-btn-label">{{ props.label }}</span>

    <!-- Icon bên phải -->
    <div v-if="props.icon && props.positionIcon === 'right'" :class="['icon', props.icon]"></div>
  </div>
  <!-- Div icon  -->
</template>

<style scoped>
.ms-btn {
  padding: 0 16px;
  border-radius: 6px;
  cursor: pointer;
  gap: 8px;
  display: inline-flex;
  align-items: center;
}

.ms-btn--primary {
  background-color: #34b057;
  /* width: 128px; */
  height: 36px;
  /* padding: 8px 12px; */
  /* padding: 15px 15px; */
  /* gap: 8px; */
  /* margin-left: 15px; */
  cursor: pointer;
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

.ms-btn--cancel {
  background: #f44336;
  color: white;
}
</style>
