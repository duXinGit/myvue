// 导入vue
import Vue from 'vue'
// 导入 vue router(路由)
import VueRouter from 'vue-router'

import index from '../components/index'

import about from '../components/about'

import list from '../components/list'
// 告诉 vue 使用这个 router(路由)
Vue.use(VueRouter)
// 定义你的 router(路由)
const routes = [
  // 主页路由
  { path: '/', component: index },
  // about 页面路由
  { path: '/about', component: about },

  { path: '/list', component: list}
]
// 创建 router 实例并传递 `routes` 选项
// 您可以在这里传递其他选项，
// 但现在让我们保持简单。
const router = new VueRouter({
  routes, // `routes: routes` 的简写
  mode: 'history'
})

export default router;
