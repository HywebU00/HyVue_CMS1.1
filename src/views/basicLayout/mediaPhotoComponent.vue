<template>
  <v-container class="container page mediaPhoto">
    <v-breadcrumbs :items="['首頁', '節點', '節點']">
      <template v-slot:prepend>
        <span class="material-symbols-rounded text-neutral30 icon" size="small">
          home
        </span>
      </template>
    </v-breadcrumbs>
    <v-divider class="mb-3"></v-divider>
    <h2 class="title">媒體照片 (MediaPhoto)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row no-gutters>
      <v-col cols="12">
        <!-- tablet 卡片列 start -->
        <v-card class="mb-5">
          <div class="">
            <v-container class="container">
              <!-- 標籤列 start -->
              <v-row class="">
                <v-col cols="12" class="pb-0"
                  ><div>
                    <v-chip-group class="chipGroup" v-model="selection">
                      <v-chip v-for="item in 6" :key="item" link label>
                        標籤
                      </v-chip>
                    </v-chip-group>
                  </div>
                  <v-divider class=""></v-divider>
                </v-col>
                <v-col class="btnList" cols="12">
                  <v-btn variant="flat" class="px-3" color="primary ">
                    <v-btn-prepend class="mr-1 d-flex align-center">
                      <span class="material-symbols-outlined"> add </span>
                    </v-btn-prepend>
                    新增</v-btn
                  >
                </v-col>
                <v-divider class="mx-3 mb-3"></v-divider>
              </v-row>
              <!-- 標籤列 end -->
              <v-row no-gutters>
                <v-col class="functionList" cols="12" md="3">
                  <h4 class="text-h4 mt-3 ml-1 mb-8 font-weight-bold">
                    資料夾分類
                  </h4>
                  <div class="px-2">
                    <v-btn class="my-3 btn" size="small" color="primary" block>
                      展開所有分類
                    </v-btn>
                  </div>
                  <div class="mb-6 treeBox px-2">
                    <ul class="treeviewBlock">
                      <tree-item class="item" :model="treeData"></tree-item>
                      <tree-item class="item" :model="treeData2"></tree-item>
                      <tree-item class="item" :model="treeData3"></tree-item>
                    </ul>
                  </div>
                  <!-- 手風琴元件 start -->

                  <!-- 手風琴元件 end -->
                  <h4 class="text-h4 mt-3 ml-1 mb-8 font-weight-bold">
                    分類標籤
                  </h4>
                  <v-slide-group show-arrows class="sliderGrp">
                    <v-slide-group-item v-for="n in 8" :key="n">
                      <v-chip label variant="outlined" link class="mx-1">
                        標籤
                      </v-chip>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-col>
                <v-col cols="12" md="9">
                  <!-- 卡片列表 start -->
                  <v-container class="container px-0">
                    <v-row class="pa-0 d-flex">
                      <v-col cols="4" v-for="i in 5" :key="i"
                        ><v-card class="card" variant="elevated">
                          <div class="cardContainer">
                            <v-checkbox
                              color="primary70"
                              label="cardCheckbox"
                              class="cardCheckbox"
                              hide-details="auto"
                            >
                            </v-checkbox>
                            <v-img
                              src="~@/assets/demo/hyBg_Image.jpg"
                              cover
                            ></v-img>
                            <div class="info">
                              <v-card-item>
                                <div class="d-flex">
                                  <v-avatar
                                    image="@/assets/demo/account.jpg"
                                    rounded="full"
                                  ></v-avatar>
                                  <div class="titleText">
                                    <v-card-title>資料標題</v-card-title>
                                    <v-card-subtitle
                                      >負責人/科別</v-card-subtitle
                                    >
                                  </div>
                                </div>
                              </v-card-item>
                            </div>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                  <!-- 卡片列表 end -->
                </v-col>
              </v-row>
              <!-- tab end -->
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
                <v-btn
                  class="ml-2"
                  rounded="sm"
                  color="secondary60"
                  elevation="0"
                  >確定</v-btn
                >
              </div>
              <div class="mt-4">
                <div class="pagination d-flex align-center justify-center">
                  <v-btn
                    rounded="sm"
                    class="btn"
                    variant="text"
                    color="neutral30"
                  >
                    <span class="material-symbols-rounded"> first_page </span>
                  </v-btn>
                  <v-pagination
                    v-model="page"
                    :length="15"
                    total-visible="5"
                    rounded="sm"
                    active-color="primary"
                    color="neutral30"
                    size="small"
                  />
                  <v-btn
                    rounded="sm"
                    class="btn"
                    variant="text"
                    color="neutral30"
                  >
                    <span class="material-symbols-rounded"> last_page </span>
                  </v-btn>
                </div>
              </div>
            </div>
            <!-- Pagination end -->
          </div>
        </v-card>
        <!-- tablet 卡片列 end -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TreeItem from "@/components/TreeItem.vue";
const treeData = {
  name: "分類Ａ",
  children: [
    { name: "分類Ａ-1" },
    { name: "分類Ａ-2" },
    {
      name: "分類Ａ-3",
      children: [
        {
          name: "分類Ａ-3.1",
        },
        { name: "分類Ａ-3.2" },
        { name: "分類Ａ-3.3" },
        {
          name: "分類Ａ-3.4",
        },
      ],
    },
  ],
};
const treeData2 = {
  name: "分類B",
  children: [
    { name: "分類B-1" },
    { name: "分類B-2" },
    {
      name: "分類B-3",
      children: [
        {
          name: "分類B-3.1",
        },
        { name: "分類B-3.2" },
        { name: "分類B-3.3" },
        {
          name: "分類B-3.4",
        },
      ],
    },
  ],
};
const treeData3 = {
  name: "分類C",
  children: [
    { name: "分類C-1" },
    { name: "分類C-2" },
    {
      name: "分類C-3",
      children: [
        {
          name: "分類C-3.1",
        },
        { name: "分類C-3.2" },
        { name: "分類C-3.3" },
        {
          name: "分類C-3.4",
        },
      ],
    },
  ],
};
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    selectedDate: null,
    selection: 1,
    selected: [],
    data: [
      {
        id: "1",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "2",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "3",
        top: false,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
    ],
    //table serve
    panelOpen: false,
    panel: [],
    treeData,
    treeData2,
    treeData3,
  }),
  methods: {
    all() {
      this.panelOpen = !this.panelOpen;
      if (this.panelOpen) {
        this.panel = ["item1", "item2", "item3"];
      } else {
        this.panel = [""];
      }
    },
  },
  components: {
    TreeItem,
  },
};
</script>
