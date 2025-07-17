<template>
  <v-container class="container">
    <h2>容器组件（Containment）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                按鈕樣式 ( Button)
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <h5 class="text-subtitle-1 font-weight-bold my-3">尺寸效果</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Size:Large
                      </div>
                      <v-btn size="large" color="primary"> Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Size:Medium
                      </div>
                      <v-btn color="primary"> Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Size:Small
                      </div>
                      <v-btn size="small" color="primary"> Button </v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">區塊按鈕</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3 w-100">
                      <div class="">
                        <v-btn size="large" block color="primary">
                          Button
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">圓角效果</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Radius: 4/SM
                      </div>
                      <v-btn color="primary" size="large" rounded="sm">
                        radius 4 / SM
                      </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Radius: 8/DEF
                      </div>
                      <v-btn color="primary" size="large" rounded="def">
                        radius 8 / DEF
                      </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Radius: 12/MED
                      </div>
                      <v-btn color="primary" size="large" rounded="md">
                        radius 12 / MED
                      </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Radius: 18/LG
                      </div>
                      <v-btn color="primary" size="large" rounded="lg">
                        radius 18 / LG
                      </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Radius: 120/FULL
                      </div>
                      <v-btn color="primary" size="large" rounded="full">
                        radius 120 / FULL
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">陰影效果</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3" v-for="i in 3" :key="i">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        {{ `shadow${i * 20}` }}
                      </div>
                      <v-btn
                        size="large"
                        :class="[`shadow-${i * 20}`]"
                        color="primary"
                      >
                        Button
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">樣態</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type:Elevated
                      </div>
                      <v-btn color="primary"> Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type:Flat
                      </div>
                      <v-btn variant="flat" color="primary"> Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type:Tonal
                      </div>
                      <v-btn variant="tonal" color="primary">Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type:Outlined
                      </div>
                      <v-btn variant="outlined" color="primary"> Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type:Text
                      </div>
                      <v-btn variant="text" color="primary"> Button </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type:Plain
                      </div>
                      <v-btn variant="plain" color="primary"> Button </v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">按鈕圖示</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3">
                      <div
                        style="height: 68px; width: 158px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">
                          Show First Icon:True <br />
                          Show Lable:False
                        </div>
                      </div>
                      <div class="d-flex justify-center">
                        <v-btn icon="mdi-web" size="large" color="primary">
                        </v-btn>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        style="height: 68px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">
                          Show First Icon:True <br />Show Lable:True
                        </div>
                      </div>
                      <v-btn size="large" color="primary">
                        <template v-slot:prepend>
                          <v-icon icon="mdi-pencil"></v-icon>
                        </template>

                        Frist Icon
                      </v-btn>
                    </div>
                    <div class="ma-3">
                      <div
                        style="height: 68px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">
                          Show Last Icon:True<br />Show Lable:True
                        </div>
                      </div>
                      <v-btn size="large" color="primary">
                        <template v-slot:append>
                          <v-icon icon="mdi-chevron-right"></v-icon>
                        </template>
                        Last Icon</v-btn
                      >
                    </div>
                    <div class="ma-3">
                      <div
                        style="height: 68px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">
                          Show First Icon:True<br />Show Last Icon:True<br />Show
                          Lable:True
                        </div>
                      </div>
                      <v-btn size="large" color="primary">
                        <template v-slot:prepend>
                          <v-icon icon="mdi-pencil"></v-icon>
                        </template>
                        First / Last
                        <template v-slot:append>
                          <v-icon icon="mdi-chevron-down"></v-icon>
                        </template>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
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
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                標籤樣式 ( chip)
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <h5 class="text-subtitle-1 font-weight-bold my-3">樣態</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type: Default
                      </div>
                      <div class="d-flex justify-center">
                        <v-chip link label> 標籤 </v-chip>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type: Outlined
                      </div>
                      <div class="d-flex justify-center">
                        <v-chip color="primary" variant="outlined" link label>
                          標籤
                        </v-chip>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type: Elevated
                      </div>
                      <div class="d-flex justify-center">
                        <v-chip variant="elevated" color="primary" link label>
                          標籤
                        </v-chip>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type: Text
                      </div>
                      <div class="d-flex justify-center">
                        <v-chip variant="text" link label> 標籤 </v-chip>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 text-center"
                      >
                        Type: Plain
                      </div>
                      <div class="d-flex justify-center">
                        <v-chip variant="plain" link label> 標籤 </v-chip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">圖示標籤</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="ma-3">
                      <div
                        style="height: 45px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">Show First Icon:True</div>
                      </div>

                      <div class="d-flex justify-center">
                        <v-chip class="ma-2" label>
                          <v-icon
                            icon="mdi-check-circle-outline"
                            start
                          ></v-icon>
                          Frist Icon
                        </v-chip>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        style="height: 45px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">Show Last Icon: True</div>
                      </div>

                      <div class="d-flex justify-center">
                        <v-chip class="ma-2" label>
                          <v-icon
                            icon="mdi-check-circle-outline"
                            start
                          ></v-icon>
                          Last Icon
                          <v-icon icon="mdi-close" end></v-icon>
                        </v-chip>
                      </div>
                    </div>
                    <div class="ma-3">
                      <div
                        style="height: 45px"
                        class="mb-3 text-subtitle-2 text-neutral-darken-5 justify-center d-flex"
                      >
                        <div class="text-start">
                          Show Last Icon : True <br />
                          Show First Icon: True
                        </div>
                      </div>

                      <div class="d-flex justify-center">
                        <v-chip class="ma-2" label>
                          First + Last
                          <v-icon icon="mdi-close" end></v-icon>
                        </v-chip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="text-subtitle-1 font-weight-bold my-3">滑動標籤</h5>
              <div
                class="scrollCard mb-8 pa-5 border-neutral-darken-5 border-md rounded-md"
              >
                <div class="box">
                  <div class="d-flex mb-3">
                    <div class="">
                      <v-slide-group show-arrows style="width: 500px">
                        <v-slide-group-item v-for="n in 8" :key="n">
                          <v-chip label variant="outlined" link class="mx-1">
                            <v-icon
                              icon="mdi-check-circle-outline"
                              start
                            ></v-icon>
                            Chip
                          </v-chip>
                        </v-slide-group-item>
                      </v-slide-group>
                    </div>
                  </div>
                </div>
              </div>
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
