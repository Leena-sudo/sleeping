import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: ()=> import('@/view/course.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/course/courseDetail',
    name: 'courseDetail',
    component: ()=> import('@/view/courseDetail.vue'),
    meta: {
      title: '课程详情'
    }
  },
  {
    path: '/course/coursePlay',
    name: 'coursePlay',
    component: ()=> import('@/view/player.vue'),
    meta: {
      title: '课程播放'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router