import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vueSmoothScroll from './directives/smooth-scroll';
import VueLazyload from 'vue-lazyload'

import homepage from './pages/homepage';
import redis from './pages/redis';
import creojam from './pages/creojam';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(vueSmoothScroll);
Vue.use(VueLazyload);


const vueRouter = new VueRouter({
    routes: [
        { path: '/', component: homepage },
        { path: '/creojam', component: creojam },
        { path: '/redis', component: redis }
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
