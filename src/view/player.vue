<template>
  <div>
    <div class="audio-player">
      <template v-if="courseDetail?.audio">
        <img src="@/assets/images.png" alt="">
        <audio controls>
          <source :src ='resolveVideo' type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </template>
      <template v-else>
        <video controls>
          <source :src ='courseDetail.video' type="video/mp4">
          Your browser does not support the video element.
        </video>
      </template>
    </div>
    <div class="player-message">
      <p>{{ courseDetail?.title }}</p>
    </div>
    <div class="player-description" v-if="courseDetail?.description">
      <img src="@/assets/ma4ym4mgg3wljb.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {course} from './constant'

const basicUrl = 'https://na.genefun.net/media/'
const route = useRoute();
const {pid, id}= route.query

const courseDetail = computed(()=>{
  let detail = {}
  if(pid !== undefined){
    detail = course.find(el => el.id === Number(pid))?.contents.find(el => Number(el.id) === Number(id))
  } else {
    detail = course.find(el => Number(el.id) === Number(id))
  }

  return detail
})

onMounted(() => {
  document.title = courseDetail.value.title || 'sleeping'
})
// const resolveVideo = computed(() =>  new URL(`../assets/video/${courseDetail.value.video ||  courseDetail.value.audio || ''}`, import.meta.url).href)

const resolveVideo = computed(() =>  new URL(`${courseDetail.value.video ||  courseDetail.value.audio || ''}`, import.meta.url).href)

</script>

<style lang="scss" scoped>
.audio-player {
  background:#3f5847;
  padding: 12px;
  text-align: center;
  img {
    max-width: 100%;
  }
  audio {
    width: 100%;
  }
  video{
    max-width:100%;
    max-height: 320px;
    // aspect-ratio: 16 / 12;
    object-fit: contain;
  }
}
</style>