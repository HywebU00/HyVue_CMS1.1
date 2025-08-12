<template>
  <v-card class="card" :class="type" :variant="variant">
    <div class="cardContainer">
      <v-checkbox
        color="primary-lighten-2"
        label="cardCheckbox"
        class="cardCheckbox"
        hide-details="auto"
      >
      </v-checkbox>
      <v-img src="~@/assets/demo/hyBg_Image.jpg" cover></v-img>
      <div class="info">
        <v-card-item>
          <div class="d-flex">
            <v-avatar
              image="@/assets/demo/account.jpg"
              rounded="full"
            ></v-avatar>
            <div class="titleText">
              <v-card-title>資料標題</v-card-title>
              <v-card-subtitle>負責人/科別</v-card-subtitle>
            </div>
          </div>
          <p class="line-clamp-2">
            資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事
            資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事資料內容記事
          </p>
        </v-card-item>
        <v-card-text>
          <v-row class="iconList">
            <v-col>
              <div class="icon">
                <span class="material-icons-outlined"> access_time </span>
              </div>
              <span>112/03/27</span></v-col
            >
            <v-col class="d-flex justify-end">
              <div class="icon">
                <span class="material-icons-outlined"> visibility </span>
              </div>
              <span>112</span></v-col
            >
          </v-row>
          <v-row class="btn">
            <v-col>
              <v-btn color="primary" block> more </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "card",
  props: {
    variant: {
      type: String,
      default: "elevated",
    },
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style></style>
