import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//Views
const Home = () => import(/* webpackChunkName: 'home' */ '../views/home/Home.vue')
const Category = () => import(/* webpackChunkName: 'category' */ '../views/category/Category.vue')
const CategoryDetail = () => import(/* webpackChunkName: 'category' */ '../views/category/categorydetail/CategoryDetail.vue')
const User = () => import(/* webapckChunkName: 'User' */ '../views/user/User.vue')
//pages
const Information = () => import(/* webpackChunkName: 'information' */ '../pages/information/information.vue')
const Map = () => import(/* webpackChunkName: 'information' */ '../pages/map/map.vue')



const routes = [
  {
    path:'',
    redirect:'/home'
},
{
    path:'/home',
    component:Home
},
{
    path:'/category',
    name: 'category',
    component:Category,
    children: [
      {
        path: 'category_detail',
        name: 'category_detail',
        component: CategoryDetail
      }
    ]
},
{
    path:'/user',
    component:User
},
{
    path:'/information',
    component:Information
},
{
    path:'/map',
    component:Map
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
