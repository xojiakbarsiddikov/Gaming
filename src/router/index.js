import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path : "/login",
        name: "login",
        component: () => import("../components/auth/Login.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if(to.path === '/') {
        next({
            name: 'login'
        })
    } else {
        next()
    }
});

export default router;
