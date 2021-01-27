import Vue from 'vue'
//import Vuex from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
//import Product from '../views/Product.vue'
import Logout from '../views/Logout.vue'
import Dashboard from '../views/admin/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
     {
        path: '/Login',
        name: 'Login',
        component: Login
    },
     {
        path: '/Logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter:(to, from, next) =>{
            if(localStorage.getItem('isAuth') == "false"){
                next("/login");
            }else{
                next();
            }
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router