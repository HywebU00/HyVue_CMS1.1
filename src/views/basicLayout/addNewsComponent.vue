<template>
  <v-container class="container page addNews">
    <v-breadcrumbs :items="['首頁', '節點', '節點']">
      <template v-slot:prepend>
        <span class="material-symbols-rounded text-neutral30 icon" size="small">
          home
        </span>
      </template>
    </v-breadcrumbs>
    <v-divider class="mb-3"></v-divider>
    <h2 class="title">新增新聞 (AddNews)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row no-gutters>
      <v-col lg="9" cols="12">
        <!-- tablet 卡片列 start -->
        <v-card class="mb-5">
          <div class="">
            <v-container class="container">
              <!-- 標籤列 start -->
              <v-row class="">
                <v-col cols="12" class="py-0 mt-2"
                  ><div>
                    <v-chip-group class="chipGroup" v-model="selection">
                      <v-chip v-for="item in 6" :key="item" link label>
                        標籤
                      </v-chip>
                    </v-chip-group>
                  </div>
                  <v-divider class="my-2"></v-divider>
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
              <!-- tab start -->
              <v-row>
                <v-col>
                  <v-tabs class="textTabs" v-model="tab" color="primary" grow>
                    <v-tab prepend-icon="mdi-pencil" value="one"
                      >內容編輯</v-tab
                    >
                    <v-tab prepend-icon="mdi-pencil" value="two"
                      >發布設定</v-tab
                    >
                    <v-tab prepend-icon="mdi-pencil" value="three"
                      >詮釋資料</v-tab
                    >
                  </v-tabs>
                  <v-card-text>
                    <v-window v-model="tab">
                      <v-window-item value="one">
                        <div class="text-h1 my-3 text-neutral20">標題一</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。
                        </p>
                        <div class="text-h2 my-3 text-neutral20">標題一</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。
                        </p>
                        <div class="text-h4 my-3 text-neutral20">標題ㄧ</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。
                        </p>
                        <div class="text-h5 my-3 text-neutral20">標題ㄧ</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。
                        </p>
                        <v-alert
                          border-color="primary"
                          title="卡片標題"
                          rounded="md"
                          class="alert bg-neutral80"
                        >
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。
                        </v-alert>
                      </v-window-item>
                      <v-window-item value="two"> Two </v-window-item>

                      <v-window-item value="three"> Three </v-window-item>
                    </v-window>
                  </v-card-text>
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
      <v-col lg="3" cols="12">
        <v-card class="pa-2 mb-3 checkCard">
          <h4 class="">單選核取表單</h4>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pa-0"
                  ><v-radio-group
                    inline
                    label="水平行內排列"
                    hide-details="auto"
                    color="primary"
                  >
                    <v-radio label="我是選項一" value="1"></v-radio>
                    <v-radio label="我是選項二" value="2"></v-radio>
                    <v-radio
                      label="我是選項三"
                      value="3"
                    ></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <div class="btnGrp">
                <v-row class="formGrp mb-3" no-gutters>
                  <v-col class="mr-2">
                    <v-btn block variant="tonal" color="primary">暫存</v-btn>
                  </v-col>
                  <v-col class="ml-2">
                    <v-btn block variant="tonal" color="primary">預覽</v-btn>
                  </v-col>
                </v-row>
                <v-row class="formGrp" no-gutters>
                  <v-col>
                    <v-btn block color="primary">確定發布</v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-form>
        </v-card>
        <v-card class="pa-2 checkCard">
          <h4>單選核取表單</h4>

          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pa-0"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    color="primary"
                    density="comfortable"
                  >
                    <v-radio label="立即" value="1"></v-radio>
                    <v-radio label="排程" value="2"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-select
                    label="下拉式選單"
                    variant="outlined"
                    density="comfortable"
                    single-line
                    hide-details
                    v-model:menu="menuOpen"
                    :items="['選單ㄧ', '選單二', '選單三']"
                  >
                    <template #append-inner>
                      <v-icon class="me-2">
                        {{ menuOpen ? "mdi-chevron-up" : "mdi-chevron-down" }}
                      </v-icon>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-divider class="mt-3"></v-divider>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pa-0 mt-3"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    density="comfortable"
                    hide-details="auto"
                    color="primary"
                  >
                    <v-radio label="立即" value="1"></v-radio>
                    <v-radio label="排程" value="2"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-select
                    label="下拉式選單"
                    variant="outlined"
                    density="comfortable"
                    single-line
                    v-model:menu="menuOpen2"
                    hide-details
                    :items="['選單ㄧ', '選單二', '選單三']"
                  >
                    <template #append-inner>
                      <v-icon class="me-2">
                        {{ menuOpen2 ? "mdi-chevron-up" : "mdi-chevron-down" }}
                      </v-icon>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-divider class="mt-3"></v-divider>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pa-0 mt-3"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    density="comfortable"
                    color="primary"
                  >
                    <v-radio label="立即" value="1"></v-radio>
                    <v-radio label="排程" value="2"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-select
                    label="下拉式選單"
                    density="comfortable"
                    variant="outlined"
                    single-line
                    v-model:menu="menuOpen3"
                    hide-details
                    :items="['選單ㄧ', '選單二', '選單三']"
                  >
                    <template #append-inner>
                      <v-icon class="me-2">
                        {{ menuOpen3 ? "mdi-chevron-up" : "mdi-chevron-down" }}
                      </v-icon>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-divider class="mt-3 mb-8"></v-divider>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    menuOpen: false,
    menuOpen2: false,
    menuOpen3: false,
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selectedDate: null,
    selection: 1,
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
  methods: {},
};
</script>
