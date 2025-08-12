<template>
  <apexchart
    type="donut"
    style="width: 100%"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          type: "pie",
        },
        labels: ["Text1", "Text2", "Text3", "Text4", "Text5"],
        colors: ["#00428E", "#0055A0", "#80CBD7", "#057BB7", "#80CBD7"],
        legend: {
          position: "bottom",
          offsetY: 20,
          itemMargin: {
            horizontal: 10,
            vertical: 10,
          },
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 1200,
            options: {
              chart: {},
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 991,
            options: {
              chart: {},
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 767,
            options: {
              chart: {},
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
// https://apexcharts.com/docs/chart-types/pie-donut/
</script>

<style></style>
