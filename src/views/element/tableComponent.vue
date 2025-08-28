<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']">
      <template v-slot:prepend>
        <span class="material-symbols-rounded text-neutral30 icon" size="small">
          home
        </span>
      </template>
    </v-breadcrumbs>

    <v-divider class="mb-3"></v-divider>
    <h2 class="title">表格（Tables）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <!-- tablet 卡片列 start -->
    <v-card class="mb-5">
      <div class="">
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
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col class="pb-0 justify-space-between d-flex" cols="12">
              <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="px-3 d-flex align-center"
                    variant="flat"
                    rounded="def"
                    color="primary "
                    v-bind="props"
                  >
                    <div class="d-flex align-center">
                      <span class="material-symbols-outlined"> more_vert </span>
                    </div>
                    批次處理
                  </v-btn>
                </template>
                <v-card class="pa-2">
                  <v-btn
                    variant="outlined"
                    class="my-1"
                    block
                    color="primary"
                    prepend-icon="mdi-delete"
                    >刪除</v-btn
                  >
                  <v-btn
                    variant="outlined"
                    class="my-1"
                    block
                    prepend-icon="mdi-pencil"
                    color="primary"
                    >編輯</v-btn
                  >
                  <v-btn
                    variant="outlined"
                    class="my-1"
                    block
                    color="primary"
                    prepend-icon="mdi-cog"
                    >設定</v-btn
                  >
                </v-card>
              </v-menu>
              <v-btn variant="flat" class="px-3" color="primary " rounded="def">
                <div class="mr-1 d-flex align-center">
                  <span class="material-symbols-outlined"> add </span>
                </div>
                新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="mt-0">
            <v-col>
              <v-table>
                <thead class="bg-thead">
                  <tr>
                    <th class="text-center" style="width: 100px"></th>
                    <th class="text-center" style="width: 100px">序號</th>
                    <th class="text-center">置頂</th>
                    <th class="text-center" style="width: 600px">標題</th>
                    <th class="text-center" style="width: 100px">資料分類</th>
                    <th class="text-center">上線日期</th>
                    <th class="text-center">下線日期</th>
                    <th class="text-center" style="width: 100px">語系</th>
                    <th class="text-center">狀態</th>
                    <th class="text-center" style="width: 130px">動作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.name">
                    <td class="text-center">
                      <div
                        class="d-flex justify-center"
                        style="min-width: 40px"
                      >
                        <v-checkbox
                          value="1"
                          label=""
                          hide-details=""
                          type="checkbox"
                        ></v-checkbox>
                      </div>
                    </td>
                    <td class="text-center">{{ item.id }}</td>
                    <td>
                      <template v-if="item.top == true">
                        <div class="d-flex justify-center">
                          <v-chip
                            variant="outlined"
                            class="chip pa-1"
                            label
                            color="primary"
                            >置頂</v-chip
                          >
                        </div>
                      </template>
                    </td>
                    <td class="text-center" style="min-width: 200px">
                      {{ item.title }}
                    </td>
                    <td>{{ item.class }}</td>
                    <td>{{ item.dateStart }}</td>
                    <td>{{ item.dateEnd }}</td>
                    <td class="pa-2 text-center">{{ item.lang }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <div class="btnGroup d-flex justify-space-between">
                        <v-btn class="btn" color="primary" variant="text">
                          <template #prepend>
                            <span class="material-symbols-outlined icon">
                              delete
                            </span>
                          </template>
                        </v-btn>
                        <v-btn class="btn" color="primary" variant="text">
                          <template #prepend>
                            <span class="material-symbols-outlined icon">
                              edit
                            </span>
                          </template>
                        </v-btn>
                      </div>
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
                type="number"
                width="55px"
                hide-details
                value="1"
                density="comfortable"
                single-line
              ></v-text-field>
            </div>
            <span>筆</span>
            <v-btn class="ml-2" rounded="sm" color="secondary60" elevation="0"
              >確定</v-btn
            >
          </div>
          <div class="mt-4">
            <div class="pagination d-flex align-center justify-center">
              <v-btn rounded="sm" class="btn" variant="text" color="neutral30">
                <span class="material-symbols-rounded"> first_page </span>
              </v-btn>
              <v-pagination
                v-model="page"
                :length="15"
                total-visible="5"
                rounded="sm"
                active-color="primary"
                color="neutral30"
              />
              <v-btn rounded="sm" class="btn" variant="text" color="neutral30">
                <span class="material-symbols-rounded"> last_page </span>
              </v-btn>
            </div>
          </div>
        </div>
        <!-- Pagination end -->
      </div>
    </v-card>
    <!-- tablet 卡片列 end -->
    <v-divider class="border-opacity-100 my-8" color="#ccc">分隔線</v-divider>
    <!-- tablet 卡片列 start -->
    <v-card class="mb-5">
      <div class="">
        <v-container class="container">
          <!-- 標籤列 start -->
          <v-row class="">
            <v-col cols="12" class="py-0"
              ><div>
                <v-chip-group class="chipGroup" v-model="selection">
                  <v-chip v-for="item in 6" :key="item" link label>
                    標籤
                  </v-chip>
                </v-chip-group>
              </div>
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col class="pb-0 justify-end d-flex" cols="12">
              <v-btn variant="flat" class="px-3" color="primary " rounded="def">
                <div class="mr-1 d-flex align-center">
                  <span class="material-symbols-outlined"> add </span>
                </div>
                新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="mt-0">
            <v-col>
              <v-table>
                <thead class="bg-thead">
                  <tr>
                    <th class="text-center" style="width: 100px"></th>
                    <th class="text-center" style="width: 100px">序號</th>
                    <th class="text-center">圖片</th>
                    <th class="text-center" style="min-width: 400px">標題</th>
                    <th class="text-center">資料分類</th>
                    <th class="text-center">狀態</th>
                    <th class="text-center" style="width: 100px">動作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.name">
                    <td>
                      <div
                        class="d-flex justify-center"
                        style="min-width: 40px"
                      >
                        <v-checkbox
                          value="1"
                          label=""
                          hide-details=""
                          type="checkbox"
                        ></v-checkbox>
                      </div>
                    </td>
                    <td class="text-center">{{ item.id }}</td>
                    <td>
                      <div class="d-flex justify-center pa-2">
                        <v-img
                          :width="150"
                          aspect-ratio="1/1"
                          cover
                          src="~@/assets/demo/hyBg_Image.jpg"
                        ></v-img>
                      </div>
                    </td>
                    <td class="text-center" style="min-width: 200px">
                      {{ item.title }}
                    </td>
                    <td class="text-center">{{ item.class }}</td>
                    <td class="text-center">{{ item.status }}</td>
                    <td>
                      <v-menu transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                          <div class="d-flex justify-center">
                            <v-btn
                              class="pa-0"
                              rounded="def"
                              size="small"
                              color="primary"
                              variant="outlined"
                              v-bind="props"
                            >
                              <span
                                class="material-symbols-outlined text-center"
                              >
                                keyboard_arrow_down
                              </span>
                            </v-btn>
                          </div>
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
                density="comfortable"
                type="number"
                width="55px"
                hide-details
                value="1"
                single-line
              ></v-text-field>
            </div>
            <span>筆</span>
            <v-btn class="ml-2" color="secondary60" elevation="0">確定</v-btn>
          </div>
          <div class="mt-4">
            <div class="pagination d-flex align-center justify-center">
              <v-btn rounded="sm" class="btn" variant="text" color="neutral30">
                <span class="material-symbols-rounded"> first_page </span>
              </v-btn>
              <v-pagination
                v-model="page"
                :length="15"
                total-visible="5"
                rounded="sm"
                active-color="primary"
                color="neutral30"
              />
              <v-btn rounded="sm" class="btn" variant="text" color="neutral30">
                <span class="material-symbols-rounded"> last_page </span>
              </v-btn>
            </div>
          </div>
        </div>
        <!-- Pagination end -->
      </div>
    </v-card>
    <!-- tablet 卡片列 end -->
    <v-divider class="border-opacity-100 my-8" color="#ccc">
      dataTableServer樣式</v-divider
    >
    <!-- tablet 卡片列 start -->
    <v-card class="mb-5">
      <div class="">
        <v-container class="container">
          <!-- 標籤列 start -->
          <v-row class="">
            <v-col cols="12"
              ><div>
                <v-chip-group class="chipGroup" v-model="selection">
                  <v-chip v-for="item in 6" :key="item" link label>
                    標籤
                  </v-chip>
                </v-chip-group>
              </div>
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col class="justify-end d-flex" cols="12">
              <v-btn rounded="def" variant="flat" class="px-3" color="primary ">
                <div class="mr-1 d-flex align-center">
                  <span class="material-symbols-outlined"> add </span>
                </div>
                新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="mt-0">
            <v-col>
              <dataTableServer></dataTableServer>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>

    <!-- tablet 卡片列 end -->
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";
import dataTable from "@/components/dataTable.vue";
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
  }),
  methods: {},
  //table serve
  components: {
    dataTableServer,
    dataTable,
  },
};
</script>
