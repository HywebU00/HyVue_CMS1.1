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
                    <v-stepper v-model="e1" class="w-100" non-linear>
                      <template v-slot:default="{ prev, next }">
                        <v-stepper-header>
                          <template v-for="n in steps" :key="n">
                            <v-stepper-item
                              color="primary"
                              :complete="e1 > n"
                              :step="n"
                              :value="n"
                            >
                              <template #title>
                                <div>
                                  <div class="title">Name of step {{ n }}</div>
                                </div>
                              </template>
                              <template #subtitle>
                                <div>
                                  <div class="subtitle">Optional</div>
                                </div>
                              </template>
                            </v-stepper-item>
                            <v-divider v-if="n !== steps" :key="n"></v-divider>
                          </template>
                        </v-stepper-header>

                        <v-stepper-window>
                          <v-stepper-window-item
                            v-for="n in steps"
                            :key="n"
                            :value="n"
                          >
                            <v-card>
                              <div class="title">Step One</div>
                              <div class="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Commodi, ratione debitis quis
                                est labore voluptatibus! Eaque cupiditate
                                minima, at placeat totam, magni doloremque
                                veniam neque porro libero rerum unde voluptatem!
                              </div>
                            </v-card>
                          </v-stepper-window-item>
                        </v-stepper-window>

                        <v-stepper-actions>
                          <template #prev>
                            <v-btn
                              @click="prev"
                              variant="outlined"
                              color="primary"
                              >PREVIOUS</v-btn
                            >
                          </template>
                          <template #next>
                            <v-btn
                              color="primary"
                              variant="elevated"
                              @click="next"
                            >
                              NEXT
                            </v-btn>
                          </template>
                        </v-stepper-actions>
                      </template>
                    </v-stepper>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="排列方式" flexWrap="wrap">
                <!-- 基本 header 步驟 -->
                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>Direction : Horizontal</template>
                  <template #content>
                    <v-stepper class="w-100" model-value="2">
                      <v-stepper-header>
                        <v-stepper-item
                          color="primary"
                          title="Select campaign settings"
                          value="1"
                          complete
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          color="primary"
                          title="Create an ad group"
                          value="2"
                        ></v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item
                          title="Create an a"
                          color="primary"
                          value="3"
                        ></v-stepper-item>
                      </v-stepper-header>
                    </v-stepper>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>Direction : Vertical</template>
                  <template #content>
                    <v-stepper class="w-100" model-value="2" alt-labels>
                      <v-stepper-header>
                        <v-stepper-item color="primary" value="1" complete>
                          <template #title>Name of step 1</template>
                          <template #subtitle>Optional</template>
                        </v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item color="primary" value="2">
                          <template #title>Name of step 2</template>
                          <template #subtitle>Optional</template>
                        </v-stepper-item>

                        <v-divider></v-divider>

                        <v-stepper-item color="primary" value="3">
                          <template #title>Name of step 1</template>
                          <template #subtitle>Optional</template>
                        </v-stepper-item>
                      </v-stepper-header>
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
  data() {
    return {
      e1: 1,
      steps: 3,
    };
  },
  methods: {
    next() {
      if (this.e1 < 3) this.e1++;
    },
    prev() {
      if (this.e1 > 1) this.e1--;
    },
  },

  computed: {
    disabled() {
      return this.e1 === 1
        ? "prev"
        : this.e1 === this.steps
        ? "next"
        : undefined;
    },
  },
  components: {
    layoutCard,
    layoutCardItem,
  },
};
</script>

<style></style>
