<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { totalChargeData, totalDischargeData } from "./useChartsData";

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
      valueFormatter: (value) => `${value}kWh`,
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
      show: false,
      //scale: true,
      //splitLine: { show: false },
      axisLabel: {
        formatter: "{value}kWh",
      },
    },
    series: [
      {
        smooth: true,
        data: totalChargeData,
        type: "line",
        showSymbol: false,
        name: "Total Charged",
        itemStyle: {
          color: "#0081a7",
        },
      },
      {
        smooth: true,
        data: totalDischargeData,
        type: "line",
        showSymbol: false,
        name: "Total Discharged",
        itemStyle: {
          color: "#77bfa3",
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
