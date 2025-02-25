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
      splitLine: { show: false },
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
          color: "#14b8a6",
        },
        areaStyle: {
          opacity: 0.2,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#14b8a6",
              },
              {
                offset: 1,
                color: "#ccfbf1",
              },
            ],
          },
        },
      },
    ],
  });
});
</script>

<template>
  <EchartsUI ref="chartRef" />
</template>
