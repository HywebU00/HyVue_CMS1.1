<template>
  <v-container class="container page">
    <h2 class="title">回饋組件（Feedback）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 font-weight-bold">警告框（Alerts）</h4>
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
                      color="neutral10"
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
              <h4 class="text-h4 mb-2 font-weight-bold">
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
                    >
                      <template v-slot:headline>
                        <div class="img">
                          <v-img src="@/assets/images/empty.svg"> </v-img>
                        </div>
                        <div class="title">Whoops, 404</div>
                      </template>
                    </v-empty-state>
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
              <h4 class="text-h4 mb-2 font-weight-bold">
                環狀進度元件 （Progress circular）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="狀態">
                <layoutCardItem :height="'60px'" :width="'180px'">
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
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label
                    >State:Default<br />
                    元件 新增class= " rounded "
                  </template>
                  <template #content>
                    <v-progress-circular
                      model-value="75"
                      class="rounded"
                      color="secondary60"
                      :size="90"
                      :width="6"
                    >
                      <template v-slot:default>
                        <div class="text"><span>75</span>%</div>
                      </template>
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label
                    >State:Error
                    <br />
                    元件 新增class= " rounded "
                  </template>
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
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label
                    >State:Success
                    <br />
                    元件 新增class= " rounded "
                  </template>
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
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label
                    >Type:Rounded
                    <br />
                    元件 新增class= " rounded "
                  </template>
                  <template #content>
                    <v-progress-circular
                      :model-value="75"
                      class="rounded"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary60"
                    >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label>Type:Square</template>
                  <template #content>
                    <v-progress-circular
                      :model-value="75"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary60"
                    >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="尺寸">
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label>Size:Small</template>
                  <template #content>
                    <v-progress-circular
                      class="rounded"
                      :model-value="75"
                      :rotate="360"
                      :size="100"
                      :width="5"
                      color="secondary60"
                    >
                    </v-progress-circular>
                  </template>
                </layoutCardItem>
                <layoutCardItem :height="'60px'" :width="'180px'">
                  <template #label>Size:Large</template>
                  <template #content>
                    <v-progress-circular
                      class="rounded"
                      :model-value="75"
                      :rotate="360"
                      :size="100"
                      :width="15"
                      color="secondary60"
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
              <h4 class="text-h4 mb-2 font-weight-bold">
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
                          model-value="0"
                          color="primary"
                          rounded
                          :height="14"
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
                          model-value="50"
                          color="secondary60"
                          :height="14"
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
                          model-value="50"
                          color="error"
                          rounded
                          :height="14"
                        ></v-progress-linear>
                        <div class="icon text-error">
                          <span class="material-icons"> cancel </span>
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
                          model-value="100"
                          rounded
                          :height="14"
                          color="success"
                        ></v-progress-linear>
                        <div class="icon text-success">
                          <span class="material-icons"> check_circle </span>
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
                      color="secondary60"
                      :height="14"
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
                      color="secondary60"
                      :height="14"
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
                      color="secondary60"
                      :height="8"
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
                      color="secondary60"
                      :height="14"
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
              <h4 class="text-h4 mb-2 font-weight-bold">
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
                        <v-btn color="neutral20" class="ma-2" v-bind="props"
                          >open</v-btn
                        >
                      </template>
                      Hello, I am a snackbar
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- 圓角 pill Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label>Type:flat</template>
                  <template #content>
                    <v-snackbar :timeout="2000" rounded="pill" color="primary">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          class="ma-2"
                          color="primary"
                          rounded="pill"
                          v-bind="props"
                          >open</v-btn
                        >
                      </template>
                      Hello, I am a snackbar
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- 陰影 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label> Type:tonal</template>
                  <template #content>
                    <v-snackbar
                      :timeout="2000"
                      color="primary"
                      variant="tonal"
                      rounded="pill"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          class="ma-2"
                          color="primary"
                          variant="tonal"
                          v-bind="props"
                          >open</v-btn
                        >
                      </template>
                      Hello, I am a snackbar
                    </v-snackbar>
                  </template>
                </layoutCardItem>

                <!-- outlined風格 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label>Type: outlined</template>
                  <template #content>
                    <v-snackbar
                      v-model="snackbar_outlined"
                      :timeout="-1"
                      rounded="pill"
                      color="secondary60"
                      variant="outlined"
                    >
                      Hello, I am a snackbar
                      <template v-slot:actions>
                        <v-btn
                          variant="text"
                          icon
                          color="secondary60"
                          @click="snackbar_outlined = false"
                        >
                          <span class="material-icons">close</span>
                        </v-btn>
                      </template>
                    </v-snackbar>
                    <v-btn
                      color="secondary60"
                      variant="outlined"
                      class="ma-2"
                      @click="snackbar_outlined = true"
                    >
                      Open
                    </v-btn>
                  </template>
                </layoutCardItem>

                <!-- text 風格 Snackbar -->
                <layoutCardItem :height="'20px'">
                  <template #label> Type:text</template>
                  <template #content>
                    <v-snackbar
                      v-model="snackbar_text"
                      color="white"
                      rounded="pill"
                      :timeout="-1"
                    >
                      Hello, I am a snackbar
                      <template v-slot:actions>
                        <v-btn
                          icon
                          variant="text"
                          @click="snackbar_text = false"
                        >
                          <span class="material-icons">close</span>
                        </v-btn>
                      </template>
                    </v-snackbar>
                    <v-btn class="ma-2" @click="snackbar_text = true">
                      Open
                    </v-btn>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="多行文字" flexWrap="wrap">
                <layoutCardItem>
                  <template #content>
                    <v-btn
                      rounded="sm"
                      color="neutral20"
                      @click="snackbar = true"
                    >
                      Open
                    </v-btn>
                    <v-snackbar v-model="snackbar" multi-line>
                      Hello, I am a snackbarHello, I am a snackbarHello, I am a
                      snackbarHello, I am a snackbarHello, I am a snackbar
                      <template v-slot:actions>
                        <v-btn
                          color=""
                          variant="text"
                          @click="snackbar = false"
                        >
                          <span class="material-icons"> close </span>
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
              <h4 class="text-h4 mb-2 font-weight-bold">
                時間軸元件（Timeline）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>

              <layoutCard title="圖標樣式" flexWrap="wrap">
                <layoutCardItem :height="'20px'" label-align="justify-start">
                  <template #label>垂直時間軸</template>
                  <template #content>
                    <div>
                      <v-timeline dot-color="secondary60">
                        <v-timeline-item size="small">
                          <template v-slot:opposite>
                            Opposite content
                          </template>
                          <div>
                            <div class="title">
                              <span class="material-icons-outlined">
                                comment
                              </span>
                              <span>Content title</span>
                            </div>
                            <p>
                              Let Google help apps determine location. This
                              means sending anonymous location data to Google,
                              even when no apps are running.
                            </p>
                          </div>
                        </v-timeline-item>
                        <v-timeline-item>
                          <template v-slot:opposite>
                            Opposite content
                          </template>
                          <div>
                            <div class="title">
                              <span class="material-icons-outlined">
                                comment
                              </span>
                              <span> Content title</span>
                            </div>
                            <p>
                              Let Google help apps determine location. This
                              means sending anonymous location data to Google,
                              even when no apps are running.
                            </p>
                          </div>
                        </v-timeline-item>
                        <v-timeline-item side="start">
                          <template v-slot:opposite>
                            Opposite content
                          </template>
                          <template v-slot:icon>
                            <span>LC</span>
                          </template>
                          <div>
                            <div class="title">
                              <span class="material-icons-outlined">
                                comment
                              </span>
                              <span> Content title</span>
                            </div>
                            <p>
                              Let Google help apps determine location. This
                              means sending anonymous location data to Google,
                              even when no apps are running.
                            </p>
                          </div>
                        </v-timeline-item>
                        <v-timeline-item side="end">
                          <template v-slot:opposite>
                            Opposite content
                          </template>
                          <template v-slot:icon>
                            <v-avatar
                              image="@/assets/demo/account.jpg"
                            ></v-avatar>
                          </template>
                          <div>
                            <div class="title">
                              <span class="material-icons-outlined">
                                comment
                              </span>
                              <span> Content title</span>
                            </div>
                            <p>
                              Let Google help apps determine location. This
                              means sending anonymous location data to Google,
                              even when no apps are running.
                            </p>
                          </div>
                        </v-timeline-item>
                        <v-timeline-item side="start">
                          <template v-slot:opposite>
                            Opposite content
                          </template>
                          <template v-slot:icon>
                            <span class="material-icons-outlined"> grade </span>
                          </template>
                          <div>
                            <div class="title">
                              <span class="material-icons-outlined">
                                comment
                              </span>
                              <span> Content title</span>
                            </div>
                            <p>
                              Let Google help apps determine location. This
                              means sending anonymous location data to Google,
                              even when no apps are running.
                            </p>
                          </div>
                        </v-timeline-item>
                      </v-timeline>
                    </div>
                  </template>
                </layoutCardItem>
              </layoutCard>

              <layoutCard title="水平排列" flexWrap="wrap">
                <layoutCardItem>
                  <template #content>
                    <v-timeline direction="horizontal" dot-color="secondary60">
                      <v-timeline-item size="small" v-for="i in 2" :key="i">
                        <template v-slot:opposite> Opposite content </template>
                        <div>
                          <v-card class="elevation-0" width="400">
                            <v-card-title>
                              <div class="title">
                                <span class="material-icons-outlined">
                                  comment
                                </span>
                                <span>Content title</span>
                              </div>
                            </v-card-title>
                            <v-card-text class="">
                              <p>
                                Let Google help apps determine location. This
                                means sending anonymous location data to Google,
                                even when no apps are running.
                              </p>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-end">
                              <v-btn
                                class="mr-1"
                                rounded="sm"
                                color="primary"
                                variant="flat"
                              >
                                確認
                              </v-btn>
                            </v-card-actions>
                          </v-card>
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
                          <div class="mx-2">
                            <v-card class="elevation-0 timelineCard">
                              <v-card-title>
                                <div class="title">
                                  <span class="material-icons-outlined">
                                    comment
                                  </span>
                                  <span>Content title</span>
                                </div>
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Let Google help apps determine location. This
                                  means sending anonymous location data to
                                  Google, even when no apps are running.
                                </p>
                              </v-card-text>
                              <v-card-actions class="d-flex justify-end">
                                <v-btn
                                  class="mr-1"
                                  color="primary"
                                  variant="flat"
                                >
                                  確認
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </div>
                          <div class="mx-2">
                            <v-card class="timelineCard">
                              <v-card-title>
                                <div class="title">
                                  <span class="material-icons-outlined">
                                    comment
                                  </span>
                                  <span>Content title</span>
                                </div>
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Let Google help apps determine location. This
                                  means sending anonymous location data to
                                  Google, even when no apps are running.
                                </p>
                              </v-card-text>
                              <v-card-actions class="d-flex justify-end">
                                <v-btn
                                  class="mr-1"
                                  color="primary"
                                  variant="flat"
                                >
                                  確認
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </div>
                          <div class="mx-2">
                            <v-card class="timelineCard">
                              <v-card-title class="bg-secondary60">
                                <div class="title">
                                  <span class="material-icons-outlined">
                                    comment
                                  </span>
                                  <span>Content title</span>
                                </div>
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Let Google help apps determine location. This
                                  means sending anonymous location data to
                                  Google, even when no apps are running.
                                </p>
                              </v-card-text>
                              <v-card-actions class="d-flex justify-end">
                                <v-btn
                                  class="mr-1"
                                  color="primary"
                                  variant="flat"
                                >
                                  確認
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </div>
                          <div class="mx-2">
                            <v-card class="bg-secondary60 timelineCard">
                              <v-card-title>
                                <div class="title">
                                  <span class="material-icons-outlined">
                                    comment
                                  </span>
                                  <span>Content title</span>
                                </div>
                              </v-card-title>
                              <v-card-text class="">
                                <p>
                                  Let Google help apps determine location. This
                                  means sending anonymous location data to
                                  Google, even when no apps are running.
                                </p>
                              </v-card-text>
                              <v-card-actions class="d-flex justify-end">
                                <v-btn
                                  class="mr-1"
                                  color="primary"
                                  variant="flat"
                                >
                                  確認
                                </v-btn>
                              </v-card-actions>
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
    snackbar_text: false,
    snackbar_outlined: false,
    closeAlert: true,
  }),
  components: {
    layoutCard,
    layoutCardItem,
  },
};
</script>
