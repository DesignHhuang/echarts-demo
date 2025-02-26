<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { powerData } from "./useChartsData";

const chartRef = ref<EchartsUIType>();
const { renderEcharts } = useEcharts(chartRef);

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
      valueFormatter: (value) => `${value}W`,
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
      show: false,
      type: "value",
      scale: true,
      splitLine: { show: false },
    },
    series: [
      {
        smooth: true,
        data: powerData,
        type: "line",
        showSymbol: false,
        name: "Power(W)",
        itemStyle: {
          color: "#e21d48",
        },
        areaStyle: {
          opacity: 0.2,
        },
      },
    ],
  });
});
</script>

<template>
  <EchartsUI ref="chartRef" />
</template>
