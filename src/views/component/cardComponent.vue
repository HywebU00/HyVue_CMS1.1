<template>
  <v-container class="container page cardPage">
    <v-breadcrumbs :items="['首頁', '節點', '節點']">
      <template v-slot:prepend>
        <span
          class="material-symbols-rounded text-neutral-darken-5 icon"
          size="small"
        >
          home
        </span>
      </template>
    </v-breadcrumbs>

    <v-divider class="mb-3"></v-divider>
    <h2 class="title">卡片（Cards）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <!-- 卡片列start -->
    <v-card class="mb-5">
      <div>
        <v-container class="container">
          <!-- 標籤列 start -->
          <v-row>
            <v-col cols="12" class="py-0"
              ><div>
                <v-chip-group class="chipGroup" v-model="selection">
                  <v-chip v-for="item in 6" :key="item" link label>
                    標籤
                  </v-chip>
                </v-chip-group>
              </div>
              <v-divider class="mb-0"></v-divider>
            </v-col>
            <v-col class="pt-0 justify-end d-flex" cols="12">
              <v-btn variant="flat" class="px-3" color="primary " rounded="def">
                <v-btn-prepend class="mr-1 d-flex align-center">
                  <span class="material-symbols-outlined"> add </span>
                </v-btn-prepend>
                新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="albumCardList mt-0">
            <v-col class="cardGrp mx-auto">
              <div class="">
                <card v-for="item in 8" :key="item" variant="elevated" />
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!-- Pagination start -->
        <div class="text-center mt-4 pb-5 paginationText">
          <div class="d-flex justify-center align-center">
            共 <span class="text-primary">308</span> 筆資料，第
            <span class="text-primary">1/18</span>
            頁，每頁顯示
            <div class="mx-2">
              <v-text-field
                variant="outlined"
                density="comfortable"
                type="number"
                width="55px"
                hide-details
                value="1"
                single-line
              ></v-text-field>
            </div>
            <span>筆</span>
            <v-btn class="ml-2" color="secondary-lighten-1" elevation="0"
              >確定</v-btn
            >
          </div>
          <div class="mt-4">
            <div class="pagination d-flex align-center justify-center">
              <v-btn
                rounded="sm"
                class="btn"
                variant="text"
                color="neutral-darken-5"
              >
                <span class="material-symbols-rounded"> first_page </span>
              </v-btn>
              <v-pagination
                v-model="page"
                :length="15"
                total-visible="5"
                rounded="sm"
                active-color="primary"
                color="neutral-darken-5"
              />
              <v-btn
                rounded="sm"
                class="btn"
                variant="text"
                color="neutral-darken-5"
              >
                <span class="material-symbols-rounded"> last_page </span>
              </v-btn>
            </div>
          </div>
        </div>
        <!-- Pagination end -->
      </div>
    </v-card>
    <!-- 卡片列end -->
    <v-divider class="border-opacity-100 my-8" color="#ccc">分隔線</v-divider>

    <!-- 卡片列表 start -->
    <v-card class="mb-5">
      <div>
        <v-container class="container">
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
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col class="pb-0 justify-end d-flex" cols="12">
              <v-btn variant="flat" color="primary " prepend-icon="mdi-plus"
                >新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="albumCardList">
            <v-col class="cardGrp mx-auto listStyle">
              <div class=" ">
                <card
                  type="list"
                  v-for="item in 8"
                  :key="item"
                  variant="elevated"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!-- Pagination start -->
        <div class="text-center mt-4 pb-5 paginationText">
          <div class="d-flex justify-center align-center">
            共 <span class="text-primary">308</span> 筆資料，第
            <span class="text-primary">1/18</span>
            頁，每頁顯示
            <div class="mx-2">
              <v-text-field
                variant="outlined"
                density="comfortable"
                type="number"
                width="55px"
                hide-details
                value="1"
                single-line
              ></v-text-field>
            </div>
            <span>筆</span>
            <v-btn class="ml-2" color="secondary-lighten-1" elevation="0"
              >確定</v-btn
            >
          </div>
          <div class="mt-4">
            <div class="pagination d-flex align-center justify-center">
              <v-btn
                rounded="sm"
                class="btn"
                variant="text"
                color="neutral-darken-5"
              >
                <span class="material-symbols-rounded"> first_page </span>
              </v-btn>
              <v-pagination
                v-model="page"
                :length="15"
                total-visible="5"
                rounded="sm"
                active-color="primary"
                color="neutral-darken-5"
              />
              <v-btn
                rounded="sm"
                class="btn"
                variant="text"
                color="neutral-darken-5"
              >
                <span class="material-symbols-rounded"> last_page </span>
              </v-btn>
            </div>
          </div>
        </div>

        <!-- Pagination end -->
      </div>
    </v-card>
    <!-- 卡片列表 end -->
    <v-card class="mb-5">
      <div class="">
        <v-row class="albumCardList mt-0">
          <v-col class="cardGrp mx-auto">
            <div class="">
              <v-card
                class="card default"
                variant="elevated"
                v-for="item in 8"
                :key="item"
              >
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
                          <v-card-title>資料標題資料標題</v-card-title>
                          <v-card-subtitle>負責人/科別次標題</v-card-subtitle>
                        </div>
                      </div>
                    </v-card-item>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import card from "@/components/card.vue";
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    //table data

    listStyle: false,

    selected: [],
  }),

  methods: {
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    open() {
      this.panel = 1;
    },
    removeIndexBg() {
      const hasImg = document
        .querySelector(".content")
        .classList.contains("mpImg");
      if (hasImg) {
        document.querySelector(".content").classList.remove("mpImg");
      } else {
        return;
      }
    },
  },
  components: {
    card,
  },
};
</script>
