// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/basicLayout/defaultComponent.vue"),
      },

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
      {
        path: "apply",
        component: () => import("@/views/basicLayout/applyComponent.vue"),
      },
    ],
  },
  {
    path: "/element",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "containment",
        component: () => import("@/views/element/containmentComponent.vue"),
      },
      {
        path: "navigation",
        component: () => import("@/views/element/navigationComponent.vue"),
      },
      {
        path: "controls",
        component: () => import("@/views/element/controlsComponent.vue"),
      },
      {
        path: "selection",
        component: () => import("@/views/element/selectionComponent.vue"),
      },
      {
        path: "feedback",
        component: () => import("@/views/element/feedbackComponent.vue"),
      },
      {
        path: "imageIcon",
        component: () => import("@/views/element/imageIconComponent.vue"),
      },
      {
        path: "pickers",
        component: () => import("@/views/element/pickersComponent.vue"),
      },
      {
        path: "system",
        component: () => import("@/views/element/systemComponent.vue"),
      },
      {
        path: "form",
        component: () => import("@/views/element/formComponent.vue"),
      },
      {
        path: "table",
        component: () => import("@/views/element/tableComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/element/cardComponent.vue"),
      },
      {
        path: "chart",
        component: () => import("@/views/element/chartComponent.vue"),
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
