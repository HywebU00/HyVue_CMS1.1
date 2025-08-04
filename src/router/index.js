// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      // {
      //   path: "system",
      //   component: () => import("@/views/component/systemComponent.vue"),
      // },
      // {
      //   path: "component",
      //   component: () => import("@/views/admin/Component.vue"),
      // },
      {
        path: "/",
        component: () => import("@/views/basicLayout/defaultComponent.vue"),
      },
      // {
      //   path: "from",
      //   component: () => import("@/views/basicLayout/fromComponent.vue"),
      // },
      // {
      //   path: "table",
      //   component: () => import("@/views/basicLayout/tableComponent.vue"),
      // },
      // {
      //   path: "card",
      //   component: () => import("@/views/basicLayout/cardComponent.vue"),
      // },
      // {
      //   path: "chart",
      //   component: () => import("@/views/basicLayout/chartComponent.vue"),
      // },
      {
        path: "widget",
        component: () => import("@/views/basicLayout/widgetComponent.vue"),
      },
      {
        path: "addNews",
        component: () => import("@/views/basicLayout/addNewsComponent.vue"),
      },
      {
        path: "mediaPhoto",
        component: () => import("@/views/basicLayout/mediaPhotoComponent.vue"),
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
        component: () => import("@/views/component/navigationComponent.vue"),
      },
      {
        path: "controls",
        component: () => import("@/views/component/controlsComponent.vue"),
      },
      {
        path: "selection",
        component: () => import("@/views/component/selectionComponent.vue"),
      },
      {
        path: "feedback",
        component: () => import("@/views/component/feedbackComponent.vue"),
      },
      {
        path: "imageIcon",
        component: () => import("@/views/component/imageIconComponent.vue"),
      },
      {
        path: "pickers",
        component: () => import("@/views/component/pickersComponent.vue"),
      },
      {
        path: "system",
        component: () => import("@/views/component/systemComponent.vue"),
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
    component: () => import("@/views/basicLayout/loginComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
