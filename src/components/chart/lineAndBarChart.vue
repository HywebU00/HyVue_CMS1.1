<template>
  <apexchart
    class="lineAndBar"
    height="350"
    type="line"
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
          name: "Income",
          type: "column",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
          name: "Cashflow",
          type: "column",
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
        {
          name: "Revenue",
          type: "line",
          data: [20, 29, 37, 36, 44, 45, 50, 58],
        },
      ],
      chartOptions: {
        chart: {
          type: "line",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 2],
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
          {
            axisTicks: {
              show: false,
            },

            axisBorder: {
              show: false,
              color: "#008FFB",
            },
            labels: {
              style: {},
            },

            tooltip: {
              enabled: false,
            },
          },
          {
            seriesName: "Income",
            opposite: false,
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
              color: "#00E396",
            },
            labels: {
              show: false,
              style: {
                colors: "#00E396",
              },
            },
            tooltip: {
              enabled: false,
            },
          },
          {
            seriesName: "Revenue",
            opposite: false,
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
              color: "#c23e00",
            },
            labels: {
              show: false,
              style: {
                colors: "#c23e00",
              },
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },

        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  },
};
</script>

<style></style>
