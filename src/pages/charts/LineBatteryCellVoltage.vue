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
    yAxis: [
      {
        /* name: "Voltage",
        nameTextStyle: {
          align: "right",
        }, */
        type: "value",
        scale: true,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}V",
        },
      },
      {
        //show: false,
        type: "value",
        //scale: true,
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
        itemStyle: {
          color: "#e76e50",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        smooth: true,
        data: minVoltageData,
        type: "line",
        showSymbol: false,
        name: "Min Voltage(V)",
        yAxisIndex: 0,
        itemStyle: {
          color: "#2a9d90",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        smooth: true,
        data: diffVoltageData,
        type: "line",
        showSymbol: false,
        name: "Voltage Difference(mV)",
        yAxisIndex: 1,
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
