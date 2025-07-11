<template>
  <v-container class="container">
    <h2>控制组件(controls)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                滑块 （ sliders）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <v-slider></v-slider>
                <div class="mt-3">
                  <div class="text-caption">Media volume</div>

                  <v-slider
                    v-model="media"
                    prepend-icon="mdi-volume-high"
                  ></v-slider>

                  <div class="text-caption">Alarm volume</div>

                  <v-slider v-model="alarm" append-icon="mdi-alarm"></v-slider>

                  <div class="text-caption">Icon click callback</div>

                  <v-slider
                    v-model="zoom"
                    append-icon="mdi-magnify-plus-outline"
                    prepend-icon="mdi-magnify-minus-outline"
                    @click:append="zoomIn"
                    @click:prepend="zoomOut"
                  ></v-slider>
                </div>
                <div class="mt-3">
                  <div>
                    <div class="text-caption">Custom thumb size</div>
                    <v-slider
                      v-model="slider3"
                      :thumb-size="36"
                      thumb-label="always"
                    ></v-slider>
                  </div>

                  <div>
                    <div class="text-caption">Custom thumb label</div>
                    <v-slider
                      color="primary"
                      v-model="slider4"
                      thumb-label="always"
                    >
                      <template v-slot:thumb-label="{ modelValue }">
                        {{
                          satisfactionEmojis[
                            Math.min(Math.floor(modelValue / 10), 9)
                          ]
                        }}
                      </template>
                    </v-slider>
                  </div>
                </div>
                <div class="mt-3">
                  <v-slider
                    v-model="slider"
                    :max="max"
                    :min="min"
                    class="align-center"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider1"
                        density="compact"
                        style="width: 70px"
                        type="number"
                        hide-details
                        single-line
                      ></v-text-field>
                    </template>
                  </v-slider>
                  <v-slider
                    v-model="slider"
                    :max="max"
                    :min="min"
                    class="align-center"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider"
                        density="compact"
                        style="width: 70px"
                        type="number"
                        hide-details
                        single-line
                      ></v-text-field>
                    </template>
                    <template v-slot:prepend>
                      <v-text-field
                        v-model="slider1"
                        density="compact"
                        style="width: 70px"
                        type="number"
                        hide-details
                        single-line
                      ></v-text-field>
                    </template>
                  </v-slider>
                  <v-slider
                    v-model="slider"
                    :max="max"
                    :min="min"
                    class="align-center"
                    hide-details
                  >
                    <template v-slot:prepend>
                      <v-text-field
                        v-model="slider"
                        density="compact"
                        style="width: 70px"
                        type="number"
                        hide-details
                        single-line
                      ></v-text-field>
                    </template>
                  </v-slider>
                </div>
                <div class="mt-3">
                  <div class="text-caption">Tick size</div>
                  <v-slider
                    show-ticks="always"
                    step="10"
                    tick-size="4"
                  ></v-slider>
                </div>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                下拉选择框（Selects）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="">
                  <v-select
                    label="Select"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                  ></v-select>
                  <v-select
                    label="Select"
                    disabled
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                  ></v-select>
                </div>
                <div class="mt-3">
                  <v-select
                    label="Select"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                    variant="outlined"
                  ></v-select>
                </div>
                <div class="mt-3">
                  <v-select
                    label="Select"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                    variant="solo"
                  ></v-select>
                </div>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                範圍滑块（Range sliders）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <v-range-slider v-model="value" strict></v-range-slider>
              </div>
              <div class="mt-3">
                <v-range-slider
                  v-model="value2"
                  step="10"
                  thumb-label="always"
                ></v-range-slider>
              </div>

              <div class="mt-3">
                <v-range-slider
                  v-model="range"
                  :max="10"
                  :min="-10"
                  :step="1"
                  class="align-center"
                  hide-details
                >
                  <template v-slot:prepend>
                    <v-text-field
                      v-model="range[0]"
                      density="compact"
                      style="width: 70px"
                      type="number"
                      variant="outlined"
                      hide-details
                      single-line
                    ></v-text-field>
                  </template>
                </v-range-slider>
                <v-range-slider
                  v-model="range"
                  :max="10"
                  :min="-10"
                  :step="1"
                  class="align-center"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="range[1]"
                      density="compact"
                      style="width: 70px"
                      type="number"
                      variant="outlined"
                      hide-details
                      single-line
                    ></v-text-field>
                  </template>
                </v-range-slider>
                <v-range-slider
                  v-model="range"
                  :max="10"
                  :min="-10"
                  :step="1"
                  class="align-center"
                  hide-details
                >
                  <template v-slot:prepend>
                    <v-text-field
                      v-model="range[0]"
                      density="compact"
                      style="width: 70px"
                      type="number"
                      variant="outlined"
                      hide-details
                      single-line
                    ></v-text-field>
                  </template>
                  <template v-slot:append>
                    <v-text-field
                      v-model="range[1]"
                      density="compact"
                      style="width: 70px"
                      type="number"
                      variant="outlined"
                      hide-details
                      single-line
                    ></v-text-field>
                  </template>
                </v-range-slider>
              </div>
              <div class="mt-3">
                <v-range-slider
                  :model-value="[0, 1]"
                  :step="1"
                  :ticks="seasons"
                  max="3"
                  min="0"
                  show-ticks="always"
                  thumb-label="always"
                  tick-size="4"
                >
                  <template v-slot:thumb-label="{ modelValue }">
                    <v-icon :icon="season(modelValue)" theme="dark"></v-icon>
                  </template>
                </v-range-slider>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      media: 0,
      alarm: 0,
      zoom: 0,
      value: 0,
      slider: 0,
      slider1: 50,
      slider2: 50,
      slider3: 50,
      slider4: 50,
      satisfactionEmojis: [
        "😭",
        "😢",
        "☹️",
        "🙁",
        "😐",
        "🙂",
        "😊",
        "😁",
        "😄",
        "😍",
      ],
      range: [-5, 5],
      seasons: {
        0: "Winter",
        1: "Spring",
        2: "Summer",
        3: "Fall",
      },
      icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
      value2: [20, 40],
    };
  },

  methods: {
    zoomOut() {
      this.zoom = this.zoom - 10 || 0;
    },
    zoomIn() {
      this.zoom = this.zoom + 10 || 100;
    },
    season(val) {
      return this.icons[val];
    },
  },
};
</script>

<style></style>
