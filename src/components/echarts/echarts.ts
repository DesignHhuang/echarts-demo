import type { LineSeriesOption } from "echarts/charts";
import type {
  // 组件类型的定义后缀都为 ComponentOption
  DatasetComponentOption,
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from "echarts/components";
import type { ComposeOption } from "echarts/core";

import { LineChart } from "echarts/charts";

import {
  // 数据集组件
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from "echarts/components";

import * as echarts from "echarts/core";

import { LabelLayout, UniversalTransition } from "echarts/features";

import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | DatasetComponentOption
  | GridComponentOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
]);

export default echarts;
