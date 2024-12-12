import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue'
import Performance from '../pages/Performance.vue'
import Error from '../pages/Error.vue'
import Behaviour from '../pages/Behaviour.vue'
import Crash from '../pages/Crash.vue'


// 定义路由
const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/Home', component: Home },
  { path: '/Performance', component: Performance },
  { path: '/Error', component: Error },
  { path: '/Behaviour', component: Behaviour },
  { path: '/Crash', component: Crash },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用HTML5的History路由模式
  routes
});

export default router;