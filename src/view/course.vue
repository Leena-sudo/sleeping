<template>
  <ul class="course">
    <li v-for="item in courseList" :key="item.id" class="course-item">
      <img :src="images"></img>
     
      <router-link :to="handleLink(item)">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import {course} from './constant'
import { useRouter } from 'vue-router'
import  images from '@/assets/images.png'

const router = useRouter()
const courseList = ref(course)

function handleLink(item) {
  const name = item.contents  ? 'courseDetail' : 'coursePlay'
  return { name: name, query: { id: item.id } }

}
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  flex-wrap: wrap;
  .course-item {
    margin-right: 20px;
    flex:0 0 calc(50% - 20px);
    text-align: center;
    &:last-child {
      // margin-right: 0;
    }
    img {
      max-width: 100%
    }
    a {
      color: #333;
      text-decoration: none;
    }
  }
}
</style>