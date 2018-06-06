import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vueSmoothScroll from 'vue-smooth-scroll';

import homepage from './components/homepage';
import redis from './components/redis';
import marketing from './components/marketing';
import drawings from './components/drawings';
import creojam from './components/creojam';
import print from './components/print';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(vueSmoothScroll);

const vueRouter = new VueRouter({
    routes: [
        { path: '/', component: homepage },
        { path: '/projects', component: homepage },
        { path: '/creojam', component: creojam },
        { path: '/print', component: print },
        { path: '/redis', component: redis },
        { path: '/marketing', component: marketing },
        { path: '/drawings', component: drawings }
    ]
});

new Vue({
    render: h => h(App),
    router: vueRouter
}).$mount('#app');
