<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn color="primary" v-bind="activatorProps" text="Open Dialog"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="dialogCard">
        <v-card-title :class="bgcolor">
          <span class="material-icons-outlined"> message </span>
          Copy link
        </v-card-title>
        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="closeBtn"
            text="Close"
            color="neutral-darken-4"
            @click="isActive.value = false"
          ></v-btn>
          <v-btn variant="outlined" text="不同意" color="primary"></v-btn>
          <v-btn variant="flat" text="同意" color="primary"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  // name: "dialog",
  props: {
    bgcolor: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
