<template>
  <v-container class="container">
    <h2>挑選器組件（Pickers）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 font-weight-bold">
                日期選擇器元件（Date pickers）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="樣式" flexWrap="wrap">
                <layoutCardItem :height="'20px'">
                  <template #label>State:Text</template>
                  <template #content>
                    <v-date-picker
                      class="textDatePicker"
                      color="secondary-lighten-1"
                      header-color="neutral100"
                      show-adjacent-months
                    ></v-date-picker>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'">
                  <template #label>State:Elevated</template>
                  <template #content>
                    <v-date-picker
                      show-adjacent-months
                      elevation="6"
                    ></v-date-picker>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'">
                  <template #label>State:Flat</template>
                  <template #content>
                    <v-date-picker
                      color="secondary-lighten-1"
                      elevation="6"
                      show-adjacent-months
                    ></v-date-picker>
                  </template>
                </layoutCardItem>
              </layoutCard>
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import layoutCard from "@/components/layoutComponent/layoutCard.vue";
import layoutCardItem from "@/components/layoutComponent/layoutCard_item.vue";
export default {
  components: {
    layoutCard,
    layoutCardItem,
  },
};
</script>
