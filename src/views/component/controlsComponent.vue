<template>
  <v-container class="container">
    <h2>控制组件(controls)</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                滑桿元件（ sliders）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <!-- 圖示 start -->
                <layoutCard title="圖示" flexWrap="wrap">
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Show First Icon : True</template>
                    <template #content>
                      <v-slider
                        color="primary"
                        v-model="media"
                        hide-details="auto"
                        track-color="neutral-darken-3"
                      >
                        <template v-slot:prepend>
                          <span class="material-icons"> volume_up </span>
                        </template></v-slider
                      >
                    </template>
                  </layoutCardItem>
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Show First + End Icon : True</template>
                    <template #content>
                      <v-slider
                        v-model="media2"
                        color="primary"
                        hide-details="auto"
                        track-color="neutral-darken-3"
                      >
                        <template v-slot:prepend>
                          <span class="material-icons"> volume_up </span>
                        </template>
                        <template v-slot:append>
                          <span class="material-icons-outlined"> search </span>
                        </template>
                      </v-slider>
                    </template>
                  </layoutCardItem>
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Show End Icon : True</template>
                    <template #content>
                      <v-slider
                        v-model="media3"
                        color="primary"
                        track-color="neutral-darken-3"
                        hide-details="auto"
                      >
                        <template v-slot:append>
                          <span class="material-icons-outlined"> search </span>
                        </template>
                      </v-slider>
                    </template>
                  </layoutCardItem>
                </layoutCard>
                <!-- 圖示 end -->
                <!-- 標籤 start -->
                <layoutCard title="標籤" flexWrap="wrap">
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'96px'"
                  >
                    <template #label
                      >Show Thumb: True<br />
                      Type : Text</template
                    >
                    <template #content>
                      <v-slider
                        v-model="slider3"
                        thumb-label="always"
                        color="primary"
                        track-color="neutral-darken-3"
                        hide-details="auto"
                      ></v-slider>
                    </template>
                  </layoutCardItem>
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'96px'"
                  >
                    <template #label
                      >Show Thumb: True <br />
                      Type : Icon</template
                    >
                    <template #content>
                      <v-slider
                        color="primary"
                        v-model="slider4"
                        thumb-label="always"
                        track-color="neutral-darken-3"
                        hide-details="auto"
                      >
                        <template v-slot:thumb-label>
                          <span class="material-icons"> star_outline </span>
                        </template>
                      </v-slider>
                    </template>
                  </layoutCardItem>
                </layoutCard>
                <!-- 標籤 end -->
                <layoutCard title="欄位樣式" flexWrap="wrap">
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label> Show First input : True </template>
                    <template #content>
                      <v-slider
                        v-model="slider5"
                        :max="max"
                        :min="min"
                        class="align-center"
                        color="primary"
                        track-color="neutral-darken-3"
                        hide-details="auto"
                      >
                        <template v-slot:prepend>
                          <v-text-field
                            v-model="slider1"
                            density="compact"
                            style="width: 70px"
                            type="number"
                            hide-details
                            single-line
                            variant="outlined"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </template>
                  </layoutCardItem>

                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>
                      Show First + End input : True）
                    </template>
                    <template #content>
                      <v-slider
                        v-model="slider6"
                        :max="max"
                        :min="min"
                        class="align-center"
                        hide-details
                        color="primary"
                        track-color="neutral-darken-3"
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="slider6"
                            variant="outlined"
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
                            variant="outlined"
                            hide-details
                            single-line
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </template>
                  </layoutCardItem>

                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Show End input : True </template>
                    <template #content>
                      <v-slider
                        v-model="slider7"
                        :max="max"
                        :min="min"
                        class="align-center"
                        hide-details
                        color="primary"
                        track-color="neutral-darken-3"
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="slider3"
                            variant="outlined"
                            density="compact"
                            style="width: 70px"
                            type="number"
                            hide-details
                            single-line
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </template>
                  </layoutCardItem>
                </layoutCard>
                <layoutCard title="刻度">
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label> Show Tick : True </template>
                    <template #content>
                      <v-slider
                        show-ticks="always"
                        step="10"
                        tick-size="4"
                        hide-details
                        color="primary"
                        track-color="neutral-darken-3"
                      ></v-slider>
                    </template>
                  </layoutCardItem>
                </layoutCard>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                下拉選擇框（Selects）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <layoutCard title="樣式" flexWrap="wrap">
                  <!-- Default -->
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Type: Default</template>
                    <template #content>
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
                    </template>
                  </layoutCardItem>

                  <!-- Disabled -->
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Type: Underlined</template>
                    <template #content>
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
                    </template>
                  </layoutCardItem>
                  <!-- Outlined -->
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Type: Outlined</template>
                    <template #content>
                      <v-select
                        label="Select"
                        variant="outlined"
                        single-line
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming',
                        ]"
                      ></v-select>
                    </template>
                  </layoutCardItem>

                  <!-- Solo -->
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Type: Solo</template>
                    <template #content>
                      <v-select
                        label="Select"
                        single-line
                        variant="solo"
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming',
                        ]"
                      ></v-select>
                    </template>
                  </layoutCardItem>
                  <!-- Solo -->
                  <!-- Solo-filled -->
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Type: Solo-filled</template>
                    <template #content>
                      <v-select
                        label="Select"
                        single-line
                        variant="solo"
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming',
                        ]"
                      ></v-select>
                    </template>
                  </layoutCardItem>
                  <!-- Solo-filled -->
                  <!-- Solo-inverted -->
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'20px'"
                  >
                    <template #label>Type: Solo-inverted</template>
                    <template #content>
                      <v-select
                        label="Select"
                        variant="solo-inverted"
                        single-line
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming',
                        ]"
                      ></v-select>
                    </template>
                  </layoutCardItem>
                  <!-- Solo-inverted -->
                </layoutCard>
                <layoutCard title="下拉選單" flexWrap="wrap">
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'42px'"
                  >
                    <template #label>
                      State: Default<br />
                      Show First Icon: True
                    </template>
                    <template #content>
                      <v-select
                        label="Select"
                        variant="outlined"
                        single-line
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming',
                        ]"
                      ></v-select>
                    </template>
                  </layoutCardItem>
                  <layoutCardItem
                    label-align="justify-start"
                    style="width: 100%"
                    :height="'42px'"
                  >
                    <template #label>
                      State: Default<br />
                      Show First Icon: True
                    </template>
                    <template #content>
                      <v-select
                        v-model="selectedFruits"
                        variant="outlined"
                        :items="fruits"
                        label="Favorite Fruits"
                        single-line
                        multiple
                      >
                        <template v-slot:prepend-item>
                          <v-list-item title="Select All" @click="toggle">
                            <template v-slot:prepend>
                              <v-checkbox-btn
                                :color="
                                  likesSomeFruit ? 'indigo-darken-4' : undefined
                                "
                                :indeterminate="
                                  likesSomeFruit && !likesAllFruit
                                "
                                :model-value="likesAllFruit"
                              ></v-checkbox-btn>
                            </template>
                          </v-list-item>

                          <v-divider class="mt-2"></v-divider>
                        </template>

                        <template v-slot:append-item>
                          <v-divider class="mb-2"></v-divider>

                          <v-list-item
                            :subtitle="subtitle"
                            :title="title"
                            disabled
                          >
                            <template v-slot:prepend>
                              <v-avatar
                                color="primary"
                                icon="mdi-food-apple"
                              ></v-avatar>
                            </template>
                          </v-list-item>
                        </template>
                      </v-select>
                    </template>
                  </layoutCardItem>
                </layoutCard>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                範圍滑桿元件（Range sliders）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <!-- Default start -->
              <layoutCard title="Range Sliders" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'42px'"
                >
                  <template #label>State : Default</template>
                  <template #content>
                    <v-range-slider
                      v-model="value"
                      strict
                      track-color="neutral-darken-3"
                      color="primary"
                    ></v-range-slider>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- Default end -->
              <!-- 標籤 start -->
              <layoutCard title="標籤" flexWrap="wrap">
                <!-- thumb-label always -->
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'96px'"
                >
                  <template #label
                    >Show Thumb: True<br />
                    Type : Text</template
                  >
                  <template #content>
                    <v-range-slider
                      v-model="value2"
                      step="10"
                      thumb-label="always"
                      color="primary"
                      hide-details="auto"
                      track-color="neutral-darken-3"
                    ></v-range-slider>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'96px'"
                >
                  <template #label
                    >Show Thumb: True<br />
                    Type : Icon</template
                  >
                  <template #content>
                    <v-range-slider
                      v-model="range"
                      :step="0"
                      thumb-label="always"
                      color="primary"
                      hide-details="auto"
                      track-color="neutral-darken-3"
                    >
                      <template v-slot:thumb-label="{ modelValue }">
                        <v-icon
                          size="16"
                          class="mr-1"
                          :icon="
                            modelValue === range[0]
                              ? 'mdi-weather-sunny'
                              : 'mdi-weather-night'
                          "
                        />
                      </template>
                    </v-range-slider>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 標籤 end -->
              <!-- 文字欄位 start -->
              <layoutCard title="文字欄位" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'42px'"
                >
                  <template #label>Show First input : True</template>
                  <template #content>
                    <v-range-slider
                      v-model="range2"
                      :max="10"
                      :min="-10"
                      :step="1"
                      class="align-center"
                      track-color="neutral-darken-3"
                      color="primary"
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
                        />
                      </template>
                    </v-range-slider>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'42px'"
                >
                  <template #label>Show First + End input : True</template>
                  <template #content>
                    <v-range-slider
                      v-model="range3"
                      :max="10"
                      :min="-10"
                      :step="1"
                      class="align-center"
                      track-color="neutral-darken-3"
                      color="primary"
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
                        />
                      </template>
                    </v-range-slider>
                  </template>
                </layoutCardItem>

                <!-- Prepend + Append TextField -->
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'42px'"
                >
                  <template #label>Show End input : True</template>
                  <template #content>
                    <v-range-slider
                      v-model="range4"
                      :max="10"
                      :min="-10"
                      :step="1"
                      color="primary"
                      class="align-center"
                      track-color="neutral-darken-3"
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
                        />
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
                        />
                      </template>
                    </v-range-slider>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 文字欄位 end -->
              <!-- 刻度 start -->
              <layoutCard title="刻度" flexWrap="wrap">
                <layoutCardItem
                  label-align="justify-start"
                  style="width: 100%"
                  :height="'96px'"
                >
                  <template #label>Show Tick : True</template>
                  <template #content>
                    <v-range-slider
                      :model-value="[0, 1]"
                      :step="1"
                      :ticks="seasons"
                      max="3"
                      min="0"
                      show-ticks="always"
                      thumb-label="always"
                      tick-size="4"
                      color="primary"
                      hide-details="auto"
                      track-color="neutral-darken-3"
                    >
                      <template v-slot:thumb-label="{ modelValue }">
                        <v-icon
                          :icon="season(modelValue)"
                          theme="dark"
                        ></v-icon>
                      </template>
                    </v-range-slider>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <!-- 刻度 end -->
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
  data() {
    return {
      media: 50,
      media2: 50,
      media3: 50,
      alarm: 0,
      zoom: 0,
      value: 0,
      slider: 0,
      slider1: 50,
      slider2: 50,
      slider3: 50,
      slider4: 50,
      slider5: 50,
      slider6: 50,
      slider7: 50,
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
      range2: [-5, 5],
      range3: [-5, 5],
      range4: [-5, 5],
      seasons: {
        0: "Winter",
        1: "Spring",
        2: "Summer",
        3: "Fall",
      },
      icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
      value2: [20, 40],
      fruits: [
        "Apples",
        "Apricots",
        "Avocado",
        "Bananas",
        "Blueberries",
        "Blackberries",
        "Boysenberries",
        "Bread fruit",
        "Cantaloupes (cantalope)",
        "Cherries",
        "Cranberries",
        "Cucumbers",
        "Currants",
        "Dates",
        "Eggplant",
        "Figs",
        "Grapes",
        "Grapefruit",
        "Guava",
        "Honeydew melons",
        "Huckleberries",
        "Kiwis",
        "Kumquat",
        "Lemons",
        "Limes",
        "Mangos",
        "Mulberries",
        "Muskmelon",
        "Nectarines",
        "Olives",
        "Oranges",
        "Papaya",
        "Peaches",
        "Pears",
        "Persimmon",
        "Pineapple",
        "Plums",
        "Pomegranate",
        "Raspberries",
        "Rose Apple",
        "Starfruit",
        "Strawberries",
        "Tangerines",
        "Tomatoes",
        "Watermelons",
        "Zucchini",
      ],
      selectedFruits: [],
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
    toggle() {
      if (this.likesAllFruit) {
        this.selectedFruits = [];
      } else {
        this.selectedFruits = this.fruits.slice();
      }
    },
  },
  computed: {
    likesAllFruit() {
      return this.selectedFruits.length === this.fruits.length;
    },
    likesSomeFruit() {
      return this.selectedFruits.length > 0;
    },
    title() {
      if (this.likesAllFruit)
        return "Holy smokes, someone call the fruit police!";

      if (this.likesSomeFruit) return "Fruit Count";

      return "How could you not like fruit?";
    },
    subtitle() {
      if (this.likesAllFruit) return undefined;

      if (this.likesSomeFruit) return this.selectedFruits.length;

      return "Go ahead, make a selection above!";
    },
  },
  components: {
    layoutCard,
    layoutCardItem,
  },
};
</script>

<style></style>
