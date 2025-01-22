import type { App } from "vue";

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import { BasicLayout } from "@/layouts/index";

const routes: RouteRecordRaw[] = [
  {
    meta: {
      title: "Root",
    },
    name: "Root",
    path: "/",
    redirect: "/playground",
  },
  {
    component: BasicLayout,
    name: "Playground",
    path: "/playground",
    children: [
      {
        name: "Charts",
        path: "/playground/charts",
        component: () => import("@/pages/charts/index.vue"),
        meta: {
          title: "Charts",
        },
      },
    ],
  },
];

/**
 *  @zh_CN 创建vue-router实例
 */
const router = createRouter({
  history: createWebHistory("/"),
  // 应该添加到路由的初始路由列表。
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return to.hash ? { behavior: "smooth", el: to.hash } : { left: 0, top: 0 };
  },
  // 是否应该禁止尾部斜杠。
  strict: true,
});

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export { router };
