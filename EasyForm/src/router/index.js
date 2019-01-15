import Vue from 'vue';
import Router from 'vue-router';
import NewForm from '@/components/newform/NewForm';
import Preview from '@/components/preview/Preview';
import Computer from '@/components/preview/Computer';
import Mobile from '@/components/preview/Mobile';
import Login from '@/components/base/Login';
import MyForm from '@/components/myform/MyForm';
import MyCreated from "@/components/myform/MyCreated";
import FormDetail from "@/components/myform/FormDetail";
import Publish from "@/components/myform/Publish";
import PublisMode from "@/components/myform/PublisMode";
import OnAndOff from "@/components/myform/OnAndOff";
import Error from '@/components/base/Error';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "*",
      component: Error
    },
    {
      path: "/error",
      name: "error",
      component: Error
    },
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
    }, {
      name: "myform",
      path: "/myform",
      component: MyForm,
      children: [{
        path: "mycreated",
        name: "MyCreated",
        component: MyCreated
      }]
    }, {
      path: "/formdetail",
      name: "FormDetail",
      component: FormDetail,
      children: [
        {
          name: "Publish",
          path: "publish",
          component: Publish,
          children: [{
            name: "PublishMode",
            path: "mode",
            component: PublisMode
          }, {
            name: "OnAndOff",
            path: "enable",
            component: OnAndOff
          }]
        }
      ]
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
