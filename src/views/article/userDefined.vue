<script setup>
import { ref } from 'vue'
const imgList = ref([
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/lbt1.png', alt: '' },
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/lbt2.png', alt: '' },
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/lbt3.png', alt: '' },
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/fj1.jpg', alt: '' },
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/PixPin_2024-04-01_14-21-48.png', alt: '' },
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/PixPin_2024-04-01_14-22-07.png', alt: '' },
  { src: 'https://env-00jxgen4mzna.normal.cloudstatic.cn/vue-own-img/PixPin_2024-04-01_14-20-55.png', alt: '' }
])
</script>

<template>

    <el-carousel :interval="3000" type="card"
                 height="350px"
                 width="80%"
    >
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item.src" :alt="item.alt" :style="{ width: '100%', height: '100%' }" />
      </el-carousel-item>
    </el-carousel>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<style scoped>
</style>
