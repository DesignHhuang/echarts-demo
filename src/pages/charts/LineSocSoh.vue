<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { socData, sohData } from "./useChartsData";

const chartRef = ref<EchartsUIType>();
const { renderEcharts, getChartInstance } = useEcharts(chartRef);

onMounted(() => {
  renderEcharts({
    grid: {
      bottom: "20%",
      left: "1%",
      right: "1%",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      textStyle: {
        fontFamily: "geist-sans",
      },
      valueFormatter: (value) => `${value}%`,
    },
    dataZoom: [
      {
        type: "inside",
        minValueSpan: 1200 * 1000,
      },
    ],
    xAxis: {
      type: "time",
      axisLabel: {
        hideOverlap: true,
      },
    },
    yAxis: {
      type: "value",
      show: false,
      //splitLine: { show: false },
      axisLabel: {
        formatter: "{value}%",
      },
    },
    series: [
      {
        smooth: true, //  SOC (%) soc
        data: socData,
        type: "line",
        showSymbol: false,
        name: "SOC",
        yAxisIndex: 0,
        itemStyle: {
          color: "#00c16a",
        },
        areaStyle: {
          opacity: 0.3,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00c16a",
              },
              {
                offset: 1,
                color: "#ccfbf1",
              },
            ],
          },
        },
      },
      {
        smooth: true, //  SOH (%) soh
        data: sohData,
        type: "line",
        showSymbol: false,
        name: "SOH",
        yAxisIndex: 0,
        itemStyle: {
          color: "#7c3aed",
        },
      },
    ],
  });
});

defineExpose({ getChartInstance });
</script>

<template>
  <EchartsUI ref="chartRef" />
</template>
