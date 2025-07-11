<template>
  <v-container class="container">
    <h2>导航式组件（Navigation）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                面包屑导航（Breadcrumbs）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="">
                  <v-breadcrumbs
                    :items="['Foo', 'Bar', 'Fizz']"
                  ></v-breadcrumbs>
                </div>
                <div class="mt-3">
                  <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
                    <template v-slot:prepend>
                      <v-icon icon="$vuetify" size="small"></v-icon>
                    </template>
                  </v-breadcrumbs>
                </div>
                <div class="mt-3">
                  <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
                    <template v-slot:divider>
                      <v-icon icon="mdi-chevron-right"></v-icon>
                    </template>
                  </v-breadcrumbs>
                </div>
                <div class="mt-3">
                  <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
                    <template v-slot:title="{ item }">
                      {{ item.title.toUpperCase() }}
                    </template>
                  </v-breadcrumbs>
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
                </div>
                <div class="mt-2">
                  <v-select
                    label="Select"
                    variant="outlined"
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
                <div class="mt-2">
                  <v-select
                    label="Select"
                    variant="underlined"
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
                <div class="mt-2">
                  <v-select
                    label="Select"
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
                </div>
                <div class="mt-2">
                  <v-select
                    label="Select"
                    variant="solo-filled"
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
                <div class="mt-2">
                  <v-select
                    label="Select"
                    variant="solo-inverted"
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
              </div>
              <div class="mt-3">
                <div class="">
                  <v-select
                    v-model="value"
                    :items="items2"
                    label="Chips"
                    chips
                    multiple
                  ></v-select>
                </div>
                <div class="">
                  <v-select
                    v-model="value"
                    :items="items2"
                    label="Chips"
                    multiple
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
                选项卡（Tabs）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="">
                  <v-card>
                    <v-tabs v-model="tab" bg-color="primary">
                      <v-tab value="one" prepend-icon="mdi-account"
                        >Item One</v-tab
                      >
                      <v-tab value="two" prepend-icon="mdi-account"
                        >Item Two</v-tab
                      >
                      <v-tab value="three" prepend-icon="mdi-account"
                        >Item Three</v-tab
                      >
                    </v-tabs>
                    <v-card-text>
                      <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="one">
                          One
                        </v-tabs-window-item>

                        <v-tabs-window-item value="two">
                          Two
                        </v-tabs-window-item>

                        <v-tabs-window-item value="three">
                          Three
                        </v-tabs-window-item>
                      </v-tabs-window>
                    </v-card-text>
                  </v-card>
                </div>
                <div class="mt-2">
                  <v-tabs v-model="tab" align-tabs="" color="primary">
                    <v-tab :value="1" prepend-icon="mdi-account"
                      >Landscape</v-tab
                    >
                    <v-tab :value="2" prepend-icon="mdi-account">City</v-tab>
                    <v-tab :value="3" prepend-icon="mdi-account"
                      >Abstract</v-tab
                    >
                  </v-tabs>
                </div>
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
  data: () => ({
    tab: null,
    items: [
      {
        title: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        title: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        title: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
    items2: ["foo", "bar", "fizz", "buzz"],
    value: ["foo", "bar", "fizz", "buzz"],
  }),
};
</script>

<style></style>
