<template>
  <v-dialog class="scrollDialog" max-width="500" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        color="primary"
        text="Medium Scroll"
        variant="outlined"
        v-bind="activatorProps"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="">
          <span class="material-icons-outlined"> message </span> Copy
          link</v-card-title
        >
        <v-card-text class="px-4" style="height: 500px">
          <v-radio-group v-model="dialog" hide-details="auto">
            <v-radio
              :value="`${i}`"
              v-for="i in 30"
              :key="i"
              :label="`${i} LabeLabeLabeLabeLabel`"
            ></v-radio>
          </v-radio-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="closeBtn"
            text="Close"
            color="neutral-darken-4"
            @click="isActive.value = false"
          ></v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            text="Save"
            variant="flat"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: "",
    };
  },
};
</script>

<style></style>
