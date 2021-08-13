import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(Router);

const router = new Router({
  //mode: "history",
  base: process.env.NODE_ENV === 'production'
      ? '/server-1/'
      : '/',
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    localStorage,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});


export default router;