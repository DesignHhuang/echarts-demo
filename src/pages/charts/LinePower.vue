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
      axisLabel: {
        hideOverlap: true,
      },
    },
    yAxis: {
      type: "value",
      scale: true,
      //splitLine: { show: false },
      axisLabel: {
        formatter: "{value}W",
      },
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
