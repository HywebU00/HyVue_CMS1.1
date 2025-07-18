<template>
  <div class="ma-3">
    <!-- 上方文字 -->
    <div
      :style="{ height, width }"
      class="mb-3 text-subtitle-2 text-neutral-darken-5 d-flex"
      :class="labelAlign"
    >
      <div class="text-start">
        <slot name="label">{{ label }}</slot>
      </div>
    </div>

    <!-- 下方 content -->
    <div class="d-flex justify-center">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String, // 顯示文字（可被 slot label 覆蓋）
  height: {
    type: String,
    default: "0px",
  },
  width: {
    type: String,
    default: "auto",
  },
  labelAlign: {
    type: String,
    default: "justify-center",
  },
});
</script>
