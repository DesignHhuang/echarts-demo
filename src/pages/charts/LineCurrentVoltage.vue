<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { currentData, voltageData } from "./useChartsData";

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
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}A",
        },
      },
      {
        type: "value",
        splitLine: { show: false },
        //scale: true,
        axisLabel: {
          formatter: "{value}V",
        },
      },
    ],
    series: [
      {
        smooth: true,
        data: currentData,
        type: "line",
        yAxisIndex: 0,
        showSymbol: false,
        name: "Current(A)",
        itemStyle: {
          color: "#019680",
        },
        areaStyle: { opacity: 0.2 },
      },
      {
        smooth: true,
        data: voltageData,
        type: "line",
        yAxisIndex: 1,
        showSymbol: false,
        name: "Voltage(V)",
        itemStyle: {
          color: "#5ab1ef",
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
