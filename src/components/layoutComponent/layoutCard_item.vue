<template>
  <div class="ma-3">
    <!-- 上方文字 -->
    <div
      :style="{ height, width }"
      class="mb-3 text-subtitle-2 text-neutral30 d-flex"
      :class="labelAlign"
    >
      <div class="text-start">
        <slot name="label">{{ label }}</slot>
      </div>
    </div>

    <!-- 下方 content -->
    <div class="d-flex" :class="contentAlign">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "layoutCardItem", // 可替換成你的元件名稱
  props: {
    label: {
      type: String,
      default: "", // 若希望有預設值也可加上
    },
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
    contentAlign: {
      type: String,
      default: "justify-center",
    },
  },
};
</script>
