import Vue from 'vue';
import Router from 'vue-router';
import NewForm from '@/components/newform/NewForm';
import Preview from '@/components/preview/Preview';
import Computer from '@/components/preview/Computer';
import Mobile from '@/components/preview/Mobile';
import Login from '@/components/base/Login';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'NewForm',
      component: NewForm
    },
    {
      path: '/preview',
      component: Preview,
      children: [{
        path: "computer",
        component: Computer
      }, {
        path: "mobile",
        component: Mobile
      }]
    },
    {
      name: "login",
      path: "/login",
      component: Login
    }
  ]
});
router.beforeEach((to, form, next) => {
  if (to.path === "/" || to.path === "/login" || to.path === "/preview" || localStorage.getItem("token")) {
    next();
  } else {
    next({path: "/login"})
  }
});

export default router;
