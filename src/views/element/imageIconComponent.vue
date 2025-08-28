<template>
  <v-container class="container">
    <h2>圖像和圖標組件(Images & icons)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 font-weight-bold">頭像 （Avatars）</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="樣式" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Type:Square</template>
                  <template #content>
                    <v-badge dot color="error" offset-y="38">
                      <v-avatar rounded="sm" class="bg-neutral30">
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Type:Circle</template>
                  <template #content>
                    <v-badge dot color="error" offset-y="36">
                      <v-avatar class="bg-neutral30" rounded="full">
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="尺寸" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Size:Small</template>
                  <template #content>
                    <v-badge dot color="error" offset-y="26">
                      <v-avatar
                        size="small"
                        class="bg-neutral30"
                        rounded="full"
                      >
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Size:Medium</template>
                  <template #content>
                    <v-badge
                      dot
                      color="error"
                      offset-y="38"
                      rounded="full"
                      width="10"
                      height="10"
                    >
                      <v-avatar class="bg-neutral30" rounded="full">
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Size:Large</template>
                  <template #content>
                    <v-badge
                      dot
                      color="error"
                      offset-y="48"
                      width="12"
                      height="12"
                      rounded="full"
                    >
                      <v-avatar
                        size="large"
                        class="bg-neutral30"
                        rounded="full"
                      >
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="類型" flexWrap="wrap">
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Avatar:Icon</template>
                  <template #content>
                    <v-badge dot color="error" offset-y="32">
                      <v-avatar rounded="full" class="bg-neutral30">
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Avatar:Text</template>
                  <template #content>
                    <v-badge dot color="error" offset-y="32">
                      <v-avatar color="primary" rounded="full">
                        <span class="text-h5">CJ</span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'40px'" style="width: 150px">
                  <template #label>Avatar:Pic</template>
                  <template #content>
                    <v-badge dot color="error" offset-y="32">
                      <v-avatar
                        image="@/assets/demo/account.jpg"
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
                    <v-badge dot color="error" offset-y="32">
                      <v-avatar class="bg-neutral30" rounded="full">
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
                    </v-badge>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'34px'" style="width: 150px">
                  <template #label>Show Number:True</template>
                  <template #content>
                    <v-badge :content="34" color="error">
                      <v-avatar class="bg-neutral30">
                        <span class="material-icons-outlined"> person </span>
                      </v-avatar>
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
              <h4 class="text-h4 font-weight-bold mb-2">圖標（Icons）</h4>
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
              <h4 class="text-h4 font-weight-bold mb-2">圖像 （Images）</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="圖片尺寸" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>1 : 1</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        :width="300"
                        :aspect-ratio="1 / 1"
                        cover
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>3 : 2</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        :width="300"
                        :aspect-ratio="3 / 2"
                        cover
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>4 : 3</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        :width="300"
                        :aspect-ratio="4 / 3"
                        cover
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>3 : 1</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        :width="300"
                        :aspect-ratio="3 / 1"
                        cover
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="圖像滿版" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>Cover: Default</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        :width="300"
                        :aspect-ratio="3 / 2"
                        class="bg-neutral60"
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>Cover: Cover</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        :width="300"
                        :aspect-ratio="3 / 2"
                        cover
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="覆蓋遮層" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>Overlay: Default</template>
                  <template #content>
                    <div class="">
                      <v-img
                        :width="300"
                        rounded="md"
                        cover
                        :aspect-ratio="3 / 2"
                        class="bg-neutral60"
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #label>Overlay: Gradient</template>
                  <template #content>
                    <div class="">
                      <v-img
                        rounded="md"
                        gradient="rgba(11,11,11,.3)"
                        :width="300"
                        :aspect-ratio="3 / 2"
                        cover
                        src="@/assets/demo/hyBg_Image.jpg"
                      ></v-img>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="無法顯示圖片" flexWrap="wrap">
                <layoutCardItem :height="'20px'" style="width: 300px">
                  <template #content>
                    <div class="">
                      <v-img
                        :width="300"
                        rounded="md"
                        cover
                        :aspect-ratio="3 / 2"
                        class="emptyImg"
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
