<template>
  <apexchart
    id="areaChart"
    class="areaChart"
    type="area"
    height="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Text1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Text2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        colors: ["#44aa55", "#86d9bc"],
        stroke: {
          show: true,
          curve: "smooth",
          width: 4,
          dashArray: 0,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          offsetY: 20,
          itemMargin: {
            horizontal: 10,
            vertical: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss"></style>
