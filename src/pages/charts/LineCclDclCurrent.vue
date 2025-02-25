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
        lineStyle: {
          width: 1,
        },
        itemStyle: {
          color: "#a8a29e",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#a8a29e",
              },
              {
                offset: 1,
                color: "#fafaf9",
              },
            ],
          },
        },
      },
      {
        smooth: true,
        data: dclData,
        type: "line",
        showSymbol: false,
        name: "DCL(A)",
        lineStyle: {
          width: 1,
        },
        itemStyle: {
          color: "#9ca3af",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#f9fafb",
              },
              {
                offset: 1,
                color: "#9ca3af",
              },
            ],
          },
        },
      },
      {
        smooth: true,
        data: currentData,
        type: "line",
        showSymbol: false,
        name: "Current(A)",
        itemStyle: {
          color: "#43e97b",
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
