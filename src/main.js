import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import {routes} from './router.js'
import store from './store/store.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root='https://buy-sell-project-vue.firebaseio.com/'
Vue.filter('currency',(value)=>{
return '$'+value.toLocaleString();
});
const router = new VueRouter({
 mode:'history',
 routes

})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
