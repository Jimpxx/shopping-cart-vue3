import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';

const routes = [
    {
        path: '/',
        redirect: '/products',
    },
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    {
        path: '/products',
        name: 'products',
        component: Products,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
