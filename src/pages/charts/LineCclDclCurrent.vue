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
      bottom: 0,
      containLabel: true,
      left: "1%",
      right: "1%",
      top: "2%",
    },
    tooltip: {
      trigger: "axis",
    },
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
        name: "CCL(A)",
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
        name: "DCL(A)",
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
        name: "Current(A)",
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
