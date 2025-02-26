<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { maxTemperatureData, minTemperatureData } from "./useChartsData";

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
      //scale: true,
      //splitLine: { show: false },
      axisLabel: {
        formatter: "{value}°C",
      },
    },
    series: [
      {
        smooth: true,
        data: maxTemperatureData,
        type: "line",
        showSymbol: false,
        name: "Max(°C)",
        itemStyle: {
          color: "#ff595e",
        },
        areaStyle: { opacity: 0.2 },
      },
      {
        smooth: true,
        data: minTemperatureData,
        type: "line",
        showSymbol: false,
        name: "Min(°C)",
        itemStyle: {
          color: "#6a4c93",
        },
        areaStyle: { opacity: 0.2 },
      },
    ],
  });
});

defineExpose({ getChartInstance });
</script>

<template>
  <EchartsUI ref="chartRef" />
</template>
