import Vue from 'vue'
//import Vuex from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Product from '../views/Product.vue'
import Search from '../views/Search.vue'
import Logout from '../views/Logout.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Newproduk from '../views/admin/NewProduk.vue'

Vue.use(VueRouter)

function guardMyroute(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem('user-id')) {
        if (localStorage.getItem('role_user') == "SELLER") {
            isAuthenticated = true;
        } else{
            isAuthenticated = true;
            next('/');
        }
    } else {
        isAuthenticated = false;
    }
    if (isAuthenticated) {
        next();
    }
    else {
        next('/login');
    }
}

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
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/ProdukRelease',
        name: 'Newproduk',
        component: Newproduk
    },
    {
        path: '/Produk/:product_key',
        name: 'Detail',
        component: ProductDetail
    },
    {
        path: '/Cari',
        name: 'Cari',
        component: Search
    },
    {
        path: '/Logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/Produk',
        name: 'Produk',
        component: Product
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: guardMyroute,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router