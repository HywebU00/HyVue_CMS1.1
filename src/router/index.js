// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      // {
      //   path: "system",
      //   component: () => import("@/views/admin/systemComponent.vue"),
      // },
      // {
      //   path: "component",
      //   component: () => import("@/views/admin/Component.vue"),
      // },
      {
        path: "/",
        component: () => import("@/views/admin/defaultComponent.vue"),
      },
      // {
      //   path: "from",
      //   component: () => import("@/views/admin/fromComponent.vue"),
      // },
      // {
      //   path: "table",
      //   component: () => import("@/views/admin/tableComponent.vue"),
      // },
      // {
      //   path: "card",
      //   component: () => import("@/views/admin/cardComponent.vue"),
      // },
      // {
      //   path: "chart",
      //   component: () => import("@/views/admin/chartComponent.vue"),
      // },
      {
        path: "widget",
        component: () => import("@/views/admin/widgetComponent.vue"),
      },
      {
        path: "addNews",
        component: () => import("@/views/admin/addNewsComponent.vue"),
      },
      {
        path: "mediaPhoto",
        component: () => import("@/views/admin/mediaPhotoComponent.vue"),
      },
    ],
  },
  {
    path: "/component",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "containment",
        component: () => import("@/views/component/containmentComponent.vue"),
      },
      {
        path: "navigation",
        component: () => import("@/views/component/navigation.vue"),
      },
      {
        path: "controls",
        component: () => import("@/views/component/controls.vue"),
      },
      {
        path: "selection",
        component: () => import("@/views/component/selection.vue"),
      },
      {
        path: "feedback",
        component: () => import("@/views/component/feedback.vue"),
      },
      {
        path: "imageIcon",
        component: () => import("@/views/component/imageIcon.vue"),
      },
      {
        path: "pickers",
        component: () => import("@/views/component/pickers.vue"),
      },
      {
        path: "system",
        component: () => import("@/views/component/systemComponent.vue"),
      },
      {
        path: "component",
        component: () => import("@/views/component/Component.vue"),
      },
      {
        path: "from",
        component: () => import("@/views/component/fromComponent.vue"),
      },
      {
        path: "table",
        component: () => import("@/views/component/tableComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/component/cardComponent.vue"),
      },
      {
        path: "chart",
        component: () => import("@/views/component/chartComponent.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
