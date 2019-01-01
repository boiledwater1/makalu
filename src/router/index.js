import Home from '../components/main.vue'
import Detail from '../components/Touristdetail.vue'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/details',
            name: 'details',
            component: Detail
        }
    ],
    mode: 'history'
});
  