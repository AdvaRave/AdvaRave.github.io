import Vue from 'vue';
import App from './App.vue';
import homepage from './components/homepage';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
	{ path: '/', component: homepage }
];

new Vue({
	render: h => h(App),
	router: new VueRouter({routes})
}).$mount('#app');
