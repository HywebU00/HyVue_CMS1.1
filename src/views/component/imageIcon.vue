<template>
  <v-container class="container">
    <h2>图像和图标组件(Images & icons)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                头像 （Avatars）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="">
                  <v-badge dot color="error">
                    <v-avatar
                      image="@/assets/images/account.jpg"
                      rounded="0"
                    ></v-avatar>
                  </v-badge>
                </div>
                <div class="mt-2">
                  <v-badge dot color="error">
                    <v-avatar color="surface-variant"></v-avatar>
                  </v-badge>
                </div>
                <div class="mt-2">
                  <v-badge :content="34" color="error">
                    <v-avatar color="surface-variant"></v-avatar>
                  </v-badge>
                </div>
                <div class="mt-2">
                  <v-avatar color="red">
                    <span class="text-h5">CJ</span>
                  </v-avatar>
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
              <h4 class="text-h6 text-primary font-weight-bold">
                图标（Icons）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <v-icon>
                  <img src="@/assets/images/account.jpg" />
                </v-icon>
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
                图像 （Images）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="">
                  <v-img
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
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
export default {};
</script>

<style></style>
