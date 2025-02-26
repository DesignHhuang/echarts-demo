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
        formatter: "{value}kWh",
      },
    },
    series: [
      {
        smooth: true,
        data: totalChargeData,
        type: "line",
        showSymbol: false,
        name: "Total Charged(kWh)",
        itemStyle: {
          color: "#0081a7",
        },
      },
      {
        smooth: true,
        data: totalDischargeData,
        type: "line",
        showSymbol: false,
        name: "Total Discharged(kWh)",
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
