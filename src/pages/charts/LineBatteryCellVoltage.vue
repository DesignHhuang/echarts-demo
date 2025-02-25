<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import {
  maxVoltageData,
  minVoltageData,
  diffVoltageData,
} from "./useChartsData";

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
      axisPointer: {
        lineStyle: {
          color: "#019680",
          width: 1,
        },
      },
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
        name: "Voltage",
        nameTextStyle: {
          align: "right",
        },
        type: "value",
        scale: true,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}V",
        },
      },
      {
        name: "Voltage Diff",
        nameTextStyle: {
          align: "center",
          padding: [0, 0, 0, 20],
        },
        type: "value",
        scale: true,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}mV",
        },
      },
    ],
    series: [
      {
        smooth: true,
        data: maxVoltageData,
        type: "line",
        showSymbol: false,
        name: "Max Voltage(V)",
        yAxisIndex: 0,
        lineStyle: {
          width: 1,
        },
        itemStyle: {
          color: "#facc15",
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
                color: "#facc15",
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
        data: minVoltageData,
        type: "line",
        showSymbol: false,
        name: "Min Voltage(V)",
        yAxisIndex: 0,
        lineStyle: {
          width: 1,
        },
        itemStyle: {
          color: "#ea580c",
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
                color: "#ea580c",
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
        data: diffVoltageData,
        type: "line",
        showSymbol: false,
        name: "Voltage Difference(mV)",
        yAxisIndex: 1,
        lineStyle: {
          type: "dashed",
        },
        itemStyle: {
          color: "#737373",
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
