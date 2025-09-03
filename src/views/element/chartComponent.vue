<template>
  <v-container class="container page">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2 class="title">共通元素 - 圖表</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col md="8" cols="12">
        <v-card class="pa-2" height="100%">
          <h4 class="text-h5 font-weight-bold">AreaChart</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <!-- 除 AreaChart 色彩由 ＣＳＳ控制 切換顏色出現相對應的元件外，其餘Chart 統一由ＣＳＳ更改色彩 -->
          <areaChart class="areaChart default" />
          <areaChart class="areaChart dark" />
          <areaChartGreen class="areaChart green" />
          <areaChartRed class="areaChart red" />
          <areaChartPurple class="areaChart purple" /> </v-card
      ></v-col>
      <v-col md="4" sm="6" cols="12">
        <v-card class="pa-2" style="height: 100%">
          <h4 class="text-h5 font-weight-bold">Pie 圓餅圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <div class="d-flex align-center" style="height: 90%">
            <PieChart />
          </div>
        </v-card>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h5 font-weight-bold">長條圖+折線圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <lineAndBarChart />
        </v-card>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h5 font-weight-bold">長條圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <BarChart />
        </v-card>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h5 font-weight-bold">Line 折線圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <LineChart />
        </v-card>
      </v-col>
    </v-row>

    <div class="text-caption my-6 text-center">
      <v-divider class="pt-2 mb-2"></v-divider>
      相關圖表設定 請參考 apexcharts 套件
    </div>
  </v-container>
</template>

<script>
import areaChart from "@/components/chart/areaChart.vue";
import areaChartGreen from "@/components/chart/areaChart_green.vue";
import areaChartRed from "@/components/chart/areaChart_red.vue";
import areaChartPurple from "@/components/chart/areaChart_purple.vue";
import BarChart from "@/components/chart/barChart.vue";
import PieChart from "@/components/chart/pieChart.vue";
import LineChart from "@/components/chart/lineChart.vue";
import lineAndBarChart from "@/components/chart/lineAndBarChart.vue";
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: {
    PieChart,
    BarChart,
    areaChart,
    areaChartGreen,
    areaChartRed,
    LineChart,
    lineAndBarChart,
    areaChartPurple,
  },
};
</script>
