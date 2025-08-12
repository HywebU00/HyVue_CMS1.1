<template>
  <v-container class="container page">
    <v-breadcrumbs :items="['首頁', '節點', '節點']">
      <template v-slot:prepend>
        <span
          class="material-symbols-rounded text-neutral-darken-5 icon"
          size="small"
        >
          home
        </span>
      </template>
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <h2 class="title">系統首頁儀表板</h2>
    <v-row class="mt-2" no-gutters>
      <v-col sm="3" cols="12" v-for="item in countCards" :key="item.title">
        <v-card class="countCard">
          <h4 class="text-h6 font-weight-bold">
            {{ item.title }}
          </h4>
          <v-sheet class="content" rounded>
            <div class="">
              <span class="icon material-symbols-rounded"> arrow_upward </span>
              <span class="text" ref="countCard"> {{ item.num }}</span>
            </div>
          </v-sheet>
          <div class="caption">時間以...為計算準</div>
        </v-card>
      </v-col>
      <v-col md="8" cols="12">
        <v-card class="itemCard h-100">
          <h4 class="">Area Charts</h4>
          <areaChart /> </v-card
      ></v-col>
      <v-col md="4" cols="12">
        <v-card class="itemCard h-100">
          <h4 class="">Pie Charts</h4>
          <div class="d-flex align-center pieCard">
            <pieChart class="" />
          </div>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="h-100 itemCard">
          <h4 class="">今日熱門網頁</h4>

          <v-table density="compact">
            <thead class="bg-thead">
              <tr>
                <th class="text-center">序列</th>
                <th class="text-center">標題</th>
                <th class="text-center">瀏覽量</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td>{{ i }}</td>
                <td>大更沒於正時節直只們來壓算有先，求化化看雨的</td>
                <td>1,523</td>
              </tr>
            </tbody>
          </v-table>
          <div class="d-flex justify-end">
            <v-btn class="mt-3" color="primary">更多</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="h-100 itemCard">
          <h4 class="">公告資訊</h4>
          <v-table density="compact">
            <thead class="bg-thead">
              <tr>
                <th class="text-center">序列</th>
                <th class="text-center">標題</th>
                <th class="text-center">發佈時間</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td>{{ i }}</td>
                <td>過比你三觀不比想面發比望麼到發濟家飯年經產</td>
                <td>2020/01/01</td>
              </tr>
            </tbody>
          </v-table>
          <div class="d-flex justify-end">
            <v-btn class="mt-3" color="primary">更多</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from "gsap";

import pieChart from "@/components/chart/pieChart.vue";
import areaChart from "@/components/chart/AreaChart.vue";

export default {
  data: () => ({
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    countCards: [
      {
        title: "今日訪客人數",
        num: 500,
      },
      { title: "待審資料", num: 320 },
      { title: "今日新增資料", num: 1370 },
      { title: "今日訪客人數", num: 348 },
    ],
  }),
  methods: {
    count(index, num = 200) {
      let th = this.$refs.countCard[index];
      let Numbs = { val: 0 },
        NewVal = num;
      gsap.to(Numbs, {
        val: NewVal,
        roundProps: "val",
        duration: 2,
        onUpdate: function () {
          th.innerHTML = Numbs.val;
        },
      });
    },
  },
  mounted() {
    this.countCards.forEach((item, index) => {
      this.count(index, item.num);
    });
  },
  components: {
    pieChart,
    areaChart,
  },
};
</script>
<style scoped>
.pieCard {
  height: 90%;
}
</style>
