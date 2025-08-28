<template>
  <!-- 如要fix 視窗 請增加“scrollable” -->
  <v-dialog class="largeScrollDialog" v-model="dialog" max-width="992">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        color="primary"
        text="largeScrollDialogs"
        variant="outlined"
        v-bind="activatorProps"
      ></v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="material-icons-outlined"> message </span> Copy
        link</v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col cols="12" class="">
            <p>
              <a class="text-primary" href="">我是連結文字 </a> dolor sit amet,
              semper quis, sapien id natoque elit. Nostra urna at, magna at
              neque sed sed ante imperdiet, dolor mauris cursus velit, velit
              non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis
              erat proin condimentum in a eget, sed fermentum sed vestibulum
              varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices
              nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum,
              nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris
              dui tempor, aptent non. Quisque turpis. Phasellus quis lectus
              luctus orci eget rhoncus. Amet donec vestibulum mattis commodo,
              nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra
              tempus magna neque pellentesque, nulla vel erat.
            </p>
          </v-col>
          <v-col cols="12">
            <Vtable />
          </v-col>
          <v-col cols="12" class="">
            <p class="note">
              *備註字體 Lorem ipsum dolor sit amet, semper quis, sapien id
              natoque elit. Nostra urna at, magna at neque sed sed ante
              imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat
              sem ridiculus placerat leo, augue in, duis erat proin condimentum
              in a eget, sed fermentum sed vestibulum varius ac, vestibulum
              volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida
              ante arcu.
            </p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="closeBtn"
          text="Close"
          color="neutral40"
          @click="isActive.value = false"
        ></v-btn>
        <v-btn variant="outlined" text="不同意" color="primary"></v-btn>
        <v-btn variant="flat" text="同意" color="primary"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import Vtable from "@/components/Vtable.vue";
export default {
  components: { Vtable },
  data: () => ({
    dialog: false,
  }),
};
</script>
