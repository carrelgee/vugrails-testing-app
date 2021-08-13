import auth from './middleware/auth'
import guest from './middleware/guest'

function loadView (view) {
	return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes =[
	{
		path: "/",
		name: "Home",
		component: loadView('Home'),
		meta: {
      middleware: [
        auth
      ],
			requiresAuth: true 
		},
	}, {
		path: "/login",
		name: "Login",
		component: loadView('Login'),
		meta: {
      middleware: [
          guest
      ]
		}
	}, 
	// otherwise redirect to home
	{ path: '*', redirect: '/' }
];

export default routes;