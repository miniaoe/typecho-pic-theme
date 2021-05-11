import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("../views/Index.vue")
    },
    {
      path:"/works",
      component:()=>import('../views/CatePage.vue')
    }
  ]
});

export default router;
