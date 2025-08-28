<template>
  <v-container class="container page applyPage">
    <v-breadcrumbs :items="['首頁', '節點', '節點']">
      <template v-slot:prepend>
        <span class="material-symbols-rounded text-neutral30 icon" size="small">
          home
        </span>
      </template>
    </v-breadcrumbs>
    <v-divider class="mb-3"></v-divider>
    <h2 class="title">新增申請</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row class="mx-1">
      <v-col class="searchGrp">
        <v-form class="searchList">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title @click.stop="panelsHandle" hide-actions>
                <v-row class="formGrid">
                  <v-col class="d-flex formGrp">
                    <label class="text-primary" for="">年度 :</label>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['1990', '1991', '1992']"
                    >
                      <template #append>
                        <span>~</span>
                      </template>
                    </v-autocomplete>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['1990', '1991', '1992']"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col class="d-flex formGrp">
                    <label class="text-primary" for="">控管編號 :</label>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['1990', '1991', '1992']"
                    >
                      <template #append>
                        <span>~</span>
                      </template>
                    </v-autocomplete>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['1990', '1991', '1992']"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col
                    class="d-flex justify-lg-end justify-center align-center btnList"
                  >
                    <v-btn
                      variant="tonal"
                      color="primary"
                      class="searchMoreBtn mr-2"
                      @click.stop="this.panel = 0"
                      >進階搜尋</v-btn
                    >
                    <v-btn color="primary" class="submit">查詢</v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row class="formGrid">
                  <!-- 類別start -->
                  <v-col md="6" cols="12" class="d-flex formGrp">
                    <label class="text-primary" for="">類別 :</label>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      :items="['1990', '1991', '1992']"
                    >
                    </v-autocomplete>
                  </v-col>
                  <!-- 類別end -->
                  <!-- 控管編號start -->
                  <v-col md="6" cols="12" class="d-flex formGrp">
                    <label class="text-primary" for="">控管編號 :</label>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      error-messages="錯誤訊息 錯誤訊息"
                      :items="['1990', '1991', '1992']"
                    >
                      <template #append>
                        <span>~</span>
                      </template>
                    </v-autocomplete>
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      error-messages="錯誤訊息 錯誤訊息"
                      density="compact"
                      hide-details="auto"
                      :items="['1990', '1991', '1992']"
                    >
                    </v-autocomplete>
                  </v-col>
                  <!-- 控管編號end -->
                  <!-- 案件狀態start -->
                  <v-col md="6" cols="12" class="d-flex formGrp">
                    <label class="text-primary" for="">控管編號 :</label>
                    <v-row>
                      <v-col class="checkGrp" id="list">
                        <v-checkbox
                          class="text-neutral20"
                          density="compact"
                          hide-details
                          label="繼續追蹤"
                        ></v-checkbox>
                        <v-checkbox
                          density="compact"
                          hide-details
                          class="text-neutral20"
                          label="建議解除列管"
                        ></v-checkbox>
                        <v-checkbox
                          density="compact"
                          class="text-neutral20"
                          hide-details
                          label="解除列管"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                  </v-col>
                  <!-- 案件狀態end -->
                  <!-- 辦理單位start -->
                  <v-col md="6" cols="12" class="d-flex formGrp">
                    <label class="text-primary" for="">辦理單位 :</label>
                    <v-text-field
                      variant="outlined"
                      single-line
                      error-messages=""
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <!-- 辦理單位end -->
                  <!-- 交辦事項start -->
                  <v-col md="6" cols="12" class="d-flex formGrp">
                    <label class="text-primary" for="">交辦事項 :</label>
                    <v-text-field
                      variant="outlined"
                      single-line
                      error-messages=""
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <!-- 交辦事項end -->
                  <!-- 管制代號start -->
                  <v-col md="6" cols="12" class="d-flex formGrp">
                    <label class="text-primary" for="">管制代號 :</label>
                    <v-text-field
                      variant="outlined"
                      single-line
                      error-messages=""
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <!-- 管制代號end -->
                </v-row>
                <v-row>
                  <v-col cols="12" class="pt-0">
                    <div class="d-flex btnList justify-center">
                      <v-btn
                        color="primary"
                        class="searchMoreBtn"
                        variant="tonal"
                        >進階搜尋</v-btn
                      >
                      <v-btn color="primary" class="submit">查詢</v-btn>
                    </div>
                  </v-col>
                  <v-col class="d-flex justify-center">
                    <v-btn
                      class="closeSearchMoreBtn"
                      elevation="0"
                      @click="open"
                    >
                      <span class="material-icons-round"> expand_less </span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <div class="">
        <!-- 搜尋列表 start -->
        <v-form class="formGrid form">
          <v-card class="">
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label for="type" class="text-primary formTitle"
                  >族名
                  <span class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</span
                  ></label
                >
              </v-col>
              <v-col>
                <v-text-field
                  error-messages="錯誤訊息 錯誤訊息"
                  variant="outlined"
                  single-line
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label for="type" class="text-primary formTitle"
                  >族別
                  <span class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</span
                  ></label
                >
              </v-col>
              <v-col>
                <v-autocomplete
                  color="secondary"
                  variant="outlined"
                  error-messages=""
                  single-line
                  hide-details="auto"
                  density="compact"
                  :items="['布農族', '阿美族', '卑南族']"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label for="mail" class="text-primary formTitle"
                  >Email
                  <span class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</span
                  ></label
                >
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  single-line
                  error-messages=""
                  id="mail"
                  hide-details="auto"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto" class="">
                <label for="type" class="text-primary formTitle"
                  >行動電話
                  <span class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</span
                  ></label
                >
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  hide-details="auto"
                  single-line
                  error-messages=""
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label for="list" class="text-primary formTitle"
                  >多選選單
                  <span class="necessary" title="為必填(選)欄位,不能為空白。"
                    >*</span
                  ></label
                >
              </v-col>
              <v-col class="checkGrp py-0 d-flex">
                <v-checkbox
                  v-for="i in 3"
                  :key="i"
                  color="primary"
                  class="text-neutral20"
                  :label="`選項${i}`"
                  hide-details="auto"
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label class="text-primary formTitle" for="">交辦事項 </label>
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  single-line
                  hide-details="auto"
                  error-messages=""
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label class="text-primary formTitle" for="">編號 </label>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field
                  hide-details="auto"
                  variant="outlined"
                  density="compact"
                >
                  <template #append>
                    <span class="text-primary">字</span>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6" md="4" class="d-flex align-end">
                <v-text-field
                  hide-details="auto"
                  variant="outlined"
                  density="compact"
                >
                  <template #prepend>
                    <span class="text-primary">第</span>
                  </template>
                  <template #append>
                    <span class="text-primary">號</span>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto" class="infoTitle">
                <label class="formTitle text-primary" for="">文字輸入 </label>
              </v-col>
              <v-col>
                <v-textarea
                  placeholder="請輸入文字"
                  variant="outlined"
                  error-messages=""
                  hide-details="auto"
                  density="compact"
                  auto-grow
                  rows="6"
                  row-height="30"
                  floating
                  shaped
                  class="mb-2"
                ></v-textarea>
              </v-col>
              <!-- <v-col>
                  <v-textarea
                    variant="outlined"
                    error-messages=""
                    label="請輸入文字"
                    hide-details="auto"
                    density="compact"
                    auto-grow
                    rows="6"
                    row-height="30"
                    shaped
                    class="mb-2"
                  ></v-textarea>
                </v-col> -->
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label class="formTitle text-primary" for="">單選 </label>
              </v-col>
              <v-col>
                <v-radio-group inline h color="secondary" hide-details="auto">
                  <v-radio label="是" value="true"></v-radio>
                  <v-radio label="否" value="false"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label class="formTitle text-primary" for="">住址</label>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="6" md="3">
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      density="compact"
                      hide-details="auto"
                      placeholder="輸入地址"
                      error-messages=""
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-autocomplete
                      variant="outlined"
                      single-line
                      color="secondary"
                      density="compact"
                      placeholder="輸入地址"
                      hide-details="auto"
                      error-messages=""
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      variant="outlined"
                      single-line
                      hide-details="auto"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label class="text-primary formTitle" for=" ">兩欄欄位</label>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      color="secondary"
                      variant="outlined"
                      single-line
                      hide-details="auto"
                      density="compact"
                      placeholder="輸入地址"
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      variant="outlined"
                      single-line
                      color="secondary"
                      hide-details="auto"
                      density="compact"
                      placeholder="輸入地址"
                      error-messages=""
                      :items="['台北市', '新北市', '基隆市']"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- 按鈕列 start -->
            <v-row class="d-flex formGrp">
              <v-col cols="12" md="auto">
                <label class="text-primary formTitle" for="">按鈕欄位</label>
              </v-col>
              <v-col cols="12" md="10">
                <div>
                  <v-btn
                    class="ma-1"
                    elevation="0"
                    type="button"
                    text="車輛繳納燃料費及牌照稅明細表"
                    color="primary"
                    variant="tonal"
                  />
                  <v-btn
                    class="ma-1"
                    elevation="0"
                    type="button"
                    text="車輛繳納保險費明細表"
                    color="primary"
                    variant="tonal"
                  />
                  <v-btn
                    elevation="0"
                    type="button"
                    text="車輛消耗油料暨行駛里程統計表"
                    color="primary"
                    variant="tonal"
                  />
                  <v-btn
                    class="ma-1"
                    elevation="0"
                    type="button"
                    variant="tonal"
                    text="公務汽車加油情形統計表"
                    color="primary"
                  />
                  <v-btn
                    class="ma-1"
                    elevation="0"
                    type="button"
                    variant="tonal"
                    text="公務汽車每公升平均行駛里程數統計表"
                    color="primary"
                  />
                  <v-btn
                    class="ma-1"
                    elevation="0"
                    variant="tonal"
                    type="button"
                    text="車輛加油及里程數紀錄表"
                    color="primary"
                  />
                  <v-btn
                    class="ma-1"
                    elevation="0"
                    type="button"
                    variant="tonal"
                    text="高速公路電子收費表"
                    color="primary"
                  />
                </div>
              </v-col>
            </v-row>
            <!-- 按鈕列 end -->
            <!-- formGrp 資料列表 start -->
            <v-row class="d-flex formGrp infoGrp">
              <v-col cols="12" md="auto">
                <label class="formTitle text-primary" for="">資料欄位</label>
              </v-col>
              <v-col cols="12" md="10" class="">
                112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp infoGrp">
              <v-col cols="12" md="auto">
                <label class="text-primary formTitle" for="">資料欄位</label>
              </v-col>
              <v-col cols="12" md="10">
                112年公務人員特種考試原住民族考試各等別。
              </v-col>
            </v-row>
            <v-row class="d-flex formGrp infoGrp">
              <v-col cols="12" md="auto">
                <label class="formTitle text-primary" for="">資料欄位</label>
              </v-col>
              <v-col cols="12" md="10">
                112年公務人員特種考試原住民族考試各等別。
              </v-col>
            </v-row>
            <!-- formGrp 資料列表 end -->
            <!-- 左右兩欄 start -->
            <v-row class="d-flex formGrp formGrp_2">
              <v-col cols="12" md="6">
                <v-row>
                  <v-col class="bg-thead">
                    <div class="fromGrpTitle">應領數</div>
                  </v-col>
                </v-row>
                <v-row class="d-flex formGrp" v-for="i in 3" :key="i">
                  <v-col cols="12" md="auto">
                    <label for="type " class="text-primary"
                      >欄位一
                      <span
                        class="necessary"
                        title="為必填(選)欄位,不能為空白。"
                        >*</span
                      ></label
                    >
                  </v-col>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      single-line
                      error-messages=""
                      density="compact"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <v-row>
                  <v-col class="bg-thead">
                    <div class="fromGrpTitle">應領數</div>
                  </v-col>
                </v-row>
                <v-row class="d-flex formGrp" v-for="i in 3" :key="i">
                  <v-col cols="12" md="auto" class="">
                    <label for="type " class="text-primary"
                      >欄位一
                      <span
                        class="necessary"
                        title="為必填(選)欄位,不能為空白。"
                        >*</span
                      ></label
                    >
                  </v-col>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      single-line
                      density="compact"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- 左右兩欄 end -->
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn
                  variant="outlined"
                  class="mx-2"
                  color="primary"
                  size="large"
                >
                  <div class="px-2">取消</div>
                </v-btn>
                <v-btn color="primary" class="mx-2" size="large">
                  <div class="px-2">送出</div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
        <!-- 搜尋列表 end -->
      </div>
    </v-row>
  </v-container>
</template>

<script>
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

    //table serve
  }),
  methods: {
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    panelsHandle1() {
      if (this.panel1 == 0) {
        this.panel1 = 1;
      } else {
        this.panel1 = 0;
      }
    },
    open() {
      this.panel = 1;
    },
    open1() {
      this.panel1 = 1;
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
  components: {},
};
</script>
