<template>
  <v-container class="container">
    <h2>回饋組件（Feedback）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                警告框（Alerts）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="狀態" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label> Sate : Default</template>
                  <template #content>
                    <v-alert
                      title="Alert title"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                      <template #close>
                        <v-btn variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Normal</template>
                  <template #content>
                    <v-alert
                      title="Alert title"
                      color="info-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons text-primary">
                          info_outline
                        </span></template
                      >
                      <template #close>
                        <v-btn color="primary" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Success</template>
                  <template #content>
                    <v-alert
                      title="Alert title"
                      color="success-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons text-success">
                          check_circle_outline
                        </span></template
                      >
                      <template #close>
                        <v-btn color="success" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Warning</template>
                  <template #content>
                    <v-alert
                      title="Alert title"
                      color="warning-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend>
                        <span class="material-icons text-warning">
                          warning_amber
                        </span>
                      </template>
                      <template #close>
                        <v-btn color="warning" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Sate : Error</template>
                  <template #content>
                    <v-alert
                      closable
                      icon="$vuetify"
                      title="Alert title"
                      color="error-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend>
                        <span class="material-icons text-error">
                          highlight_off
                        </span>
                      </template>
                      <template #close>
                        <v-btn color="error" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="邊框" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>預設 Border：top</template>
                  <template #content>
                    <v-alert
                      border="top"
                      closable
                      title="Alert title"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Border : Bottom</template>
                  <template #content>
                    <v-alert
                      closable
                      border="bottom"
                      title="Alert title"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Border : Left</template>
                  <template #content>
                    <v-alert
                      closable
                      border="start"
                      title="Alert title"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Border : Right</template>
                  <template #content>
                    <v-alert
                      closable
                      border="end"
                      title="Alert title"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Border : All</template>
                  <template #content>
                    <v-alert
                      closable
                      variant="outlined"
                      title="Alert title"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Border : None</template>
                  <template #content>
                    <v-alert
                      closable
                      title="Alert title"
                      color="neutral-darken-7"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="沒有標題" flexWrap="wrap">
                <layoutCardItem label-align="justify-start" style="width: 100%">
                  <template #content>
                    <v-alert
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons"> info_outline </span>
                      </template>
                      <template #close>
                        <v-btn variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem label-align="justify-start" style="width: 100%">
                  <template #content>
                    <v-alert
                      color="info-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons text-primary">
                          info_outline
                        </span></template
                      >
                      <template #close>
                        <v-btn color="primary" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem label-align="justify-start" style="width: 100%">
                  <template #content>
                    <v-alert
                      color="success-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend
                        ><span class="material-icons text-success">
                          check_circle_outline
                        </span></template
                      >
                      <template #close>
                        <v-btn color="success" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem label-align="justify-start" style="width: 100%">
                  <template #content>
                    <v-alert
                      color="warning-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend>
                        <span class="material-icons text-warning">
                          warning_amber
                        </span>
                      </template>
                      <template #close>
                        <v-btn color="warning" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
                  </template>
                </layoutCardItem>

                <layoutCardItem label-align="justify-start" style="width: 100%">
                  <template #content>
                    <v-alert
                      color="error-lighten-1"
                      text="這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊這是一般提醒訊息區塊"
                    >
                      <template #prepend>
                        <span class="material-icons text-error">
                          highlight_off
                        </span>
                      </template>
                      <template #close>
                        <v-btn color="error" variant="text">
                          <span class="material-icons"> close </span>
                        </v-btn>
                      </template>
                    </v-alert>
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
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                空狀態元件（Empty state）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="樣式" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Type:Default</template>
                  <template #content>
                    <v-empty-state
                      headline="Whoops, 404"
                      title="Page not found"
                      text="The page you were looking for does not exist"
                      image="src/assets/images/empty.svg"
                    ></v-empty-state>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Type:Icon</template>
                  <template #content>
                    <v-empty-state
                      icon="mdi-magnify"
                      headline="Whoops, 404"
                      title="Page not found"
                      text="The page you were looking for does not exist"
                    >
                    </v-empty-state>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="純文字" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Show Pic : False</template>
                  <template #content>
                    <v-empty-state
                      headline="Whoops, 404"
                      text="Page not found"
                      title="The page you were looking for does not exist"
                    ></v-empty-state>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="按鈕" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Show Button : True</template>
                  <template #content>
                    <v-empty-state
                      icon="mdi-magnify"
                      headline="Whoops, 404"
                      title="Page not found"
                      text="The page you were looking for does not exist"
                    >
                      <template v-slot:actions>
                        <v-btn class="mx-1" variant="outlined" color="primary"
                          >回上一頁</v-btn
                        >
                        <v-btn class="mx-1" variant="flat" color="primary">
                          回首頁
                        </v-btn>
                      </template>
                    </v-empty-state>
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
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                環狀進度元件 （Progress circular）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="狀態">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>State:None</template>
                  <template #content>
                    <v-progress-circular
                      class="rounded"
                      model-value="0"
                      :size="90"
                      :width="6"
                    >
                      <template v-slot:default>
                        <div class="text"><span>0</span>%</div>
                      </template>
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>State:Default</template>
                  <template #content>
                    <v-progress-circular
                      model-value="75"
                      class="rounded"
                      color="secondary-lighten-1"
                      :size="90"
                      :width="6"
                    >
                      <template v-slot:default>
                        <div class="text"><span>75</span>%</div>
                      </template>
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>State:Error</template>
                  <template #content>
                    <v-progress-circular
                      class="rounded"
                      color="error"
                      model-value="75"
                      :size="90"
                      :width="6"
                    >
                      <template v-slot:default>
                        <span class="material-icons"> close </span></template
                      >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>State:Success</template>
                  <template #content>
                    <v-progress-circular
                      color="success"
                      class="rounded"
                      model-value="75"
                      :size="90"
                      :width="6"
                    >
                      <template v-slot:default>
                        <span class="material-icons"> check </span>
                      </template>
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="樣式">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>Type:Rounded</template>
                  <template #content>
                    <v-progress-circular
                      :model-value="75"
                      class="rounded"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary-lighten-1"
                    >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>Type:Square</template>
                  <template #content>
                    <v-progress-circular
                      :model-value="75"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary-lighten-1"
                    >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="尺寸">
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>Size:Small</template>
                  <template #content>
                    <v-progress-circular
                      class="rounded"
                      :model-value="75"
                      :rotate="360"
                      :size="100"
                      :width="5"
                      color="secondary-lighten-1"
                    >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'20px'" :width="'150px'">
                  <template #label>Size:Large</template>
                  <template #content>
                    <v-progress-circular
                      class="rounded"
                      :model-value="75"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary-lighten-1"
                    >
                    </v-progress-circular>
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
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                線性進度條元件（Progress linear）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="狀態" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>State : None</template>
                  <template #content>
                    <div class="w-100">
                      <div class="d-flex align-center">
                        <v-progress-linear
                          model-value="20"
                          rounded
                          :height="9"
                        ></v-progress-linear>
                        <div class="text"><span>0</span>%</div>
                      </div>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>State : Default</template>
                  <template #content>
                    <div class="w-100">
                      <div class="d-flex align-center">
                        <v-progress-linear
                          model-value="20"
                          :height="9"
                          rounded
                        ></v-progress-linear>
                        <div class="text"><span>0</span>%</div>
                      </div>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>State : Error</template>
                  <template #content>
                    <div class="w-100">
                      <div class="d-flex align-center">
                        <v-progress-linear
                          model-value="20"
                          rounded
                          :height="9"
                        ></v-progress-linear>
                        <div class="icon">
                          <div class="">img</div>
                        </div>
                      </div>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>State: Success</template>
                  <template #content>
                    <div class="w-100">
                      <div class="d-flex align-center">
                        <v-progress-linear
                          model-value="20"
                          rounded
                          :height="9"
                        ></v-progress-linear>
                        <div class="icon">
                          <div class="">img</div>
                        </div>
                      </div>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="樣式" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Type: Rounded</template>
                  <template #content>
                    <v-progress-linear
                      model-value="20"
                      rounded
                      :height="9"
                    ></v-progress-linear>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Type: Square</template>
                  <template #content>
                    <v-progress-linear
                      model-value="20"
                      :height="9"
                    ></v-progress-linear>
                  </template>
                </layoutCardItem>
              </layoutCard>

              <layoutCard title="尺寸" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Size: Small</template>
                  <template #content>
                    <v-progress-linear
                      model-value="20"
                      :height="6"
                      rounded
                    ></v-progress-linear>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'20px'"
                >
                  <template #label>Size: Large</template>
                  <template #content>
                    <v-progress-linear
                      model-value="20"
                      :height="9"
                      rounded
                    ></v-progress-linear>
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
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                消息列元件（SnackBars）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>

              <layoutCard title="樣式">
                <!-- 基本 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label>Type:elevated</template>
                  <template #content>
                    <v-snackbar :timeout="2000">
                      <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" v-bind="props">open</v-btn>
                      </template>
                      Lorem ipsum dolor sit amet consectetur.
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- 圓角 pill Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label>Type:flat</template>
                  <template #content>
                    <v-snackbar
                      :timeout="2000"
                      color="blue-grey"
                      rounded="pill"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          class="ma-2"
                          color="blue-grey"
                          rounded="pill"
                          v-bind="props"
                          >open</v-btn
                        >
                      </template>
                      Snackbar with <strong>rounded="pill"</strong>.
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- 陰影 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label> Type:tonal</template>
                  <template #content>
                    <v-snackbar :timeout="2000" color="primary" variant="tonal">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          class="ma-2"
                          color="primary"
                          variant="tonal"
                          v-bind="props"
                          >open</v-btn
                        >
                      </template>
                      Snackbar with <strong>tonal</strong> variant.
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- outlined風格 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label>Type: outlined</template>
                  <template #content>
                    <v-snackbar
                      :timeout="2000"
                      color="success"
                      variant="outlined"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          class="ma-2"
                          color="success"
                          variant="outlined"
                          v-bind="props"
                          >open2</v-btn
                        >
                      </template>

                      Snackbar with <strong>outlined</strong> variant.
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- text 風格 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label> Type:text</template>
                  <template #content>
                    <v-snackbar :timeout="2000">
                      <template v-slot:activator="{ props }">
                        <v-btn class="ma-2" v-bind="props">open</v-btn>
                      </template>
                      Lorem ipsum dolor sit amet consectetur.
                    </v-snackbar>
                  </template>
                </layoutCardItem>
              </layoutCard>

              <layoutCard title="多行文字" flexWrap="wrap">
                <layoutCardItem>
                  <template #content>
                    <v-btn color="red-darken-2" @click="snackbar = true">
                      Open Snackbar
                    </v-btn>

                    <v-snackbar v-model="snackbar" multi-line>
                      I am a multi-line snackbar. I can have more than one line.
                      This is another line that is quite long.

                      <template v-slot:actions>
                        <v-btn
                          color="red"
                          variant="text"
                          @click="snackbar = false"
                        >
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>
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
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                時間軸元件（Timeline）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>

              <layoutCard title="圖標樣式" flexWrap="wrap">
                <layoutCardItem :height="'20px'" label-align="justify-start">
                  <template #label>垂直時間軸</template>
                  <template #content>
                    <v-timeline align="start">
                      <v-timeline-item v-for="i in 3" :key="i">
                        <template v-slot:opposite> Opposite content </template>
                        <div>
                          <div class="text-h6">Content title</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                  </template>
                </layoutCardItem>
              </layoutCard>

              <layoutCard title="水平排列" flexWrap="wrap">
                <layoutCardItem>
                  <template #content>
                    <v-timeline direction="horizontal">
                      <v-timeline-item v-for="i in 3" :key="i">
                        <template v-slot:opposite> Opposite content </template>
                        <div>
                          <div class="text-h6">Content title</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                  </template>
                </layoutCardItem>
              </layoutCard>

              <layoutCard title="卡片樣式">
                <layoutCardItem>
                  <template #content>
                    <layoutCardItem
                      :height="'40px'"
                      label-align="justify-start"
                    >
                      <template #label>卡片樣式展示</template>
                      <template #content>
                        <div class="d-flex">
                          <div class="mx-1">
                            <v-card class="elevation-0">
                              <v-card-title :class="['text-h6']">
                                Lorem Ipsum Dolor
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Lorem ipsum dolor sit amet, no nam oblique
                                  veritus. Commune scaevola imperdiet nec ut,
                                  sed euismod convenire principes at. Est et
                                  nobis iisque percipit, an vim zril disputando
                                  voluptatibus, vix an salutandi sententiae.
                                </p>
                                <v-btn color="primary" variant="outlined">
                                  Button
                                </v-btn>
                              </v-card-text>
                            </v-card>
                          </div>
                          <div class="mx-1">
                            <v-card>
                              <v-card-title :class="['text-h6']">
                                Lorem Ipsum Dolor
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Lorem ipsum dolor sit amet, no nam oblique
                                  veritus. Commune scaevola imperdiet nec ut,
                                  sed euismod convenire principes at. Est et
                                  nobis iisque percipit, an vim zril disputando
                                  voluptatibus, vix an salutandi sententiae.
                                </p>
                                <v-btn color="primary" variant="outlined">
                                  Button
                                </v-btn>
                              </v-card-text>
                            </v-card>
                          </div>
                          <div class="mx-1">
                            <v-card>
                              <v-card-title :class="['text-h6', `bg-primary`]">
                                Lorem Ipsum Dolor
                              </v-card-title>
                              <v-card-text class="bg-white text--primary">
                                <p>
                                  Lorem ipsum dolor sit amet, no nam oblique
                                  veritus. Commune scaevola imperdiet nec ut,
                                  sed euismod convenire principes at. Est et
                                  nobis iisque percipit, an vim zril disputando
                                  voluptatibus, vix an salutandi sententiae.
                                </p>
                                <v-btn color="primary" variant="outlined">
                                  Button
                                </v-btn>
                              </v-card-text>
                            </v-card>
                          </div>
                          <div class="mx-1">
                            <v-card class="bg-primary">
                              <v-card-title :class="['text-h6', `bg-primary`]">
                                Lorem Ipsum Dolor
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Lorem ipsum dolor sit amet, no nam oblique
                                  veritus. Commune scaevola imperdiet nec ut,
                                  sed euismod convenire principes at. Est et
                                  nobis iisque percipit, an vim zril disputando
                                  voluptatibus, vix an salutandi sententiae.
                                </p>
                                <v-btn color="primary" variant="outlined">
                                  Button
                                </v-btn>
                              </v-card-text>
                            </v-card>
                          </div>
                        </div>
                      </template>
                    </layoutCardItem>
                  </template>
                </layoutCardItem>
              </layoutCard>
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
  data: () => ({
    snackbar: false,
    closeAlert: true,
  }),
  components: {
    layoutCard,
    layoutCardItem,
  },
};
</script>

<style></style>
