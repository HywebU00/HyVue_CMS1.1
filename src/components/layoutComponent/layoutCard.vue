<template>
  <div>
    <h5 class="text-subtitle-1 font-weight-bold my-3">{{ title }}</h5>
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

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  flexWrap: {
    type: String,
    default: "nowrap",
  },
});
</script>

<style scoped></style>
