<template>
  <v-container class="container">
    <h2>選擇組件（Selection）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                步驟列元件（Steppers）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="基本結構" flexWrap="wrap">
                <!-- 簡單步驟與內容 -->
                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>步驟內容展示</template>
                  <template #content>
                    <v-stepper
                      class="w-100"
                      :items="['Step 1', 'Step 2', 'Step 3']"
                    >
                      <template v-slot:item.1>
                        <v-card title="Step One" flat>aaa</v-card>
                      </template>

                      <template v-slot:item.2>
                        <v-card title="Step Two" flat>bbb</v-card>
                      </template>

                      <template v-slot:item.3>
                        <v-card title="Step Three" flat>ccc</v-card>
                      </template>
                    </v-stepper>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="狀態" flexWrap="wrap">
                <!-- 基本 header 步驟 -->
                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>基本步驟列</template>
                  <template #content>
                    <v-stepper class="w-100" model-value="2">
                      <v-stepper-header>
                        <v-stepper-item
                          title="Select campaign settings"
                          value="1"
                          complete
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          title="Create an ad group"
                          value="2"
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          title="Create an ad"
                          value="3"
                        ></v-stepper-item>
                      </v-stepper-header>
                    </v-stepper>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="錯誤狀態" flexWrap="wrap">
                <!-- 含 subtitle 與 rules 的複雜步驟列 -->
                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>進階步驟列（含驗證與副標題）</template>
                  <template #content>
                    <v-stepper class="w-100" model-value="3">
                      <v-stepper-header>
                        <v-stepper-item
                          title="Job Search"
                          value="1"
                          complete
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          :rules="[() => false]"
                          subtitle="Missing Details"
                          title="Submit Application"
                          value="2"
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          title="Interview Process"
                          value="3"
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          title="Hiring Decision"
                          value="4"
                        ></v-stepper-item>
                      </v-stepper-header>
                    </v-stepper>
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

<style></style>
