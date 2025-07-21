<template>
  <v-container class="container">
    <h2>導航式組件（Navigation）</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card class="">
          <div class="">
            <v-container class="container">
              <h4 class="text-h4 mb-2 text-primary font-weight-bold">
                麵包屑導航（Breadcrumbs）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <layoutCard title="前缀圖標" flexWrap="wrap">
                <layoutCardItem
                  :height="'20px'"
                  label-align="justify-start"
                  content-align="justify-start"
                  style="width: 100%"
                >
                  <template #label>Show First Icon:False</template>
                  <template #content>
                    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']" />
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  :height="'20px'"
                  label-align="justify-start"
                  content-align="justify-start"
                  style="width: 100%"
                >
                  <template #label>Show First Icon:True</template>
                  <template #content>
                    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
                      <template v-slot:prepend>
                        <v-icon icon="$vuetify" size="small"></v-icon>
                      </template>
                    </v-breadcrumbs>
                  </template>
                </layoutCardItem>
              </layoutCard>
              <layoutCard title="分隔符樣式" flexWrap="wrap">
                <layoutCardItem
                  :height="'20px'"
                  label-align="justify-start"
                  content-align="justify-start"
                  style="width: 100%"
                >
                  <template #label>Type:Slash </template>
                  <template #content>
                    <div class="justify-start">
                      <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
                      </v-breadcrumbs>
                    </div>
                  </template>
                </layoutCardItem>
                <layoutCardItem
                  :height="'20px'"
                  label-align="justify-start"
                  content-align="justify-start"
                  style="width: 100%"
                >
                  <template #label>Type:Arrow</template>
                  <template #content>
                    <div class="justify-start">
                      <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
                        <template v-slot:divider>
                          <v-icon icon="mdi-chevron-right"></v-icon>
                        </template>
                      </v-breadcrumbs>
                    </div>
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
                頁籤元件（Tabs）
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>

              <layoutCard title="Tabs 分頁元件" flexWrap="wrap">
                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>Type: Default</template>
                  <template #content>
                    <v-card class="w-100">
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
                          <v-tabs-window-item value="one"
                            >One</v-tabs-window-item
                          >
                          <v-tabs-window-item value="two"
                            >Two</v-tabs-window-item
                          >
                          <v-tabs-window-item value="three"
                            >Three</v-tabs-window-item
                          >
                        </v-tabs-window>
                      </v-card-text>
                    </v-card>
                  </template>
                </layoutCardItem>

                <layoutCardItem
                  style="width: 100%"
                  :height="'20px'"
                  label-align="justify-start"
                >
                  <template #label>Type: Text</template>
                  <template #content>
                    <v-tabs class="w-100" v-model="tab2" color="primary">
                      <v-tab :value="1" prepend-icon="mdi-account"
                        >Landscape</v-tab
                      >
                      <v-tab :value="2" prepend-icon="mdi-account">City</v-tab>
                      <v-tab :value="3" prepend-icon="mdi-account"
                        >Abstract</v-tab
                      >
                    </v-tabs>
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
    tab: null,
    tab2: null,
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
    tabPlain: null,
    value: ["foo", "bar", "fizz", "buzz"],
  }),
  components: {
    layoutCard,
    layoutCardItem,
  },
};
</script>

<style></style>
