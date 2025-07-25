<template>
  <div>
    <h5 class="text-subtitle-1 font-weight-bold mt-3">{{ title }}</h5>
    <div class="text-subtitle-1 mb-3 mt-1 ms-2">{{ subtitle }}</div>
    <div
      class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
    >
      <div class="box">
        <div class="d-flex mb-3" :style="{ flexWrap }">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layoutCard", // 可以根據你的元件命名
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    flexWrap: {
      type: String,
      default: "nowrap",
    },
  },
};
</script>
<script setup>
// defineProps({
//   title: {
//     type: String,
//     default: "",
//   },
//   subtitle: {
//     type: String,
//     default: "",
//   },
//   flexWrap: {
//     type: String,
//     default: "nowrap",
//   },
// });
//
</script>

<style scoped></style>
