<template>
  <v-card class="albumCard">
    <div class="cardContainer">
      <v-img src="~@/assets/demo/01.jpg" cover></v-img>
      <div class="info">
        <v-card-item>
          <v-card-title>資料標題</v-card-title>
          <v-card-subtitle>負責人/科別</v-card-subtitle>
          <p>資料內容記事資料內容記事資料內容記事...</p>
        </v-card-item>
        <v-card-text>
          <v-row class="iconList">
            <v-col>
              <v-icon icon="mdi:mdi-clock" />
              <span>112/03/27</span></v-col
            >
            <v-col class="d-flex justify-end">
              <v-icon icon="mdi:mdi-eye" />
              <span>112</span></v-col
            >
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" color="primary" block> more </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
