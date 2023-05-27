import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '../view/Home.vue'
import Main from '../view/Main.vue'
import Error from '../view/Error.vue'

function getChildRoute(){
    // const controller = import.meta.env.VITE_CONTROLLER_PATH ? import.meta.env.VITE_CONTROLLER_PATH : 'controller'
    const routes = [{path:'/',name:'main',component:Main}] as RouteRecordRaw[]
    const view = import.meta.glob('../view/controller/**/*.vue')

    Object.keys(view).forEach((key)=>{
        const name = key.split('controller/').pop()?.split('.').shift()?.toLocaleLowerCase().replace('/index','')!
        // console.log('router: '+name)
        const route = {
            path: `/${name}`,
            name,
            meta: {auth: false},
            component: view[key]
        } as RouteRecordRaw

        routes.push(route)
    })

    return routes
}

const router = createRouter({
    history: import.meta.env.VITE_ROUTER_HISTORY == '1' ? createWebHistory() : createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {auth: false},
            component: Home,
            children: getChildRoute()
        },
        {
            path: '/:any(.*)',
            name: 'error',
            meta: {auth: false},
            component: Error
        }
    ]
})

router.beforeEach((to,from,next)=>{
    next()
})

router.beforeResolve((to,from)=>{
    // console.log('beforeResolve')
})

router.afterEach((to,from,fail)=>{
    // console.log('afterEach')
})

export default router