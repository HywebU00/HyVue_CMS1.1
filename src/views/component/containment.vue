<template>
  <v-container class="container">
    <h2>容器组件（Containment）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                按鈕樣式 ( Button)
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <v-btn class="ma-1" color="primary"> Button </v-btn>
                <v-btn class="ma-1"> Button </v-btn>
                <v-btn class="ma-1" variant="outlined"> outlinedButton </v-btn>
                <v-btn class="ma-1" variant="tonal"> tonalButton </v-btn>
                <v-btn class="ma-1" variant="text"> textButton </v-btn>
                <v-btn class="ma-1" variant="plain"> plainButton </v-btn>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                卡片樣式 (Cards)
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <v-row class="albumCardList mt-0">
                  <v-col
                    v-for="item in 4"
                    :key="item"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                  >
                    <card />
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                卡片樣式 (Cards)
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <!-- 橫向樣式 start -->
              <v-row class="albumCardList list">
                <v-col
                  v-for="item in 4"
                  :key="item"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                  xl="2"
                >
                  <card />
                </v-col>
              </v-row>
              <!-- 橫向樣式 end -->
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <div class="mb-1">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">chip</h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-chip-group v-model="selection">
                      <v-chip
                        v-for="item in 6"
                        :key="item"
                        color="primary"
                        link
                        label
                      >
                        標籤
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
            </v-container>
            <!--滑動標籤 標籤列 start -->
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                chip 圖示標籤
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-chip class="ma-2" label> Label </v-chip>

                    <v-chip class="ma-2" color="pink" label>
                      <v-icon icon="mdi-label" start></v-icon>
                      Tags
                    </v-chip>

                    <v-chip class="ma-2" color="primary" label>
                      <v-icon icon="mdi-account-circle-outline" start></v-icon>
                      John Leider
                    </v-chip>

                    <v-chip class="ma-2" color="cyan" closable label>
                      <v-icon icon="mdi-twitter" start></v-icon>
                      New Tweets
                    </v-chip>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <!--滑動標籤 標籤列 end -->
            <!--滑動標籤 標籤列 start -->
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                chip 滑動標籤
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-sheet>
                      <v-slide-group show-arrows>
                        <v-slide-group-item v-for="n in 25" :key="n">
                          <v-chip> Chip </v-chip>
                        </v-slide-group-item>
                      </v-slide-group>
                    </v-sheet>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <!--滑動標籤 標籤列 end -->
          </div>
        </v-card></v-col
      >
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                对话框（Dialogs）
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-container>
                      <dialogs />
                      <scrollDialogs />
                      <largeScrollDialogs />
                    </v-container>
                  </div>
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
            </v-container>
          </div>
        </v-card></v-col
      >
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                扩展面板（Expansion panels）
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-expansion-panels>
                      <v-expansion-panel
                        title="Title"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
                      >
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                  <div>
                    <div class="text-subtitle-2 mb-2">Default</div>
                    <v-expansion-panels>
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        title="Item"
                      ></v-expansion-panel>
                    </v-expansion-panels>

                    <div class="text-subtitle-2 mt-4 mb-2">Accordion</div>

                    <v-expansion-panels variant="accordion">
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        title="Item"
                      ></v-expansion-panel>
                    </v-expansion-panels>

                    <div class="text-subtitle-2 mt-4 mb-2">Inset</div>

                    <v-expansion-panels class="my-4" variant="inset">
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        title="Item"
                      ></v-expansion-panel>
                    </v-expansion-panels>

                    <div class="text-subtitle-2 mt-4 mb-2">Popout</div>

                    <v-expansion-panels class="my-4" variant="popout">
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        title="Item"
                      ></v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
            </v-container>
          </div>
        </v-card></v-col
      >
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                提示(Tooltips)
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <div class="d-flex justify-space-around">
                      <v-btn color="primary">
                        Start
                        <v-tooltip activator="parent" location="start"
                          >Tooltip</v-tooltip
                        >
                      </v-btn>

                      <v-btn color="primary">
                        End
                        <v-tooltip activator="parent" location="end"
                          >Tooltip</v-tooltip
                        >
                      </v-btn>

                      <v-btn color="primary">
                        Top
                        <v-tooltip activator="parent" location="top"
                          >Tooltip</v-tooltip
                        >
                      </v-btn>

                      <v-btn color="primary">
                        Bottom
                        <v-tooltip activator="parent" location="bottom"
                          >Tooltip</v-tooltip
                        >
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
            </v-container>
          </div>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import card from "@/components/card.vue";
import dialogs from "@/components/dialogs.vue";
import scrollDialogs from "@/components/scrollDialogs.vue";
import largeScrollDialogs from "@/components/largeScrollDialogs.vue";

export default {
  components: { card, dialogs, scrollDialogs, largeScrollDialogs },
};
</script>

<style></style>
