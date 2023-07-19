export default [
  {
    path: "/dashboard/analytics",
    name: "dashboard-analytics",
    component: () => import("@/views/dashboard/analytics/Analytics.vue"),
  },
  {
    path: "/dashboard/ecommerce",
    name: "dashboard-ecommerce",
    component: () => import("@/views/dashboard/ecommerce/Ecommerce.vue"),
    // component: () => import("@/facture-matching/FactureMatching.vue"),
    // path: "/factura-matching",
  },
];
