<template>
  <v-container class="container">
    <h2>圖像和圖標組件(Images & icons)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                頭像 （Avatars）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="樣式" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Type:Square</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        image="@/assets/images/account.jpg"
                        rounded="0"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Type:Circle</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        image="@/assets/images/account.jpg"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="尺寸" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Size:Small</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        size="32"
                        color="surface-variant"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Size:Medium</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        size="48"
                        color="surface-variant"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Size:Large</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        size="60"
                        color="surface-variant"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="類型" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Avatar:Icon</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        color="surface-variant"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Avatar:Text</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar color="surface-variant" rounded="full">
                        <span class="text-h5">CJ</span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Avatar:Pic</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        image="@/assets/images/account.jpg"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="提示" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Show State:True</template>
                  <template #content>
                    <v-badge dot color="error">
                      <v-avatar
                        color="surface-variant"
                        rounded="full"
                      ></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'34px'" style="width: 150px">
                  <template #label>Show Number:True</template>
                  <template #content>
                    <v-badge :content="34" color="error">
                      <v-avatar color="surface-variant"></v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
              </layoutCard>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 text-primary font-weight-bold mb-2">
                圖標（Icons）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="顏色" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>info</template>
                  <template #content>
                    <v-icon
                      color="info"
                      size="30"
                      icon="mdi-information"
                    ></v-icon>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>success</template>
                  <template #content>
                    <v-icon
                      color="success"
                      size="30"
                      icon="mdi-information"
                    ></v-icon>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>warning</template>
                  <template #content>
                    <v-icon
                      color="warning"
                      size="30"
                      icon="mdi-information"
                    ></v-icon>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>error</template>
                  <template #content>
                    <v-icon
                      color="error"
                      size="30"
                      icon="mdi-information"
                    ></v-icon>
                  </template>
                </layoutCardItem>
              </layoutCard>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 text-primary font-weight-bold mb-2">
                圖像 （Images）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="圖片尺寸" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>1 : 1</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="130"
                        :aspect-ratio="1 / 1"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>3 : 2</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        :aspect-ratio="3 / 2"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>4 : 3</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        :aspect-ratio="4 / 3"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>4 : 3</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        :aspect-ratio="3 / 1"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="圖像滿版" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>Cover: Default</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        :aspect-ratio="3 / 2"
                        class="bg-neutral-darken-3"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>Cover: Cover</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        :aspect-ratio="3 / 2"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="覆蓋遮層" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>Overlay: Default</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        cover
                        :aspect-ratio="3 / 2"
                        class="bg-neutral-darken-3"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #label>Overlay: Gradient</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        :aspect-ratio="3 / 2"
                        cover
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="無法顯示圖片" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 220px">
                  <template #content>
                    <div class="">
                      <v-img
                        :width="200"
                        cover
                        :aspect-ratio="3 / 2"
                        class="bg-neutral-darken-3"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <div class="">
                <div class="">
                  <v-img
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    src="https://cdn.vuetifyjAvatars.com/images/parallax/material.jpg"
                  ></v-img>
                </div>
              </div>
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
