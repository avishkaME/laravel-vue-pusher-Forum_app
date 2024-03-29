import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home'
import Login from '../components/login/Login'
import signup from '../components/login/signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/logout'
import Read from '../components/forum/Read'
import Create from '../components/forum/Create'
import CreateCategory from '../components/category/CreateCategory'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: signup },
    { path: '/ask', component: Create },
    { path: '/category', component: CreateCategory },
    { path: '/forum', component: Forum , name:'forum'},
    { path: '/question/:slug', component: Read , name:'read'},
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

export default router