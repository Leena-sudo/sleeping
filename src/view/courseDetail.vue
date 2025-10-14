<template>
  <div>课程详情</div>
  <ul class="course">
    <li 
      v-for="item in courseList.contents" 
      :key="item.id" 
      class="course-item"
    >
      <img :src="images"></img>
      <router-link :to="{ name: 'coursePlay', query: { pid: id, id: item.id } }">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {course} from './constant'
import images from '@/assets/images.png'

const route = useRoute()
const id = ref('')

id.value = route.query.id

const courseList = course.find(el => el.id === Number(id.value))
</script>

<style lang="scss" scoped>
.course{
  max-height:100%;
  overflow: auto;
  .course-item{
    display: flex;
    align-items: center;
    margin-top:15px;
    img{
      max-width: 40%;
    }
    p{
      margin-left: 15px;
    }
  }
}
  
</style>