import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vueSmoothScroll from './directives/smooth-scroll';
import VueLazyload from 'vue-lazyload';
import sha256 from 'js-sha256';

import homepage from './pages/homepage';
import redis from './pages/redis';
import creojam from './pages/creojam';
import obligo from './pages/obligo';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(vueSmoothScroll);
Vue.use(VueLazyload, {
    preLoad: 1.4,
    attempt: 1,
    throttleWait: 50
});

const vueRouter = new VueRouter({
    routes: [
        { path: '/', component: homepage },
        { path: '/creojam', component: creojam },
        { path: '/redis', component: redis },
        { path: '/obligo', component: obligo }
    ],
    scrollBehavior: function (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

vueRouter.beforeEach((to, from, next) => {
    const pass = window.prompt('This area is confidential! Please enter the password:');
    if (sha256(pass) != '6518275099ac33dde1d89bae039ab2d15d717f6b7212938d59d085e2635452f0') {
        alert('Wrong password...');
    } else {
        next();
    }
});

new Vue({
    render: h => h(App),
    router: vueRouter
}).$mount('#app');
