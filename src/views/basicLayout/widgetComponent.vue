<template>
  <v-container class="container page widgetPage">
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
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2 class="title">特殊範例頁面 - 網站總覽</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col class="px-1" md="4" lg="3" cols="12">
        <v-card class="pa-5">
          <ul class="treeviewBlock">
            <tree-item class="item" :model="treeData"></tree-item>
            <tree-item class="item" :model="treeData2"></tree-item>
          </ul> </v-card
      ></v-col>
      <v-col class="px-1" md="8" lg="9" cols="12">
        <!-- tablet 卡片列 start -->
        <v-card class="mb-5 pa-5">
          <div class="">
            <v-container class="container pa-0">
              <!-- 標籤列 start -->
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-chip-group class="chipGroup" v-model="selection">
                      <v-chip
                        rounded="sm"
                        v-for="item in 6"
                        :key="item"
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
              <v-row class="mt-0">
                <v-col>
                  <v-table>
                    <thead class="bg-thead">
                      <tr>
                        <th class="text-center" style="min-width: 68px"></th>
                        <th class="text-center" style="min-width: 100px">
                          編號
                        </th>
                        <th class="text-center" style="width: 216px">圖片</th>
                        <th class="text-center" style="min-width: 400px">
                          標題
                        </th>
                        <th class="text-center">資料分類</th>
                        <th class="text-center">狀態</th>
                        <th class="text-center" style="width: 100px">動作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in data" :key="item.name">
                        <td class="text-center">
                          <div class="d-flex justify-center">
                            <v-checkbox
                              value="1"
                              label=""
                              hide-details=""
                              type="checkbox"
                              color="primary"
                            ></v-checkbox>
                          </div>
                        </td>
                        <td class="text-center">{{ item.id }}</td>
                        <td class="text-center">
                          <div class="d-flex">
                            <v-img
                              class="ma-3"
                              :width="120"
                              :height="100"
                              aspect-ratio="2/3"
                              cover
                              src="~@/assets/demo/hyBg_Image.jpg"
                            ></v-img>
                          </div>
                        </td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.class }}</td>
                        <td>{{ item.status }}</td>
                        <td>
                          <v-menu transition="slide-y-transition">
                            <template v-slot:activator="{ props }">
                              <v-btn
                                class="ma-2 actionBtn"
                                v-bind="props"
                                size="x-small"
                                variant="outlined"
                                color="primary"
                              >
                                <span class="material-symbols-rounded">
                                  keyboard_arrow_down
                                </span>
                              </v-btn>
                            </template>
                            <v-card class="pa-2">
                              <v-btn
                                size="small"
                                variant="outlined"
                                class="my-1"
                                block
                                color="primary"
                                prepend-icon="mdi-delete"
                                >刪除</v-btn
                              >
                              <v-btn
                                size="small"
                                variant="outlined"
                                class="my-1"
                                block
                                prepend-icon="mdi-pencil"
                                color="primary"
                                >編輯</v-btn
                              >
                            </v-card>
                          </v-menu>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
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
                    density="compact"
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
                  color="secondary-lighten-1"
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
                    size="small"
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
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    //table data
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
    treeData,
    treeData2,
    //table serve
  }),
  methods: {},
  components: {
    TreeItem,
  },
};
</script>
