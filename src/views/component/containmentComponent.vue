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
              <!-- 尺寸效果 start -->
              <layoutCard title="尺寸效果">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Size:Large </template>
                  <template #content>
                    <v-btn size="large" color="primary"> Button </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Size:Medium </template>
                  <template #content>
                    <v-btn color="primary"> Button </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Size:Small </template>
                  <template #content>
                    <v-btn size="small" color="primary"> Button </v-btn>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 尺寸效果 end -->
              <!-- 區塊按鈕 start -->
              <layoutCard title="區塊按鈕">
                <layoutCardItem style="width: 100%">
                  <template #content>
                    <v-btn size="large" block color="primary"> Button </v-btn>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 區塊按鈕 end -->
              <!-- 圓角效果 start -->
              <layoutCard title="圓角效果">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>Radius: 4/SM</template>
                  <template #content>
                    <v-btn color="primary" size="large" rounded="sm">
                      radius 4 / SM
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Radius: 8/DEF</template>
                  <template #content>
                    <v-btn color="primary" size="large" rounded="def">
                      radius 8 / DEF
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Radius: 12/MED</template>
                  <template #content>
                    <v-btn color="primary" size="large" rounded="md">
                      radius 12 / MED
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Radius: 24/LG</template>
                  <template #content>
                    <v-btn color="primary" size="large" rounded="lg">
                      radius 18 / LG
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Radius: 120/FULL</template>
                  <template #content>
                    <v-btn color="primary" size="large" rounded="full">
                      radius 120 / FULL
                    </v-btn></template
                  >
                </layoutCardItem>
              </layoutCard>
              <!-- 圓角效果 end -->
              <!-- 陰影效果 start -->
              <layoutCard title="陰影效果">
                <layoutCardItem
                  :width="'150px'"
                  :height="'20px'"
                  v-for="i in 3"
                  :key="i"
                >
                  <template #label>
                    {{ `shadow${i * 20}` }}
                  </template>
                  <template #content>
                    <v-btn
                      size="large"
                      :class="[`shadow-${i * 20}`]"
                      color="primary"
                    >
                      Button
                    </v-btn>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 陰影效果 end -->
              <!-- 樣態 start -->
              <layoutCard title="樣態">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>Type:Elevated</template>
                  <template #content>
                    <v-btn color="primary"> Button </v-btn></template
                  >
                </layoutCardItem>

                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type:Flat</template>
                  <template #content>
                    <v-btn variant="flat" color="primary">
                      Button
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type:Tonal</template>
                  <template #content>
                    <v-btn variant="tonal" color="primary"
                      >Button
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type:Outlined</template>
                  <template #content>
                    <v-btn variant="outlined" color="primary"> Button </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type:Text</template>
                  <template #content>
                    <v-btn variant="text" color="primary">
                      Button
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type:Plain</template>
                  <template #content>
                    <v-btn variant="plain" color="primary"> Button </v-btn>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 樣態 end -->
              <!-- 按鈕圖示 start -->
              <layoutCard title="按鈕圖示">
                <layoutCardItem :height="'68px'">
                  <template #label>
                    Show First Icon:True <br />
                    Show Lable:False</template
                  >
                  <template #content>
                    <v-btn icon="mdi-web" size="large" color="primary"> </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'68px'">
                  <template #label>
                    Show First Icon:True <br />Show Lable:True</template
                  >
                  <template #content>
                    <v-btn size="large" color="primary">
                      <template v-slot:prepend>
                        <v-icon icon="mdi-pencil"></v-icon>
                      </template>

                      Frist Icon
                    </v-btn></template
                  >
                </layoutCardItem>
                <layoutCardItem :height="'68px'">
                  <template #label>
                    Show Last Icon:True<br />Show Lable:True
                  </template>
                  <template #content>
                    <v-btn size="large" color="primary">
                      <template v-slot:append>
                        <v-icon icon="mdi-chevron-right"></v-icon>
                      </template>
                      Last Icon</v-btn
                    >
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'68px'">
                  <template #label>
                    Show First Icon:True<br />Show Last Icon:True<br />Show
                    Lable:True</template
                  >
                  <template #content>
                    <v-btn size="large" color="primary">
                      <template v-slot:prepend>
                        <v-icon icon="mdi-pencil"></v-icon>
                      </template>
                      First / Last
                      <template v-slot:append>
                        <v-icon icon="mdi-chevron-down"></v-icon>
                      </template> </v-btn
                  ></template>
                </layoutCardItem>
              </layoutCard>
              <!-- 按鈕圖示 end -->
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

              <!-- 邀請樣式start -->
              <layoutCard title="卡片樣式 (直式)" flexWrap="wrap">
                <layoutCardItem :height="'20px'" :width="'340px'">
                  <template #label> Type:Elevated </template>
                  <template #content>
                    <card variant="elevated" />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'340px'">
                  <template #label> Type:Flat </template>
                  <template #content>
                    <card variant="flat" />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'340px'">
                  <template #label> Type:Outlined </template>
                  <template #content>
                    <card variant="outlined" />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'340px'">
                  <template #label> Type:Tonal </template>
                  <template #content>
                    <card variant="tonal" />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'340px'">
                  <template #label> Type:Text </template>
                  <template #content>
                    <card variant="text" />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'340px'">
                  <template #label> Type:Plain </template>
                  <template #content>
                    <card variant="plain" />
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard
                title="卡片樣式 (橫式) "
                subtitle="增加 Class='albumCardList list'改變 卡片樣為橫式"
                flexWrap="wrap"
              >
                <!-- <div class="albumCardList list">
                  <card />
                </div> -->
                <card type="list" />
                <!-- 橫向樣式 start -->
                <!-- <v-row class="albumCardList list">
                  <v-col
                    v-for="item in 1"
                    :key="item"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                  >
                    <card type="list" />
                  </v-col>
                </v-row> -->
                <!-- 橫向樣式 end -->
              </layoutCard>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <div class="mb-1">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                標籤樣式 (chip)
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <!-- 樣態 start -->
              <layoutCard title="樣態">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type: Default </template>
                  <template #content>
                    <v-chip link label> 標籤 </v-chip>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type: Outlined </template>
                  <template #content>
                    <v-chip
                      size="large"
                      color="primary"
                      variant="outlined"
                      link
                      label
                    >
                      標籤
                    </v-chip>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type: Elevated </template>
                  <template #content>
                    <v-chip variant="elevated" color="primary" link label>
                      標籤
                    </v-chip>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type: Text </template>
                  <template #content>
                    <v-chip variant="text" link label> 標籤 </v-chip>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type: Plain </template>
                  <template #content>
                    <v-chip variant="plain" link label> 標籤 </v-chip>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 樣態 end -->
              <!-- 圖示標籤 start -->
              <layoutCard title="圖示標籤">
                <layoutCardItem :height="'45px'">
                  <template #label> Show First Icon:True </template>
                  <template #content>
                    <v-chip class="ma-2" label>
                      <v-icon icon="mdi-check-circle-outline" start></v-icon>
                      Frist Icon
                    </v-chip>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'45px'">
                  <template #label> Show Last Icon: True </template>
                  <template #content>
                    <v-chip class="ma-2" label>
                      Last Icon
                      <v-icon icon="mdi-close" end></v-icon>
                    </v-chip>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'45px'">
                  <template #label>
                    Show Last Icon : True <br />
                    Show First Icon: True</template
                  >
                  <template #content>
                    <v-chip class="ma-2" label>
                      <v-icon icon="mdi-check-circle-outline" start></v-icon>
                      Last + Icon
                      <v-icon icon="mdi-close" end></v-icon>
                    </v-chip>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 圖示標籤 end -->
              <!-- 滑動標籤 start  -->
              <layoutCard title="滑動標籤">
                <layoutCardItem>
                  <template #content>
                    <v-slide-group show-arrows style="width: 500px">
                      <v-slide-group-item v-for="n in 8" :key="n">
                        <v-chip label variant="outlined" link class="mx-1">
                          <v-icon
                            icon="mdi-check-circle-outline"
                            start
                          ></v-icon>
                          標籤
                        </v-chip>
                      </v-slide-group-item>
                    </v-slide-group>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 滑動標籤 end -->
              <!-- 標籤列 end -->
            </v-container>
          </div>
        </v-card></v-col
      >
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                對話框（Dialogs）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <!-- 預設樣式 start -->
              <layoutCard title="預設樣式">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type : Default </template>
                  <template #content>
                    <dialogs />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label> Type : Color </template>
                  <template #content>
                    <dialogs bgcolor="bg-neutral-darken-1" />
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 預設樣式 end -->
              <!-- 邀請樣式start -->
              <layoutCard title="邀請樣式">
                <layoutCardItem>
                  <template #content>
                    <v-dialog class="dialogSmall" max-width="350">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                          v-bind="activatorProps"
                          color="primary"
                          text="Open Dialog"
                          variant="flat"
                        ></v-btn>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-card-title class="bg-neutral-darken-1">
                            <span class="material-icons-outlined"> link </span>
                            Copy link
                          </v-card-title>
                          <v-card-text> share with John +1 more </v-card-text>

                          <v-card-actions>
                            <v-btn
                              class="closeBtn"
                              text="Close"
                              color="neutral-darken-4"
                              @click="isActive.value = false"
                            ></v-btn>
                            <v-btn
                              variant="outlined"
                              text="不同意"
                              color="primary"
                            ></v-btn>
                            <v-btn
                              variant="flat"
                              text="同意"
                              color="primary"
                            ></v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 邀請樣式end -->
              <!-- 捲軸樣式start -->
              <layoutCard title="捲軸樣式">
                <layoutCardItem :height="'20px'">
                  <template #label> Type : Medium Scroll </template>
                  <template #content>
                    <scrollDialogs />
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'">
                  <template #label> Type : Large Scroll </template>
                  <template #content>
                    <largeScrollDialogs />
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 捲軸樣式end -->
            </v-container>
          </div>
        </v-card></v-col
      >
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                擴展面板（Expansion panels）
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <layoutCard title="圖標更換">
                <layoutCardItem style="width: 100%">
                  <template #label> </template>
                  <template #content>
                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          collapse-icon="mdi-minus"
                          expand-icon="mdi-plus"
                        >
                          Title
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                          Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.Let Google help apps determine
                          location. This means sending anonymous location data
                          to Google, even when no apps are running.Let Google
                          help apps determine location. This means sending
                          anonymous location data to Google, even when no apps
                          are running.Let Google help apps
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title>
                          Title
                          <template v-slot:actions="{ expanded }">
                            <v-icon
                              :color="!expanded ? 'teal' : ''"
                              :icon="expanded ? 'mdi-pencil' : 'mdi-check'"
                            ></v-icon>
                          </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                          Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.Let Google help apps determine
                          location. This means sending anonymous location data
                          to Google, even when no apps are running.Let Google
                          help apps determine location. This means sending
                          anonymous location data to Google, even when no apps
                          are running.Let Google help apps
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title disable-icon-rotate>
                          Title
                          <template v-slot:actions>
                            <v-icon color="error" icon="mdi-alert-circle">
                            </v-icon>
                          </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                          Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.Let Google help apps determine
                          location. This means sending anonymous location data
                          to Google, even when no apps are running.Let Google
                          help apps determine location. This means sending
                          anonymous location data to Google, even when no apps
                          are running.Let Google help apps
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="面板樣式" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label> Sate : Default </template>
                  <template #content>
                    <v-expansion-panels>
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="  Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.Let Google help apps determine
                          location. This means sending anonymous location data
                          to Google, even when no apps are running.Let Google
                          help apps determine location. This means sending
                          anonymous location data to Google, even when no apps
                          are running.Let Google help apps"
                        title="Title"
                      ></v-expansion-panel>
                    </v-expansion-panels>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Accordion </template>
                  <template #content>
                    <v-expansion-panels variant="accordion">
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="  Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.Let Google help apps determine
                          location. This means sending anonymous location data
                          to Google, even when no apps are running.Let Google
                          help apps determine location. This means sending
                          anonymous location data to Google, even when no apps
                          are running.Let Google help apps"
                        title="Title"
                      ></v-expansion-panel>
                    </v-expansion-panels>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Inset </template>
                  <template #content>
                    <v-expansion-panels class="my-4" variant="inset">
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="  Let Google help apps determine location. This means
                          sending anonymous location data to Google, even when
                          no apps are running.Let Google help apps determine
                          location. This means sending anonymous location data
                          to Google, even when no apps are running.Let Google
                          help apps determine location. This means sending
                          anonymous location data to Google, even when no apps
                          are running.Let Google help apps"
                        title="Title"
                      ></v-expansion-panel>
                    </v-expansion-panels>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Popout</template>
                  <template #content>
                    <v-expansion-panels class="my-4" variant="popout">
                      <v-expansion-panel
                        v-for="i in 3"
                        :key="i"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        title="Title"
                      ></v-expansion-panel>
                    </v-expansion-panels>
                  </template>
                </layoutCardItem>
              </layoutCard>
            </v-container>
          </div> </v-card
      ></v-col>
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                提示(Tooltips)
              </h4>
              <v-divider class="py-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <layoutCard title=" 提示(Tooltips)">
                <layoutCardItem :height="'20px'" :width="'200px'">
                  <template #label>Direction: Left ⭠</template>
                  <template #content>
                    <v-btn color="primary">
                      start
                      <v-tooltip activator="parent" location="start"
                        >prompt text</v-tooltip
                      >
                    </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'200px'">
                  <template #label>Direction: Right ⭢ </template>
                  <template #content>
                    <v-btn color="primary">
                      end
                      <v-tooltip activator="parent" location="end"
                        >prompt text</v-tooltip
                      >
                    </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'200px'">
                  <template #label>Direction: Top⭡</template>
                  <template #content>
                    <v-btn color="primary">
                      top
                      <v-tooltip activator="parent" location="top"
                        >prompt text</v-tooltip
                      >
                    </v-btn>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'200px'">
                  <template #label>Direction: Bottom ⭣</template>
                  <template #content>
                    <v-btn color="primary">
                      bottom
                      <v-tooltip activator="parent" location="bottom"
                        >prompt text</v-tooltip
                      >
                    </v-btn>
                  </template>
                </layoutCardItem>
              </layoutCard>
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
import dialogs from "@/components/containment/dialogs.vue";
import scrollDialogs from "@/components/containment/scrollDialogs.vue";
import largeScrollDialogs from "@/components/containment/largeScrollDialogs.vue";
import layoutCard from "@/components/layoutComponent/layoutCard.vue";
import layoutCardItem from "@/components/layoutComponent/layoutCard_item.vue";

export default {
  components: {
    card,
    dialogs,
    scrollDialogs,
    largeScrollDialogs,
    layoutCard,
    layoutCardItem,
  },
};
</script>

<style></style>
