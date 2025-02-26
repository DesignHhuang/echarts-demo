<script lang="ts" setup>
import type { EchartsUIType } from "@/components/echarts";

import { onMounted, ref } from "vue";

import { EchartsUI, useEcharts } from "@/components/echarts";
import {
  maxVoltageData,
  minVoltageData,
  diffVoltageData,
  maxVoltageDeviceNo,
  minVoltageDeviceNo,
} from "./useChartsData";

const chartRef = ref<EchartsUIType>();
const { renderEcharts, getChartInstance } = useEcharts(chartRef);

onMounted(() => {
  renderEcharts({
    grid: {
      bottom: "12%",
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
        show: false,
        scale: true,
        splitLine: { show: false },
      },
      {
        //show: false,
        type: "value",
        show: false,
        //scale: true,
        splitLine: { show: false },
      },
    ],
    series: [
      {
        smooth: true,
        data: maxVoltageData,
        type: "line",
        showSymbol: false,
        name: "Max. Cell Voltage",
        yAxisIndex: 0,
        tooltip: {
          valueFormatter: (value, dataIndex) =>
            `${value}V(${maxVoltageDeviceNo[dataIndex]})`,
        },
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
        name: "Min. Cell Voltage",
        yAxisIndex: 0,
        tooltip: {
          valueFormatter: (value, dataIndex) =>
            `${value}V(${minVoltageDeviceNo[dataIndex]})`,
        },
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
        tooltip: {
          valueFormatter: (value) => `${value}mV`,
        },
        showSymbol: false,
        name: "Voltage Difference",
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
