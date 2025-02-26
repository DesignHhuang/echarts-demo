<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import {
  maxTemperatureData,
  maxTemperatureDeviceNo,
  minTemperatureData,
  minTemperatureDeviceNo,
} from "./useChartsData";

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
        formatter: "{value}°C",
      },
    },
    series: [
      {
        smooth: true,
        data: maxTemperatureData,
        tooltip: {
          valueFormatter: (value, index) =>
            `${value}°C(${maxTemperatureDeviceNo[index]})`,
        },
        type: "line",
        showSymbol: false,
        name: "Max. Temp.",
        itemStyle: {
          color: "#ff595e",
        },
        areaStyle: { opacity: 0.2 },
      },
      {
        smooth: true,
        data: minTemperatureData,
        tooltip: {
          valueFormatter: (value, index) =>
            `${value}°C(${minTemperatureDeviceNo[index]})`,
        },
        type: "line",
        showSymbol: false,
        name: "Min. Temp.",
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
