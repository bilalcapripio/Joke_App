import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import Vuex from 'Vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
Vue.use(Vuex)
Vue.use(VueRouter);
const routes=[
    {path:'/',component:Home},
    {path:'/About',component:About}
]
const router=new VueRouter({
    routes
})
createApp(App).mount('#app')
