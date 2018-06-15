import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vueSmoothScroll from 'vue-smooth-scroll';

import homepage from './pages/homepage';
import redis from './pages/redis';
import marketing from './pages/marketing';
import drawings from './pages/drawings';
import creojam from './pages/creojam';
import print from './pages/print';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(vueSmoothScroll);

const vueRouter = new VueRouter({
    routes: [
        { path: '/', component: homepage },
        { path: '/projects', component: homepage },
        { path: '/contact', component: homepage },
        { path: '/creojam', component: creojam },
        { path: '/print', component: print },
        { path: '/redis', component: redis },
        { path: '/marketing', component: marketing },
        { path: '/drawings', component: drawings }
    ],
    scrollBehavior: function (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

new Vue({
    render: h => h(App),
    router: vueRouter
}).$mount('#app');
