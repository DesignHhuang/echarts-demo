<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { cclData, currentData, dclData } from "./useChartsData";

const chartRef = ref<EchartsUIType>();
const { renderEcharts, getChartInstance } = useEcharts(chartRef);

onMounted(() => {
  renderEcharts({
    grid: {
      bottom: "12%",
      left: "1%",
      right: "1%",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      textStyle: {
        fontFamily: "geist-sans",
      },
      valueFormatter: (value) => `${value}A`,
    },
    dataZoom: [
      {
        type: "inside",
        minValueSpan: 1200 * 1000,
      },
    ],
    xAxis: {
      type: "time",
      axisLine: {
        show: false,
      },
      axisLabel: {
        hideOverlap: true,
      },
    },
    yAxis: {
      type: "value",
      scale: true,
      show: false,
      axisLabel: {
        formatter: "{value}A",
      },
    },
    series: [
      {
        smooth: true,
        data: cclData,
        type: "line",
        showSymbol: false,
        name: "CCL",
        itemStyle: {
          color: "#2563eb",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        smooth: true,
        data: dclData,
        type: "line",
        showSymbol: false,
        name: "DCL",
        itemStyle: {
          color: "#60a8fb",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        smooth: true,
        data: currentData,
        type: "line",
        showSymbol: false,
        name: "Current",
        itemStyle: {
          color: "#1dc355",
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
