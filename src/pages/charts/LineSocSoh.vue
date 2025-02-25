<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import { socData, sohData } from "./useChartsData";

const chartRef = ref<EchartsUIType>();
const { renderEcharts, getChartInstance } = useEcharts(chartRef);

onMounted(() => {
  renderEcharts({
    grid: {
      bottom: 0,
      containLabel: true,
      left: "1%",
      right: "1%",
      top: "10%",
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
    yAxis: [
      {
        name: "SOC",
        nameTextStyle: {
          align: "right",
          padding: [0, 8, 0, 0],
        },
        type: "value",
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}%",
        },
      },
      {
        name: "SOH",
        type: "value",
        nameTextStyle: {
          align: "left",
          padding: [0, 0, 0, 8],
        },
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}%",
        },
      },
    ],
    series: [
      {
        smooth: true, //  SOC (%) soc
        data: socData,
        type: "line",
        showSymbol: false,
        name: "SOC(%)",
        yAxisIndex: 0,
        itemStyle: {
          color: "#14b8a6",
        },
        lineStyle: {
          width: 1,
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
      {
        smooth: true, //  SOH (%) soh
        data: sohData,
        type: "line",
        showSymbol: false,
        name: "SOH(%)",
        yAxisIndex: 1,
        lineStyle: {
          width: 1,
        },
        itemStyle: {
          color: "#22c55e",
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
