import type { EChartsOption } from "echarts";

import type { Ref } from "vue";

import type { Nullable } from "@/types/helper";

import type EchartsUI from "./echarts-ui.vue";

import { nextTick, watch } from "vue";

import {
  tryOnUnmounted,
  useDebounceFn,
  useResizeObserver,
  useTimeoutFn,
  useWindowSize,
} from "@vueuse/core";

import echarts from "./echarts";

type EchartsUIType = typeof EchartsUI | undefined;

type EchartsThemeType = "dark" | "light" | null;

function useEcharts(chartRef: Ref<EchartsUIType>) {
  let chartInstance: echarts.ECharts | null = null;

  const { height, width } = useWindowSize();
  const resizeHandler: () => void = useDebounceFn(resize, 200);

  const initCharts = (t?: EchartsThemeType) => {
    const el = chartRef?.value?.$el;
    if (!el) {
      return;
    }
    chartInstance = echarts.init(el, t || null);

    return chartInstance;
  };

  const renderEcharts = (
    options: EChartsOption,
    clear = true
  ): Promise<Nullable<echarts.ECharts>> => {
    const currentOptions = options;
    return new Promise((resolve) => {
      if (chartRef.value?.offsetHeight === 0) {
        useTimeoutFn(async () => {
          resolve(await renderEcharts(currentOptions));
        }, 30);
        return;
      }
      nextTick(() => {
        useTimeoutFn(() => {
          if (!chartInstance) {
            const instance = initCharts();
            if (!instance) return;
          }
          clear && chartInstance?.clear();
          chartInstance?.setOption(currentOptions);
          if (chartInstance) {
            chartInstance.group = "group1";
            echarts.connect("group1");
          }
          resolve(chartInstance);
        }, 30);
      });
    });
  };

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: "quadraticIn",
      },
    });
  }

  watch([width, height], () => {
    resizeHandler?.();
  });

  useResizeObserver(chartRef as never, resizeHandler);

  tryOnUnmounted(() => {
    // 销毁实例，释放资源
    chartInstance?.dispose();
  });

  return {
    renderEcharts,
    resize,
    getChartInstance: () => chartInstance,
  };
}

export { useEcharts };

export type { EchartsUIType };
